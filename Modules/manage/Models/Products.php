<?php
/**Generate by ASGENS
 * @author virtualspot
 * @date Sun Aug 11 09:34:50 GMT-04:00 2024
 * @time Sun Aug 11 09:34:50 GMT-04:00 2024
 */


namespace Modules\manage\Models;


use App\Helper\Helper;
use App\Models\BaseModel;
use App\Observers\GenerateCodeObserver;
use App\Scopes\NonDeletedScope;
use Exception;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;
use Illuminate\Database\Eloquent\Attributes\ScopedBy;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Storage;
use Modules\manage\Scope\ProductScope;
use Modules\masters\Models\Attributes;
use Modules\masters\Models\Categories;
use Modules\masters\Models\Product_type;

/**
 * Este es la clase modelo para la tabla products.
 *
 * Los siguientes son los campos de la tabla 'products':
 * @property integer $id
 * @property string $name
 * @property string $code
 * @property string $summary
 * @property string $description
 * @property Carbon $deleted_at
 * @property float $price
 * @property float $rating
 * @property string $slug_name
 * @property integer $stock
 * @property boolean $enabled
 * @property integer $category_id
 * @property Carbon $created_at
 * @property Carbon $updated_at
 * @property integer $product_type_id
 * @property float $min_price
 * @property float $max_price
 * @property string $image
 * @property string $key_words
 * Los siguientes son las relaciones de este modelo :
 * @property Categories $category
 * @property Product_type $product_type
 * @property Products_attribute[] $array_products_attribute
 * @property Attributes[] $array_attribute
 **/
#[ObservedBy(GenerateCodeObserver::class)]
#[ScopedBy(ProductScope::class)]
class Products extends BaseModel
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'products';

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

    const RELATIONS = ['category', 'product_type', 'array_products_attribute', 'array_attributes'];

    /**
     * The number of models to return for pagination.
     *
     * @var int
     */
    protected $perPage = 15;

    protected $appends = ['web_image', 'tiny_image'];

    /**
     * Model Class Name
     *
     * @var string
     */
    const MODEL = 'Products';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'code',
        'summary',
        'description',
        'deleted_at',
        'price',
        'rating',
        'slug_name',
        'stock',
        'enabled',
        'category_id',
        'created_at',
        'updated_at',
        'product_type_id',
        'min_price',
        'max_price',
        'image',
        'key_words'
    ];

    public function getWebImageAttribute()
    {
        $image = $this->image != "products.jpg" ? $this->image : "products/" . $this->image;
        $url= Storage::disk('public')->url($image);
        $ext = pathinfo($url, PATHINFO_EXTENSION); // To get extension
        $url=str_replace($ext,'webp',$url);
        return $url;
    }

    public function getTinyImageAttribute()
    {
        $image = $this->image != "products.jpg" ? $this->image : "products/" . $this->image;
        $url= Storage::disk('public')->url($image);
        $name = pathinfo($url, PATHINFO_FILENAME); // To get extension
        $url=str_replace($name,$name.'_tiny',$url);
        return $url;
    }

    /**
     * Get the category
     */
    public function category()
    {
        return $this->belongsTo(Categories::class, 'category_id', 'id');
    }

    /**
     * Get the product_type
     */
    public function product_type()
    {
        return $this->belongsTo(Product_type::class, 'product_type_id', 'id');
    }


    /**
     *
     * Get array_products_attribute
     */
    public function array_products_attribute()
    {
        return $this->hasMany(Products_attribute::class, 'product_id', 'id');
    }


    /* Many to many relationships */


    /**
     *
     * Get array_attribute
     */
    /**
     * @return BelongsToMany of Attributes
     */
    public function array_attribute()
    {
        return $this->belongsToMany(Attributes::class, 'products_attribute', 'product_id', 'attribute_id')
            ->as('products_attribute')
            ->withPivot(Products_attribute::columns)
            ->withGlobalScope('non_deleted', new NonDeletedScope());
    }

    /* Many to many relationships */


    protected function rules($scenario = 'create')
    {
        $rules = include(__DIR__ . '/../Rules/ProductsRule.php');
        if (!isset($rules[$scenario]))
            throw new Exception('Scenario ' . $scenario . ' not exist');
        return $rules[$scenario];
    }

    static function uploadFile($file, BaseModel $model)
    {
        $address = "products/" . str_replace("-", "_", strtolower($model->code));
        Storage::disk('public')->putFileAs($address, $file, $file->getClientOriginalName());
        $model->image = $address . '/' . $file->getClientOriginalName();
    }


    public function getUserImageAttribute()
    {
        $image = $this->image != "product.jpg" ? $this->image : "products/" . $this->image;
        return Storage::disk('public')->url($image);
    }

    protected static function boot()
    {
        parent::boot(); // TODO: Change the autogenerated stub
        self::updating(function (BaseModel $model) {
            $file = count(request()->allFiles()) > 0 ? request()->allFiles()['image'] : [];
            if ($file)
                self::uploadFile($file, $model);

        });
        self::creating(function (BaseModel $model) {
            $model->code = Helper::quickRandom(4);
        });
    }

}

