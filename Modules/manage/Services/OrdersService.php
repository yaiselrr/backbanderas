<?php


namespace Modules\manage\Services;


use App\Services\BaseService;

class OrdersService extends BaseService
{

 public function __construct()
  {
      parent::__construct('Modules\manage\Models\Orders');
   }

}

