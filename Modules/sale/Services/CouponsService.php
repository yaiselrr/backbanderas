<?php


namespace Modules\sale\Services;


use App\Services\BaseService;

class CouponsService extends BaseService
{

   public function __construct()
   {
      parent::__construct('Modules\sale\Models\Coupons');
   }
}
