<?php
/**Generate by ASGENS
*@author virtualspot  
*@date Sat Aug 10 22:15:13 GMT-04:00 2024  
*@time Sat Aug 10 22:15:13 GMT-04:00 2024  
*/


namespace Modules\wp\Models;


use App\Models\BaseModel;

use Exception;

/**
 * Este es la clase modelo para la tabla cant_products_by_categories.
 *
 * Los siguientes son los campos de la tabla 'cant_products_by_categories':
 * @property string $name
 * @property string $slug
 * @property integer $term_id
 * @property string $meta_value
 * @property string $meta_key

 * Los siguientes son las relaciones de este modelo :

 **/



class Cant_products_by_categories extends BaseModel 
{
 /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'cant_products_by_categories';

   /**
     * The connection name for the model.
     *
     * @var string|null
     */
    protected $connection = 'wp';

    /**
     * The primarykey associated with the table-model.
     *
     * @var integer
     */
    protected $primaryKey = 'name';

    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */

    public $timestamps = false;


/**
     * Indicates if the IDs are auto-incrementing.
     *
     * @var bool
     */
    public $incrementing = false;

    /**
     * The "type" of the auto-incrementing ID.
     *
     * @var string
     */
    protected $keyType = 'string';

    const RELATIONS = [];

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
    const MODEL = 'Cant_products_by_categories';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
    ];



     /* Many to many relationships */



    protected function rules($scenario = 'create')
    {
        $rules = include(__DIR__.'/../Rules/Cant_products_by_categoriesRule.php');
        if (!isset($rules[$scenario]))
            throw new Exception('Scenario ' . $scenario . ' not exist');
        return $rules[$scenario];
    }

}

