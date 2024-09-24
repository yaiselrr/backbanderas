<?php
/**Generate by ASGENS
*@author virtualspot  
*@date Tue Aug 13 20:31:38 GMT-04:00 2024  
*@time Tue Aug 13 20:31:38 GMT-04:00 2024  
*/


namespace Modules\wp\Models;


use App\Models\BaseModel;

use Exception;

/**
 * Este es la clase modelo para la tabla products_type_view.
 *
 * Los siguientes son los campos de la tabla 'products_type_view':
 * @property integer $term_id
 * @property string $name
 * @property string $taxonomy
 * @property string $description
 * @property integer $term_group

 * Los siguientes son las relaciones de este modelo :

 **/



class Products_type_view extends BaseModel 
{
 /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'products_type_view';

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
    protected $primaryKey = 'term_id';

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
    protected $keyType = 'integer';

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
    const MODEL = 'Products_type_view';
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
        $rules = include(__DIR__.'/../Rules/Products_type_viewRule.php');
        if (!isset($rules[$scenario]))
            throw new Exception('Scenario ' . $scenario . ' not exist');
        return $rules[$scenario];
    }

}

