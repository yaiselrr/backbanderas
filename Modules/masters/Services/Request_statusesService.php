<?php


namespace Modules\masters\Services;


use App\Services\BaseService;

class Request_statusesService extends BaseService
{

   public function __construct()
   {
      parent::__construct('Modules\masters\Models\Request_statuses');
   }
}
