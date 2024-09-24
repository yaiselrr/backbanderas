<?php


namespace Modules\masters\Services;


use App\Services\BaseService;
use Illuminate\Console\Command;
use Modules\masters\Models\Categories;
use Modules\wp\Entities\MigrateWpData;
use Modules\wp\Models\Categories_view;

class CategoriesService extends BaseService implements MigrateWpData
{

    public function __construct()
    {
        parent::__construct('Modules\masters\Models\Categories');
    }

    static public function MigrateWpData(Command $output = null)
    {
        $count = 0;
        $categories = Categories_view::query()->orderBy('parent', 'asc')->get()->all();
        foreach ($categories as $c) {
            $count++;
            $category = [];
            $category["description"] = $c['description'];
            $category["name"] = $c['name'];
            $category["id"] = $c->term_id;
            $category["slug"] = $c['slug'];
            $category["image"] = "category.png";
            $output->info('Categoria ' . $c['name'] . ' id ' . $c->term_id);
            $category["category_id"] = $c['parent'] == 0 ? null : $c['parent'];
            Categories::updateOrCreate(['id' => $c->term_id], $category);
        }

        return $count;
    }
}
