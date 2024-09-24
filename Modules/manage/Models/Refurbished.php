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
 * Este es la clase modelo para la tabla refurbished.
 *
 * Los siguientes son los campos de la tabla 'refurbished':
 * @property integer $id
 * @property string $code
 * @property integer $format_product_order_id
 * @property integer $amount
 * @property string $description
 * @property Carbon $created_at
 * @property Carbon $updated_at

 * Los siguientes son las relaciones de este modelo :

 * @property Format_product_order $format_product_order
 **/



class Refurbished extends BaseModel 
{
 /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'refurbished';

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

    const RELATIONS = ['format_product_order'];

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
    const MODEL = 'Refurbished';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
      'code',
      'product_order_id',
      'amount',
      'description',
      'created_at',
      'updated_at'
    ];

	 /**
     * Get the format_product_order
     */
	  public function format_product_order()
    {
			return $this->belongsTo(Product_order::class,'product_order_id','id');
    }



     /* Many to many relationships */



    protected function rules($scenario = 'create')
    {
        $rules = include(__DIR__.'/../Rules/RefurbishedRule.php');
        if (!isset($rules[$scenario]))
            throw new Exception('Scenario ' . $scenario . ' not exist');
        return $rules[$scenario];
    }

}

