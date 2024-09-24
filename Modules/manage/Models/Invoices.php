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
 * Este es la clase modelo para la tabla invoices.
 *
 * Los siguientes son los campos de la tabla 'invoices':
 * @property integer $id
 * @property string $code
 * @property integer $year
 * @property string $phone
 * @property string $address
 * @property float $subtotal
 * @property float $total
 * @property string $pay_way
 * @property string $observations
 * @property Carbon $invoice_date
 * @property integer $order_id
 * @property string $prefix
 * @property float $discount
 * @property Carbon $cancelled_at
 * @property integer $cancelled_by
 * @property Carbon $created_at
 * @property Carbon $updated_at

 * Los siguientes son las relaciones de este modelo :

 * @property Orders $order
 **/



class Invoices extends BaseModel
{
  /**
   * The table associated with the model.
   *
   * @var string
   */
  protected $table = 'invoices';

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

  const RELATIONS = ['order'];

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
  const MODEL = 'Invoices';
  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
    'code',
    'year',
    'phone',
    'address',
    'subtotal',
    'total',
    'pay_way',
    'observations',
    'invoice_date',
    'order_id',
    'prefix',
    'discount',
    'cancelled_at',
    'cancelled_by',
    'created_at',
    'updated_at'
  ];

  /**
   * Get the order
   */
  public function order()
  {
    return $this->belongsTo(Orders::class, 'order_id', 'id');
  }



  /* Many to many relationships */



  protected function rules($scenario = 'create')
  {
    $rules = include(__DIR__ . '/../Rules/InvoicesRule.php');
    if (!isset($rules[$scenario]))
      throw new Exception('Scenario ' . $scenario . ' not exist');
    return $rules[$scenario];
  }
}
