<?php


namespace Modules\security\Services;


use App\Services\BaseService;

class RolesService extends BaseService
{

   public function __construct()
   {
      parent::__construct('Modules\security\Models\Roles');
   }
}
