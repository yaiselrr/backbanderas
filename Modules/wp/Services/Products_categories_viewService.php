<?php


namespace Modules\wp\Services;


use App\Services\BaseService;

class Products_categories_viewService extends BaseService
{

 public function __construct()
  {
      parent::__construct('Modules\wp\Models\Products_categories_view');
   }

}

