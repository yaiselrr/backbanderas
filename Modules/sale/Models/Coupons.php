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
use Modules\manage\Models\Client;
use Modules\masters\Models\Request_statuses;
use Modules\manage\Models\Orders;
use Illuminate\Support\Carbon;
use Modules\masters\Models\Types;

/**
 * Este es la clase modelo para la tabla coupons.
 *
 * Los siguientes son los campos de la tabla 'coupons':
 * @property integer $id
 * @property string $code
 * @property integer $type_id
 * @property float $coupon_value
 * @property integer $available_quantity
 * @property Carbon $start_date
 * @property Carbon $end_date
 * @property string $conditions
 * @property Carbon $created_at
 * @property Carbon $updated_at

 * Los siguientes son las relaciones de este modelo :

 * @property Types $role
 * @property Orders[] $array_orders
 * @property Client[] $array_client
 * @property Pay_ways[] $array_pay_way
 * @property Request_statuses[] $array_request_status
 **/



class Coupons extends BaseModel
{
  /**
   * The table associated with the model.
   *
   * @var string
   */
  protected $table = 'coupons';

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

  public $timestamps = false;


  /**
   * The "type" of the auto-incrementing ID.
   *
   * @var string
   */
  protected $keyType = 'integer';

  const RELATIONS = ['array_orders', 'array_client', 'array_pay_way', 'array_request_status', 'type'];

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
  const MODEL = 'Coupons';
  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
    'code',
    'type_id',
    'coupon_value',
    'available_quantity',
    'start_date',
    'end_date',
    'conditions',
    'created_at',
    'updated_at',
  ];

  /**
   * Get the role
   */
  public function type()
  {
    return $this->belongsTo(Types::class, 'type_id', 'id');
  }


  /**
   * 
   * Get array_orders
   */
  public function array_orders()
  {
    return $this->hasMany(Orders::class, 'coupon_id', 'id');
  }


  /* Many to many relationships */


  /**
   * 
   * Get array_client
   */
  /**
   * @return BelongsToMany of Client
   */
  public function array_client()
  {
    return $this->belongsToMany(Client::class, 'orders', 'coupon_id', 'client_id')
      ->as('orders')
      ->withPivot(Orders::columns)
      ->withGlobalScope('non_deleted', new NonDeletedScope());
  }

  /**
   * 
   * Get array_pay_ways
   */
  /**
   * @return BelongsToMany of Pay_ways
   */
  public function array_pay_way()
  {
    return $this->belongsToMany(Pay_ways::class, 'orders', 'coupon_id', 'pay_way_id')
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
    return $this->belongsToMany(Request_statuses::class, 'orders', 'coupon_id', 'request_status_id')
      ->as('orders')
      ->withPivot(Orders::columns)
      ->withGlobalScope('non_deleted', new NonDeletedScope());
  }


  protected function rules($scenario = 'create')
  {
    $rules = include(__DIR__ . '/../Rules/CouponsRule.php');
    if (!isset($rules[$scenario]))
      throw new Exception('Scenario ' . $scenario . ' not exist');
    return $rules[$scenario];
  }
}
