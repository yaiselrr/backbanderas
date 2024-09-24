<?php


namespace Modules\manage\Services;


use App\Services\BaseService;

class Products_attributeService extends BaseService
{

 public function __construct()
  {
      parent::__construct('Modules\manage\Models\Products_attribute');
   }

}

