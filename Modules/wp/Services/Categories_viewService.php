<?php


namespace Modules\wp\Services;


use App\Services\BaseService;

class Categories_viewService extends BaseService
{

 public function __construct()
  {
      parent::__construct('Modules\wp\Models\Categories_view');
   }

}

