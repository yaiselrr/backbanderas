<?php


namespace Modules\stocks\Services;


use App\Services\BaseService;

class Incoming_productsService extends BaseService
{

   public function __construct()
   {
      parent::__construct('Modules\stocks\Models\Incoming_products');
   }
}
