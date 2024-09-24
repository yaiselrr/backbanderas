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
use DirectoryTree\Authorization\Traits\HasUsers;
use DirectoryTree\Authorization\Traits\HasRoles;
use DirectoryTree\Authorization\Traits\ClearsCachedPermissions;

/**
 * Este es la clase modelo para la tabla permissions.
 *
 * Los siguientes son los campos de la tabla 'permissions':
 * @property integer $id
 * @property Carbon $created_at
 * @property Carbon $updated_at
 * @property string $name
 * @property string $label

 * Los siguientes son las relaciones de este modelo :

 * @property Permission_role[] $array_permission_role
 * @property Roles[] $array_role
 * @property Permission_users[] $array_permission_users
 * @property Users[] $array_users
 **/



class Permissions extends BaseModel
{
  use HasUsers, HasRoles, ClearsCachedPermissions;
  /**
   * The table associated with the model.
   *
   * @var string
   */
  protected $table = 'permissions';

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

  const RELATIONS = ['array_permission_role', 'array_permission_users', 'array_role', 'array_users'];

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
  const MODEL = 'Permissions';
  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
    'created_at',
    'updated_at',
    'name',
    'label'
  ];


  /**
   * 
   * Get array_permission_role
   */
  public function array_permission_role()
  {
    return $this->hasMany(Permission_role::class, 'permission_id', 'id');
  }

  /**
   * 
   * Get array_permission_users
   */
  public function array_permission_users()
  {
    return $this->hasMany(Permission_users::class, 'permission_id', 'id');
  }


  /* Many to many relationships */


  /**
   * 
   * Get array_role
   */
  /**
   * @return BelongsToMany of Roles
   */
  public function array_role()
  {
    return $this->belongsToMany(Roles::class, 'permission_role', 'permission_id', 'role_id')
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
    return $this->belongsToMany(Users::class, 'permission_users', 'permission_id', 'users_id')
      ->as('permission_users')
      ->withPivot(Permission_users::columns)
      ->withGlobalScope('non_deleted', new NonDeletedScope());
  }


  protected function rules($scenario = 'create')
  {
    $rules = include(__DIR__ . '/../Rules/PermissionsRule.php');
    if (!isset($rules[$scenario]))
      throw new Exception('Scenario ' . $scenario . ' not exist');
    return $rules[$scenario];
  }
}
