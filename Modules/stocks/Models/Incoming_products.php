<?php

/**Generate by ASGENS
 *@author virtualspot  
 *@date Mon May 13 12:24:15 GMT-04:00 2024  
 *@time Mon May 13 12:24:15 GMT-04:00 2024  
 */


namespace Modules\stocks\Models;


use App\Models\BaseModel;

use Exception;
use App\Scopes\NonDeletedScope;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Modules\manage\Models\Provider;
use Modules\manage\Models\Format_product;
use Illuminate\Support\Carbon;

/**
 * Este es la clase modelo para la tabla incoming_products.
 *
 * Los siguientes son los campos de la tabla 'incoming_products':
 * @property integer $id
 * @property string $code
 * @property string $incoming_date
 * @property boolean $received
 * @property integer $provider_id
 * @property Carbon $created_at
 * @property Carbon $updated_at

 * Los siguientes son las relaciones de este modelo :

 * @property Provider $provider
 * @property Incoming_format_product[] $array_incoming_format_product
 * @property Format_product[] $array_format_product
 **/



class Incoming_products extends BaseModel
{
  /**
   * The table associated with the model.
   *
   * @var string
   */
  protected $table = 'incoming_products';

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

  const RELATIONS = ['provider', 'array_incoming_format_product', 'array_format_product'];

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
  const MODEL = 'Incoming_products';
  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
    'code',
    'incoming_date',
    'received',
    'provider_id',
    'created_at',
    'updated_at'
  ];

  /**
   * Get the provider
   */
  public function provider()
  {
    return $this->belongsTo(Provider::class, 'provider_id', 'id');
  }


  /**
   * 
   * Get array_incoming_format_product
   */
  public function array_incoming_format_product()
  {
    return $this->hasMany(Incoming_format_product::class, 'incoming_product_id', 'id');
  }


  /* Many to many relationships */


  /**
   * 
   * Get array_format_product
   */
  /**
   * @return BelongsToMany of Format_product
   */
  public function array_format_product()
  {
    return $this->belongsToMany(Format_product::class, 'incoming_format_product', 'incoming_product_id', 'format_product_id')
      ->as('incoming_format_product')
      ->withPivot(Incoming_format_product::columns)
      ->withGlobalScope('non_deleted', new NonDeletedScope());
  }


  protected function rules($scenario = 'create')
  {
    $rules = include(__DIR__ . '/../Rules/Incoming_productsRule.php');
    if (!isset($rules[$scenario]))
      throw new Exception('Scenario ' . $scenario . ' not exist');
    return $rules[$scenario];
  }
}
