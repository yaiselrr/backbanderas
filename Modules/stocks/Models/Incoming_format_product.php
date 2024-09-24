<?php

/**Generate by ASGENS
 *@author virtualspot  
 *@date Mon May 13 12:24:15 GMT-04:00 2024  
 *@time Mon May 13 12:24:15 GMT-04:00 2024  
 */


namespace Modules\stocks\Models;


use App\Models\BaseModel;

use Exception;
use Modules\manage\Models\Format_product;
use Illuminate\Support\Carbon;

/**
 * Este es la clase modelo para la tabla incoming_format_product.
 *
 * Los siguientes son los campos de la tabla 'incoming_format_product':
 * @property integer $id
 * @property integer $incoming_product_id
 * @property integer $format_product_id
 * @property float $amount
 * @property string $lote
 * @property Carbon $created_at
 * @property Carbon $updated_at

 * Los siguientes son las relaciones de este modelo :

 * @property Format_product $format_product
 * @property Incoming_products $incoming_product
 **/



class Incoming_format_product extends BaseModel
{
  /**
   * The table associated with the model.
   *
   * @var string
   */
  protected $table = 'incoming_format_product';

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

  const RELATIONS = ['format_product', 'incoming_product'];

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
  const MODEL = 'Incoming_format_product';
  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
    'incoming_product_id',
    'format_product_id',
    'amount',
    'lote',
    'created_at',
    'updated_at'
  ];

  /**
   * Get the format_product
   */
  public function format_product()
  {
    return $this->belongsTo(Format_product::class, 'format_product_id', 'id');
  }

  /**
   * Get the incoming_product
   */
  public function incoming_product()
  {
    return $this->belongsTo(Incoming_products::class, 'incoming_product_id', 'id');
  }



  /* Many to many relationships */



  protected function rules($scenario = 'create')
  {
    $rules = include(__DIR__ . '/../Rules/Incoming_format_productRule.php');
    if (!isset($rules[$scenario]))
      throw new Exception('Scenario ' . $scenario . ' not exist');
    return $rules[$scenario];
  }
}
