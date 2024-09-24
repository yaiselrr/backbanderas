<?php


namespace Modules\manage\Services;


use App\Services\BaseService;

class Product_orderService extends BaseService
{

 public function __construct()
  {
      parent::__construct('Modules\manage\Models\Product_order');
   }

}

