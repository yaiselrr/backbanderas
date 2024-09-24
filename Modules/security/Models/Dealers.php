<?php
/**Generate by ASGENS
*@author virtualspot  
*@date Mon Aug 12 21:47:33 GMT-04:00 2024  
*@time Mon Aug 12 21:47:33 GMT-04:00 2024  
*/


namespace Modules\security\Models;


use App\Models\BaseModel;

use Exception;
use Modules\manage\Models\Business_sectors;
use Illuminate\Support\Carbon;

/**
 * Este es la clase modelo para la tabla dealers.
 *
 * Los siguientes son los campos de la tabla 'dealers':
 * @property integer $id
 * @property string $contact
 * @property string $company
 * @property string $cif
 * @property string $company_email
 * @property string $phone
 * @property string $web_page
 * @property string $address
 * @property integer $business_sector_id
 * @property integer $user_id
 * @property Carbon $created_at
 * @property Carbon $updated_at

 * Los siguientes son las relaciones de este modelo :

 * @property Users $user
 * @property Business_sectors $business_sector
 **/



class Dealers extends BaseModel 
{
 /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'dealers';

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

    const RELATIONS = ['user','business_sector'];

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
    const MODEL = 'Dealers';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
      'contact',
      'company',
      'cif',
      'company_email',
      'phone',
      'web_page',
      'address',
      'business_sector_id',
      'user_id',
      'created_at',
      'updated_at'
    ];

	 /**
     * Get the user
     */
	  public function user()
    {
			return $this->belongsTo(Users::class,'user_id','id');
    }

	 /**
     * Get the business_sector
     */
	  public function business_sector()
    {
			return $this->belongsTo(Business_sectors::class,'business_sector_id','id');
    }



     /* Many to many relationships */



    protected function rules($scenario = 'create')
    {
        $rules = include(__DIR__.'/../Rules/DealersRule.php');
        if (!isset($rules[$scenario]))
            throw new Exception('Scenario ' . $scenario . ' not exist');
        return $rules[$scenario];
    }

}

