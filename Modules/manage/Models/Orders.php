<?php

/**Generate by ASGENS
 *@author virtualspot  
 *@date Mon Jul 22 08:43:53 GMT-04:00 2024  
 *@time Mon Jul 22 08:43:53 GMT-04:00 2024  
 */


namespace Modules\manage\Models;


use App\Models\BaseModel;

use Exception;
use App\Scopes\NonDeletedScope;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Modules\security\Models\Users;
use Modules\sale\Models\Pay_ways;
use Modules\masters\Models\Request_statuses;
use Illuminate\Support\Carbon;

/**
 * Este es la clase modelo para la tabla orders.
 *
 * Los siguientes son los campos de la tabla 'orders':
 * @property integer $id
 * @property string $code
 * @property string $phone
 * @property string $address
 * @property float $price
 * @property string $observations
 * @property integer $request_status_id
 * @property integer $pay_way_id
 * @property Carbon $delivery_date
 * @property Carbon $requested_date
 * @property Carbon $cancelled_at
 * @property integer $cancelled_by
 * @property Carbon $created_at
 * @property Carbon $updated_at

 * Los siguientes son las relaciones de este modelo :

 * @property Users $cancelled_by
 * @property Pay_ways $pay_way
 * @property Request_statuses $request_status
 * @property Format_product_order[] $array_format_product_order
 * @property Invoices[] $array_invoices
 **/



class Orders extends BaseModel
{
  /**
   * The table associated with the model.
   *
   * @var string
   */
  protected $table = 'orders';

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

  const RELATIONS = ['users_cancelled_by', 'pay_way', 'request_status', 'array_format_product_order', 'array_invoices'];

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
  const MODEL = 'Orders';
  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
    'code',
    'phone',
    'address',
    'price',
    'observations',
    'request_status_id',
    'pay_way_id',
    'delivery_date',
    'requested_date',
    'cancelled_at',
    'cancelled_by',
    'created_at',
    'updated_at'
  ];

  /**
   * Get the cancelled_by
   */
  public function cancelled_by()
  {
    return $this->belongsTo(Users::class, 'cancelled_by', 'id');
  }

  /**
   * Get the pay_way
   */
  public function pay_way()
  {
    return $this->belongsTo(Pay_ways::class, 'pay_way_id', 'id');
  }

  /**
   * Get the request_status
   */
  public function request_status()
  {
    return $this->belongsTo(Request_statuses::class, 'request_status_id', 'id');
  }


  /**
   * 
   * Get array_format_product_order
   */
  public function array_format_product_order()
  {
    return $this->hasMany(Product_order::class, 'order_id', 'id');
  }

  /**
   * 
   * Get array_invoices
   */
  public function array_invoices()
  {
    return $this->hasMany(Invoices::class, 'order_id', 'id');
  }


  /* Many to many relationships */



  protected function rules($scenario = 'create')
  {
    $rules = include(__DIR__ . '/../Rules/OrdersRule.php');
    if (!isset($rules[$scenario]))
      throw new Exception('Scenario ' . $scenario . ' not exist');
    return $rules[$scenario];
  }
}
