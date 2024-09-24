<?php


namespace Modules\security\Services;


use App\Services\BaseService;

class DealersService extends BaseService
{

 public function __construct()
  {
      parent::__construct('Modules\security\Models\Dealers');
   }

}

