<?php


namespace Modules\security\Services;


use App\Services\BaseService;

class Permission_usersService extends BaseService
{

 public function __construct()
  {
      parent::__construct('Modules\security\Models\Permission_users');
   }

}

