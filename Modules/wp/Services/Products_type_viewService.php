<?php


namespace Modules\wp\Services;


use App\Services\BaseService;

class Products_type_viewService extends BaseService
{

 public function __construct()
  {
      parent::__construct('Modules\wp\Models\Products_type_view');
   }

}

