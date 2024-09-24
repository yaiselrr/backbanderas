<?php

/**Generate by ASGENS
 * @author virtualspot
 * @date Mon May 13 12:24:15 GMT-04:00 2024
 * @time Mon May 13 12:24:15 GMT-04:00 2024
 */


namespace Modules\security\Models;


use App\Models\BaseModel;
use App\Observers\HashPasswordObserver;
use App\Scopes\NonDeletedScope;
use DirectoryTree\Authorization\Traits\Authorizable;
use Exception;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\CanResetPassword as CanResetPasswordContract;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Carbon;
use Modules\manage\Models\Client;
use Tymon\JWTAuth\Contracts\JWTSubject;

/**
 * Este es la clase modelo para la tabla users.
 *
 * Los siguientes son los campos de la tabla 'users':
 * @property integer $id
 * @property string $name
 * @property string $email
 * @property Carbon $email_verified_at
 * @property string $password
 * @property string $addresses
 * @property string $phones
 * @property Carbon $last_login_at
 * @property string $last_login_ip
 * @property Carbon $created_at
 * @property Carbon $updated_at
 * @property integer $role_id
 * Los siguientes son las relaciones de este modelo :
 * @property Client[] $array_client
 * @property Permission_users[] $array_permission_users
 * @property Permissions[] $array_permission
 * @property Role_users[] $array_role_users
 * @property Roles[] $array_role
 **/
#[ObservedBy(HashPasswordObserver::class)]
class Users extends BaseModel implements
    AuthenticatableContract,
    AuthorizableContract,
    CanResetPasswordContract,
    JWTSubject
{
    use \Illuminate\Auth\Authenticatable, \Illuminate\Foundation\Auth\Access\Authorizable, \Illuminate\Auth\Passwords\CanResetPassword, \Illuminate\Auth\MustVerifyEmail, HasFactory, Notifiable;
    use Authorizable;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'users';

    /**
     * The connection name for the model.
     *
     * @var string|null
     */
    protected $connection = 'db';

    /**
     * The primarykey associated with the table-model.
     *
     * @var integer
     */
    protected $primaryKey = 'id';

    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */

    public $timestamps = true;


    /**
     * The "type" of the auto-incrementing ID.
     *
     * @var string
     */
    protected $keyType = 'integer';

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = ['password'];

    const RELATIONS = [
        'array_client',
        'array_permission_users',
        'array_role_users',
        'array_permission',
        'array_role'
    ];

    /**
     * The number of models to return for pagination.
     *
     * @var int
     */
    protected $perPage = 15;

    protected $appends = [];

    /**
     * Model Class Name
     *
     * @var string
     */
    const MODEL = 'Users';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'email_verified_at',
        'password',
        'addresses',
        'phones',
        'last_login_at',
        'last_login_ip',
        'created_at',
        'updated_at',
    ];

    /**
     *
     * Get array_client
     */
    public function array_dealers()
    {
        return $this->hasMany(Dealers::class, 'user_id', 'id');
    }

    /**
     *
     * Get array_client
     */
    public function array_client()
    {
        return $this->hasMany(Client::class, 'user_id', 'id');
    }

    /**
     *
     * Get array_permission_users
     */
    public function array_permission_users()
    {
        return $this->hasMany(Permission_users::class, 'users_id', 'id');
    }

    /**
     *
     * Get array_role_users
     */
    public function array_role_users()
    {
        return $this->hasMany(Role_users::class, 'users_id', 'id');
    }


    /* Many to many relationships */


    /**
     *
     * Get array_permission
     */
    /**
     * @return BelongsToMany of Permissions
     */
    public function array_permission()
    {
        return $this->belongsToMany(Permissions::class, 'permission_users', 'users_id', 'permission_id')
            ->as('permission_users')
            ->withPivot(Permission_users::columns)
            ->withGlobalScope('non_deleted', new NonDeletedScope());
    }

    /**
     *
     * Get array_role
     */
    /**
     * @return BelongsToMany of Roles
     */
    public function array_role()
    {
        return $this->belongsToMany(Roles::class, 'role_users', 'users_id', 'role_id')
            ->as('role_users')
            ->withPivot(Role_users::columns)
            ->withGlobalScope('non_deleted', new NonDeletedScope());
    }



    protected function rules($scenario = 'create')
    {
        $rules = include(__DIR__ . '/../Rules/UsersRule.php');
        if (!isset($rules[$scenario]))
            throw new Exception('Scenario ' . $scenario . ' not exist');
        return $rules[$scenario];
    }

    public function getAuthPassword()
    {
        return $this->attributes['password'];
    }

    /**
     * @inheritDoc
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * @inheritDoc
     */
    public function getJWTCustomClaims()
    {
        return ['email' => $this->email, 'array_role' => $this->array_role, 'array_permission' => $this->array_permission];
    }

    protected static function boot()
    {
        parent::boot(); // TODO: Change the autogenerated stub
        self::creating(function (Users $model) {
            $p['email_verified_at'] = date('Y-m-d h:m');
            $p['last_login_at'] = date('Y-m-d h:m');
        });
    }
}
