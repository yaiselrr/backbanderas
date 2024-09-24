<?php


namespace Modules\masters\Services;


use App\Services\BaseService;

class AttributesService extends BaseService
{

   public function __construct()
   {
      parent::__construct('Modules\masters\Models\Attributes');
   }
}
