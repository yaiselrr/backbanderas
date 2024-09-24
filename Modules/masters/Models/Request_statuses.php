<?php

/**Generate by ASGENS
 *@author virtualspot  
 *@date Mon Jul 22 08:43:53 GMT-04:00 2024  
 *@time Mon Jul 22 08:43:53 GMT-04:00 2024  
 */


namespace Modules\masters\Models;


use App\Models\BaseModel;

use Exception;
use App\Scopes\NonDeletedScope;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Modules\manage\Models\Client;
use Modules\sale\Models\Coupons;
use Modules\sale\Models\Pay_ways;
use Modules\manage\Models\Orders;
use Illuminate\Support\Carbon;

/**
 * Este es la clase modelo para la tabla request_statuses.
 *
 * Los siguientes son los campos de la tabla 'request_statuses':
 * @property integer $id
 * @property string $name
 * @property string $decription
 * @property Carbon $created_at
 * @property Carbon $updated_at

 * Los siguientes son las relaciones de este modelo :

 * @property Orders[] $array_orders
 * @property Client[] $array_client
 * @property Coupons[] $array_coupon
 * @property Pay_ways[] $array_pay_way
 **/



class Request_statuses extends BaseModel
{
  /**
   * The table associated with the model.
   *
   * @var string
   */
  protected $table = 'request_statuses';

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

  const RELATIONS = ['array_orders', 'array_client', 'array_coupon', 'array_pay_way'];

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
  const MODEL = 'Request_statuses';
  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
    'name',
    'decription',
    'created_at',
    'updated_at'
  ];


  /**
   * 
   * Get array_orders
   */
  public function array_orders()
  {
    return $this->hasMany(Orders::class, 'request_status_id', 'id');
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
    return $this->belongsToMany(Client::class, 'orders', 'request_status_id', 'client_id')
      ->as('orders')
      ->withPivot(Orders::columns)
      ->withGlobalScope('non_deleted', new NonDeletedScope());
  }

  /**
   * 
   * Get array_coupon
   */
  /**
   * @return BelongsToMany of Coupons
   */
  public function array_coupon()
  {
    return $this->belongsToMany(Coupons::class, 'orders', 'request_status_id', 'coupon_id')
      ->as('orders')
      ->withPivot(Orders::columns)
      ->withGlobalScope('non_deleted', new NonDeletedScope());
  }

  /**
   * 
   * Get array_pay_way
   */
  /**
   * @return BelongsToMany of Pay_ways
   */
  public function array_pay_way()
  {
    return $this->belongsToMany(Pay_ways::class, 'orders', 'request_status_id', 'pay_way_id')
      ->as('orders')
      ->withPivot(Orders::columns)
      ->withGlobalScope('non_deleted', new NonDeletedScope());
  }


  protected function rules($scenario = 'create')
  {
    $rules = include(__DIR__ . '/../Rules/Request_statusesRule.php');
    if (!isset($rules[$scenario]))
      throw new Exception('Scenario ' . $scenario . ' not exist');
    return $rules[$scenario];
  }
}
