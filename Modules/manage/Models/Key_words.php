<?php

/**Generate by ASGENS
 *@author virtualspot  
 *@date Mon May 13 12:24:15 GMT-04:00 2024  
 *@time Mon May 13 12:24:15 GMT-04:00 2024  
 */


namespace Modules\manage\Models;


use App\Models\BaseModel;

use Exception;
use Illuminate\Support\Carbon;

/**
 * Este es la clase modelo para la tabla key_words.
 *
 * Los siguientes son los campos de la tabla 'key_words':
 * @property integer $id
 * @property string $name
 * @property string $description
 * @property Carbon $created_at
 * @property Carbon $updated_at

 * Los siguientes son las relaciones de este modelo :
 **/



class Key_words extends BaseModel
{
  /**
   * The table associated with the model.
   *
   * @var string
   */
  protected $table = 'key_words';

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

  const RELATIONS = [''];

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
  const MODEL = 'Key_words';
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
    $rules = include(__DIR__ . '/../Rules/Key_wordsRule.php');
    if (!isset($rules[$scenario]))
      throw new Exception('Scenario ' . $scenario . ' not exist');
    return $rules[$scenario];
  }
}
