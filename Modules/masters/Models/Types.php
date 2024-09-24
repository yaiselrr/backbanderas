<?php
/**Generate by ASGENS
*@author virtualspot  
*@date Sun Aug 11 09:34:50 GMT-04:00 2024  
*@time Sun Aug 11 09:34:50 GMT-04:00 2024  
*/


namespace Modules\masters\Models;


use App\Models\BaseModel;

use Exception;
use Illuminate\Support\Carbon;

/**
 * Este es la clase modelo para la tabla types.
 *
 * Los siguientes son los campos de la tabla 'types':
 * @property integer $id
 * @property string $name
 * @property string $description
 * @property Carbon $created_at
 * @property Carbon $updated_at

 * Los siguientes son las relaciones de este modelo :

 **/



class Types extends BaseModel 
{
 /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'types';

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
    const MODEL = 'Types';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
      'name',
      'description',
      'created_at',
      'updated_at'
    ];



     /* Many to many relationships */



    protected function rules($scenario = 'create')
    {
        $rules = include(__DIR__.'/../Rules/TypesRule.php');
        if (!isset($rules[$scenario]))
            throw new Exception('Scenario ' . $scenario . ' not exist');
        return $rules[$scenario];
    }

}

