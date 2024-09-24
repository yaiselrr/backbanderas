<?php


namespace Modules\settings\Services;


use App\Services\BaseService;

class SettingsService extends BaseService
{

   public function __construct()
   {
      parent::__construct('Modules\settings\Models\Settings');
   }
}
