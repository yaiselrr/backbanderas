<?php

/**Generate by ASGENS
 *@author virtualspot  
 *@date Mon Jul 22 08:43:53 GMT-04:00 2024  
 *@time Mon Jul 22 08:43:53 GMT-04:00 2024  
 */


namespace Modules\manage\Models;


use App\Models\BaseModel;

use Exception;
use Modules\masters\Models\Attributes;

/**
 * Este es la clase modelo para la tabla products_attribute.
 *
 * Los siguientes son los campos de la tabla 'products_attribute':
 * @property integer $id
 * @property integer $product_id
 * @property integer $attribute_id

 * Los siguientes son las relaciones de este modelo :

 * @property Attributes $attribute
 * @property Products $product
 **/



class Products_attribute extends BaseModel
{
  /**
   * The table associated with the model.
   *
   * @var string
   */
  protected $table = 'products_attribute';

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

  const RELATIONS = ['attribute', 'product'];

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
  const MODEL = 'Products_attribute';
  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
    'product_id',
    'attribute_id'
  ];

  /**
   * Get the attribute
   */
  public function attribute()
  {
    return $this->belongsTo(Attributes::class, 'attribute_id', 'id');
  }

  /**
   * Get the product
   */
  public function product()
  {
    return $this->belongsTo(Products::class, 'product_id', 'id');
  }



  /* Many to many relationships */



  protected function rules($scenario = 'create')
  {
    $rules = include(__DIR__ . '/../Rules/Products_attributeRule.php');
    if (!isset($rules[$scenario]))
      throw new Exception('Scenario ' . $scenario . ' not exist');
    return $rules[$scenario];
  }
}
