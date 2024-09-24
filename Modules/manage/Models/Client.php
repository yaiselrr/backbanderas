<?php

/**Generate by ASGENS
 *@author virtualspot  
 *@date Mon Jul 22 08:43:53 GMT-04:00 2024  
 *@time Mon Jul 22 08:43:53 GMT-04:00 2024  
 */


namespace Modules\manage\Models;


use App\Models\BaseModel;

use Exception;
use Modules\security\Models\Users;
use Illuminate\Support\Carbon;

/**
 * Este es la clase modelo para la tabla client.
 *
 * Los siguientes son los campos de la tabla 'client':
 * @property string $code
 * @property integer $id
 * @property Carbon $created_at
 * @property Carbon $updated_at

 * Los siguientes son las relaciones de este modelo :

 * @property Users $
 **/



class Client extends BaseModel
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'client';

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
    protected $primaryKey = 'code';

    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */

    public $timestamps = true;


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

    const RELATIONS = ['user'];

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
    const MODEL = 'Client';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'code',
        'user_id',
        'created_at',
        'updated_at'
    ];

    /**
     * Get the 
     */
    public function user()
    {
        return $this->belongsTo(Users::class, 'user_id', 'id');
    }



    /* Many to many relationships */



    protected function rules($scenario = 'create')
    {
        $rules = include(__DIR__ . '/../Rules/ClientRule.php');
        if (!isset($rules[$scenario]))
            throw new Exception('Scenario ' . $scenario . ' not exist');
        return $rules[$scenario];
    }
}
