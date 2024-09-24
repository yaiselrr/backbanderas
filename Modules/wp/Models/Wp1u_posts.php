<?php
/**Generate by ASGENS
*@author virtualspot  
*@date Tue Aug 13 20:31:38 GMT-04:00 2024  
*@time Tue Aug 13 20:31:38 GMT-04:00 2024  
*/


namespace Modules\wp\Models;


use App\Models\BaseModel;

use Exception;
use Illuminate\Support\Carbon;

/**
 * Este es la clase modelo para la tabla wp1u_posts.
 *
 * Los siguientes son los campos de la tabla 'wp1u_posts':
 * @property integer $ID
 * @property integer $post_author
 * @property Carbon $post_date
 * @property Carbon $post_date_gmt
 * @property string $post_content
 * @property string $post_title
 * @property string $post_excerpt
 * @property string $post_status
 * @property string $comment_status
 * @property string $ping_status
 * @property string $post_password
 * @property string $post_name
 * @property string $to_ping
 * @property string $pinged
 * @property Carbon $post_modified
 * @property Carbon $post_modified_gmt
 * @property string $post_content_filtered
 * @property integer $post_parent
 * @property string $guid
 * @property integer $menu_order
 * @property string $post_type
 * @property string $post_mime_type
 * @property integer $comment_count

 * Los siguientes son las relaciones de este modelo :

 **/



class Wp1u_posts extends BaseModel 
{
 /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'wp1u_posts';

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
    protected $primaryKey = 'ID';

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
    const MODEL = 'Wp1u_posts';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
      'post_author',
      'post_date',
      'post_date_gmt',
      'post_content',
      'post_title',
      'post_excerpt',
      'post_status',
      'comment_status',
      'ping_status',
      'post_password',
      'post_name',
      'to_ping',
      'pinged',
      'post_modified',
      'post_modified_gmt',
      'post_content_filtered',
      'post_parent',
      'guid',
      'menu_order',
      'post_type',
      'post_mime_type',
      'comment_count'
    ];



     /* Many to many relationships */
    public function parent()
    {
        return $this->belongsTo(All_products_relations_view::class,'post_parent','ID');
    }


    protected function rules($scenario = 'create')
    {
        $rules = include(__DIR__.'/../Rules/Wp1u_postsRule.php');
        if (!isset($rules[$scenario]))
            throw new Exception('Scenario ' . $scenario . ' not exist');
        return $rules[$scenario];
    }

}

