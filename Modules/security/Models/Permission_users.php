<?php
/**Generate by ASGENS
*@author virtualspot  
*@date Mon Aug 12 21:21:14 GMT-04:00 2024  
*@time Mon Aug 12 21:21:14 GMT-04:00 2024  
*/


namespace Modules\security\Models;


use App\Models\BaseModel;

use Exception;

/**
 * Este es la clase modelo para la tabla permission_users.
 *
 * Los siguientes son los campos de la tabla 'permission_users':
 * @property integer $id
 * @property integer $permission_id
 * @property integer $users_id

 * Los siguientes son las relaciones de este modelo :

 * @property Permissions $permission
 * @property Users $users
 **/



class Permission_users extends BaseModel 
{
 /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'permission_users';

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

    const RELATIONS = ['permission','users'];

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
    const MODEL = 'Permission_users';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
      'permission_id',
      'users_id'
    ];

	 /**
     * Get the permission
     */
	  public function permission()
    {
			return $this->belongsTo(Permissions::class,'permission_id','id');
    }

	 /**
     * Get the users
     */
	  public function users()
    {
			return $this->belongsTo(Users::class,'users_id','id');
    }



     /* Many to many relationships */



    protected function rules($scenario = 'create')
    {
        $rules = include(__DIR__.'/../Rules/Permission_usersRule.php');
        if (!isset($rules[$scenario]))
            throw new Exception('Scenario ' . $scenario . ' not exist');
        return $rules[$scenario];
    }

}

