<?php


namespace Modules\security\Services;


use App\Services\BaseService;

class Permission_roleService extends BaseService
{

 public function __construct()
  {
      parent::__construct('Modules\security\Models\Permission_role');
   }

}

