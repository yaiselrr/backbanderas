<?php


namespace Modules\manage\Services;


use App\Services\BaseService;

class Key_wordsService extends BaseService
{
   public function __construct()
   {
      parent::__construct('Modules\manage\Models\Key_words');
   }
}
