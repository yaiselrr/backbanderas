<?php

/**Generate by ASGENS
 *@author virtualspot  
 *@date Mon Aug 12 21:47:33 GMT-04:00 2024  
 *@time Mon Aug 12 21:47:33 GMT-04:00 2024  
 */


namespace Modules\manage\Models;


use App\Models\BaseModel;

use Exception;
use App\Scopes\NonDeletedScope;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Modules\security\Models\Dealers;
use Modules\security\Models\Users;
use Illuminate\Support\Carbon;

/**
 * Este es la clase modelo para la tabla business_sectors.
 *
 * Los siguientes son los campos de la tabla 'business_sectors':
 * @property integer $id
 * @property string $name
 * @property string $description
 * @property Carbon $created_at
 * @property Carbon $updated_at

 * Los siguientes son las relaciones de este modelo :

 **/



class Business_sectors extends BaseModel
{
  /**
   * The table associated with the model.
   *
   * @var string
   */
  protected $table = 'business_sectors';

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
  const MODEL = 'Business_sectors';
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


  /**
   * 
   * Get array_user
   */
  /**
   * @return BelongsToMany of Users
   */
  public function array_user()
  {
    return $this->belongsToMany(Users::class, 'dealers', 'business_sector_id', 'user_id')
      ->as('dealers')
      ->withPivot(Dealers::columns)
      ->withGlobalScope('non_deleted', new NonDeletedScope());
  }


  protected function rules($scenario = 'create')
  {
    $rules = include(__DIR__ . '/../Rules/Business_sectorsRule.php');
    if (!isset($rules[$scenario]))
      throw new Exception('Scenario ' . $scenario . ' not exist');
    return $rules[$scenario];
  }
}
