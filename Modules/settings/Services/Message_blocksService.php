<?php


namespace Modules\settings\Services;


use App\Services\BaseService;

class Message_blocksService extends BaseService
{

   public function __construct()
   {
      parent::__construct('Modules\settings\Models\Message_blocks');
   }
}
