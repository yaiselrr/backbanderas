<?php

/**Generate by ASGENS
 *@author virtualspot  
 *@date Mon Jul 22 08:43:53 GMT-04:00 2024  
 *@time Mon Jul 22 08:43:53 GMT-04:00 2024  
 */


namespace Modules\manage\Models;


use App\Models\BaseModel;

use Exception;
use Illuminate\Support\Carbon;

/**
 * Este es la clase modelo para la tabla product_order.
 *
 * Los siguientes son los campos de la tabla 'product_order':
 * @property integer $id
 * @property float $quantity
 * @property integer $order_id
 * @property Carbon $created_at
 * @property Carbon $updated_at
 * @property integer $product_id

 * Los siguientes son las relaciones de este modelo :

 * @property Products $product
 * @property Orders $order
 * @property Refurbished[] $array_refurbished
 **/



class Product_order extends BaseModel
{
  /**
   * The table associated with the model.
   *
   * @var string
   */
  protected $table = 'product_order';

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

  const RELATIONS = ['product', 'order', 'array_refurbished'];

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
  const MODEL = 'Product_order';
  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
    'quantity',
    'order_id',
    'created_at',
    'updated_at',
    'product_id'
  ];

  /**
   * Get the product
   */
  public function product()
  {
    return $this->belongsTo(Products::class, 'product_id', 'id');
  }

  /**
   * Get the order
   */
  public function order()
  {
    return $this->belongsTo(Orders::class, 'order_id', 'id');
  }


  /**
   * 
   * Get array_refurbished
   */
  public function array_refurbished()
  {
    return $this->hasMany(Refurbished::class, 'product_order_id', 'id');
  }


  /* Many to many relationships */



  protected function rules($scenario = 'create')
  {
    $rules = include(__DIR__ . '/../Rules/Product_orderRule.php');
    if (!isset($rules[$scenario]))
      throw new Exception('Scenario ' . $scenario . ' not exist');
    return $rules[$scenario];
  }
}
