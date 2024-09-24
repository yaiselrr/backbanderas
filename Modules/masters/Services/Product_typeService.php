<?php


namespace Modules\masters\Services;


use App\Services\BaseService;
use Modules\masters\Models\Product_type;
use Modules\wp\Entities\MigrateWpData;
use Modules\wp\Models\Products_type_view;

class Product_typeService extends BaseService implements MigrateWpData
{

    public function __construct()
    {
        parent::__construct('Modules\masters\Models\Product_type');
    }

    static public function MigrateWpData($output=null)
    {
        $count = 0;
        $product_types = Products_type_view::query()->orderBy('term_id', 'asc')->get()->all();
        foreach ($product_types as $p) {
            $count++;
            $product_type = [];
            $product_type["description"] = $p['description'].'-';
            $product_type["name"] = ucfirst($p['name']);
            $product_type["id"] = $p->term_id;
            $output->info('Tipo de producto ' . $p['name'] . ' id :'.$p->term_id);
            Product_type::updateOrCreate(['id' => $p->term_id], $product_type);
        }

        return $count;
    }
}

