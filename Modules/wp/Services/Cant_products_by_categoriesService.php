<?php


namespace Modules\wp\Services;


use App\Services\BaseService;

class Cant_products_by_categoriesService extends BaseService
{

 public function __construct()
  {
      parent::__construct('Modules\wp\Models\Cant_products_by_categories');
   }

}

