<?php


namespace Modules\manage\Services;


use App\Helper\Helper;
use App\Services\BaseService;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;
use Modules\manage\Models\Products;
use Modules\wp\Entities\MigrateWpData;
use Modules\wp\Models\All_products_relations_view;

class ProductsService extends BaseService implements MigrateWpData
{

    public function __construct()
    {
        parent::__construct('Modules\manage\Models\Products');
    }

    static public function MigrateWpData(Command $output = null)
    {
        $count = 0;
        $products = All_products_relations_view::query()->orderBy('ID', 'asc')->get()->all();
        $fp = fopen(Storage::path('public').'/products/'.'error.log', 'a');//opens file in append mode
        foreach ($products as $p) {
            $count++;
            $product = [];
            $product["id"] = $p['ID'];
            $product["name"] = $p['product_title'];
            $product["description"] = $p['product_description'];
            $product["slug_name"] = $p['slug'];
            $product["enabled"] = $p['product_status'] === 'publish';
            $product["category_id"] = $p['category_id'];
            $product["product_type_id"] = $p['product_type_id'];
            $product["rating"] = $p['rating_count'];
            $product["price"] = $p['name'] == 'simple' ? $p['min_price'] : null;
            $product["min_price"] = $p['min_price'];
            $product["max_price"] = $p['max_price'];
            $product["image"] = str_replace("bph.virtualspot.es", 'www.banderasphonline.com', $p['open_graph_image']);
            $ext = pathinfo($product["image"], PATHINFO_EXTENSION); // To get extension
            $name = pathinfo($product["image"], PATHINFO_FILENAME);
            $product["image"] ='products/product-'.$p['ID'].'/'.$name.'.'.$ext;
            $product["stock"] = intval($p['stock_quantity']);
            $product["key_words"] = $p['primary_focus_keyword'];
            $output->info('Tipo de producto ' . $p['name'] . ' id :' . $p->ID);
            Products::updateOrCreate(['id' => $p->ID], $product);
            try {
                self::download_convert_image('/products/' . "product-".$p['ID'], $product["image"], $output);
            }catch (\Exception $e){
                $output->getOutput()->info('Error Product ID:'.$p['ID']);
                $output->getOutput()->error($e->getMessage());
                fwrite($fp,  'Error Product ID:'.$p['ID'] .'--Error '.$e->getMessage(). PHP_EOL);
            }
        }
        return $count;
    }

    static public function download_convert_image($address_folder, $url, $command)
    {
        $file=null;
        try {
            $ext = pathinfo($url, PATHINFO_EXTENSION); // To get extension
            $name = pathinfo($url, PATHINFO_FILENAME);
            if($name==="")
                throw new \Exception('Not a file name');
            if(!file_exists(Storage::path('public').'/'.$address_folder.'/'.$name.'.'.$ext) && $name!="") {
                $file_name = Storage::disk('public')->putFileAs($address_folder, $url, $name . '.' . $ext);
                $file = Helper::convert_to_webp( Storage::path('public').'/'.$file_name, $ext);
                $file = Helper::change_resolution( Storage::path('public').'/'.$file_name, 16, 16,$ext);
            }
        } catch (\Exception $e) {
            throw $e;
        }
        return $file;
    }
}