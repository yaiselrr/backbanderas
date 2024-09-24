<?php
/**Generate by ASGENS
*@author virtualspot  
*@date Sat Aug 10 21:48:09 GMT-04:00 2024  
*@time Sat Aug 10 21:48:09 GMT-04:00 2024  
*/


namespace Modules\masters\Models;


use App\Models\BaseModel;

use Exception;

/**
 * Este es la clase modelo para la tabla product_type.
 *
 * Los siguientes son los campos de la tabla 'product_type':
 * @property integer $id
 * @property string $name
 * @property string $description

 * Los siguientes son las relaciones de este modelo :

 **/



class Product_type extends BaseModel 
{
 /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'product_type';

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
    const MODEL = 'Product_type';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
      'name',
      'description'
    ];



     /* Many to many relationships */



    protected function rules($scenario = 'create')
    {
        $rules = include(__DIR__.'/../Rules/Product_typeRule.php');
        if (!isset($rules[$scenario]))
            throw new Exception('Scenario ' . $scenario . ' not exist');
        return $rules[$scenario];
    }

}

