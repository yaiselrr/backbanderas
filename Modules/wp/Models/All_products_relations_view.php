<?php
/**Generate by ASGENS
 * @author virtualspot
 * @date Tue Aug 13 20:31:38 GMT-04:00 2024
 * @time Tue Aug 13 20:31:38 GMT-04:00 2024
 */


namespace Modules\wp\Models;


use App\Models\BaseModel;

use Exception;

/**
 * Este es la clase modelo para la tabla all_products_relations_view.
 *
 * Los siguientes son los campos de la tabla 'all_products_relations_view':
 * @property integer $ID
 * @property string $product_title
 * @property string $product_description
 * @property string $product_status
 * @property string $slug
 * @property string $product_type
 * @property string $name
 * @property integer $product_type_id
 * @property integer $category_id
 * @property string $category_name
 * @property string $primary_focus_keyword
 * @property string $open_graph_title
 * @property string $open_graph_image
 * @property string $open_graph_image_meta
 * @property string $twitter_image
 * @property float $min_price
 * @property float $max_price
 * @property integer $rating_count
 * @property float $average_rating
 * @property float $stock_quantity
 * @property boolean $onsale
 * Los siguientes son las relaciones de este modelo :
 **/
class All_products_relations_view extends BaseModel
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'all_products_relations_view';

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
    const MODEL = 'All_products_relations_view';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'primary_focus_keyword',
        'open_graph_title',
        'open_graph_image',
        'open_graph_image_meta',
        'twitter_image',
        'min_price',
        'max_price',
        'rating_count',
        'average_rating',
        'stock_quantity',
        'onsale'
    ];


    /* Many to many relationships */
    /**
     * Get the category
     */


    /**
     *
     * Get data post
     */
    public function data_post()
    {
        return $this->belongsTo(Wp1u_posts::class, 'ID', 'post_parent');
    }


    protected function rules($scenario = 'create')
    {
        $rules = include(__DIR__ . '/../Rules/All_products_relations_viewRule.php');
        if (!isset($rules[$scenario]))
            throw new Exception('Scenario ' . $scenario . ' not exist');
        return $rules[$scenario];
    }

}

