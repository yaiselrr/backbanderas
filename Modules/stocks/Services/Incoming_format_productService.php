<?php


namespace Modules\stocks\Services;


use App\Services\BaseService;

class Incoming_format_productService extends BaseService
{

   public function __construct()
   {
      parent::__construct('Modules\stocks\Models\Incoming_format_product');
   }
}
