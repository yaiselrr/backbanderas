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
use Modules\manage\Models\Products;
use Modules\manage\Models\Products_attribute;
use Illuminate\Support\Carbon;

/**
 * Este es la clase modelo para la tabla attributes.
 *
 * Los siguientes son los campos de la tabla 'attributes':
 * @property integer $id
 * @property string $name
 * @property string $type
 * @property string $strcuture
 * @property Carbon $created_at
 * @property Carbon $updated_at

 * Los siguientes son las relaciones de este modelo :

 * @property Products_attribute[] $array_products_attribute
 * @property Products[] $array_product
 **/



class Attributes extends BaseModel 
{
 /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'attributes';

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

    const RELATIONS = ['array_products_attribute'];

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
    const MODEL = 'Attributes';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
      'name',
      'type',
      'strcuture',
      'created_at',
      'updated_at'
    ];


	 /**
     * 
     * Get array_products_attribute
     */
	  public function array_products_attribute()
		{
			return $this->hasMany(Products_attribute::class,'attribute_id','id');
		}


     /* Many to many relationships */


	 /**
     * 
     * Get array_product
     */
    /**
     * @return BelongsToMany of Products
     */
	  public function array_product()
		{
			return $this->belongsToMany(Products::class,'products_attribute','attribute_id','product_id')
            ->as('products_attribute')
            ->withPivot(Products_attribute::columns)
            ->withGlobalScope('non_deleted', new NonDeletedScope());
		}


    protected function rules($scenario = 'create')
    {
        $rules = include(__DIR__.'/../Rules/AttributesRule.php');
        if (!isset($rules[$scenario]))
            throw new Exception('Scenario ' . $scenario . ' not exist');
        return $rules[$scenario];
    }

}

