<?php


namespace Modules\wp\Services;


use App\Services\BaseService;

class Wp1u_postsService extends BaseService
{

 public function __construct()
  {
      parent::__construct('Modules\wp\Models\Wp1u_posts');
   }

}

