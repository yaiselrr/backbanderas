<?php


namespace Modules\sale\Services;


use App\Services\BaseService;

class Pay_waysService extends BaseService
{

   public function __construct()
   {
      parent::__construct('Modules\sale\Models\Pay_ways');
   }
}
