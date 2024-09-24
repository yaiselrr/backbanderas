<?php

/**Generate by ASGENS
 *@author virtualspot  
 *@date Mon Jul 22 08:43:53 GMT-04:00 2024  
 *@time Mon Jul 22 08:43:53 GMT-04:00 2024  
 */


namespace Modules\sale\Models;


use App\Models\BaseModel;

use Exception;
use App\Scopes\NonDeletedScope;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Modules\security\Models\Users;
use Modules\masters\Models\Request_statuses;
use Modules\manage\Models\Orders;
use Illuminate\Support\Carbon;

/**
 * Este es la clase modelo para la tabla pay_ways.
 *
 * Los siguientes son los campos de la tabla 'pay_ways':
 * @property integer $id
 * @property string $name
 * @property string $instructions
 * @property Carbon $created_at
 * @property Carbon $updated_at

 * Los siguientes son las relaciones de este modelo :

 * @property Orders[] $array_orders
 * @property Users[] $array_cancelled_by
 * @property Request_statuses[] $array_request_status
 **/



class Pay_ways extends BaseModel
{
  /**
   * The table associated with the model.
   *
   * @var string
   */
  protected $table = 'pay_ways';

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

  const RELATIONS = ['array_orders', 'array_users', 'array_request_statuses'];

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
  const MODEL = 'Pay_ways';
  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
    'name',
    'instructions',
    'created_at',
    'updated_at'
  ];


  /**
   * 
   * Get array_orders
   */
  public function array_orders()
  {
    return $this->hasMany(Orders::class, 'pay_way_id', 'id');
  }


  /* Many to many relationships */


  /**
   * 
   * Get array_cancelled_by
   */
  /**
   * @return BelongsToMany of Users
   */
  public function array_cancelled_by()
  {
    return $this->belongsToMany(Users::class, 'orders', 'pay_way_id', 'cancelled_by')
      ->as('orders')
      ->withPivot(Orders::columns)
      ->withGlobalScope('non_deleted', new NonDeletedScope());
  }

  /**
   * 
   * Get array_request_status
   */
  /**
   * @return BelongsToMany of Request_statuses
   */
  public function array_request_status()
  {
    return $this->belongsToMany(Request_statuses::class, 'orders', 'pay_way_id', 'request_status_id')
      ->as('orders')
      ->withPivot(Orders::columns)
      ->withGlobalScope('non_deleted', new NonDeletedScope());
  }


  protected function rules($scenario = 'create')
  {
    $rules = include(__DIR__ . '/../Rules/Pay_waysRule.php');
    if (!isset($rules[$scenario]))
      throw new Exception('Scenario ' . $scenario . ' not exist');
    return $rules[$scenario];
  }
}
