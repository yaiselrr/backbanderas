<?php

/**Generate by ASGENS
 *@author virtualspot  
 *@date Mon Aug 12 21:21:14 GMT-04:00 2024  
 *@time Mon Aug 12 21:21:14 GMT-04:00 2024  
 */


namespace Modules\security\Models;


use App\Models\BaseModel;

use Exception;
use App\Scopes\NonDeletedScope;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Support\Carbon;
use DirectoryTree\Authorization\Traits\ManagesPermissions;

/**
 * Este es la clase modelo para la tabla roles.
 *
 * Los siguientes son los campos de la tabla 'roles':
 * @property integer $id
 * @property integer $role_father_id
 * @property Carbon $created_at
 * @property Carbon $updated_at
 * @property string $name
 * @property string $label
 * @property string $description

 * Los siguientes son las relaciones de este modelo :

 * @property Roles $role_father
 * @property Permission_role[] $array_permission_role
 * @property Permissions[] $array_permission
 * @property Role_users[] $array_role_users
 * @property Users[] $array_users
 * @property Roles[] $array_roles
 **/



class Roles extends BaseModel
{
  use ManagesPermissions;
  /**
   * The table associated with the model.
   *
   * @var string
   */
  protected $table = 'roles';

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

  const RELATIONS = ['role_father', 'array_permission_role', 'array_role_users', 'array_roles', 'array_permission', 'array_users'];

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
  const MODEL = 'Roles';
  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
    'role_father_id',
    'created_at',
    'updated_at',
    'name',
    'label',
    'description'
  ];

  /**
   * Get the role_father
   */
  public function role_father()
  {
    return $this->belongsTo(Roles::class, 'role_father_id', 'id');
  }


  /**
   * 
   * Get array_permission_role
   */
  public function array_permission_role()
  {
    return $this->hasMany(Permission_role::class, 'role_id', 'id');
  }

  /**
   * 
   * Get array_role_users
   */
  public function array_role_users()
  {
    return $this->hasMany(Role_users::class, 'role_id', 'id');
  }

  /**
   * 
   * Get array_roles
   */
  public function array_roles()
  {
    return $this->hasMany(Roles::class, 'role_father_id', 'id');
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
    return $this->belongsToMany(Permissions::class, 'permission_role', 'role_id', 'permission_id')
      ->as('permission_role')
      ->withPivot(Permission_role::columns)
      ->withGlobalScope('non_deleted', new NonDeletedScope());
  }

  /**
   * 
   * Get array_users
   */
  /**
   * @return BelongsToMany of Users
   */
  public function array_users()
  {
    return $this->belongsToMany(Users::class, 'role_users', 'role_id', 'users_id')
      ->as('role_users')
      ->withPivot(Role_users::columns)
      ->withGlobalScope('non_deleted', new NonDeletedScope());
  }


  protected function rules($scenario = 'create')
  {
    $rules = include(__DIR__ . '/../Rules/RolesRule.php');
    if (!isset($rules[$scenario]))
      throw new Exception('Scenario ' . $scenario . ' not exist');
    return $rules[$scenario];
  }
}
