<?php


namespace Modules\manage\Services;


use App\Services\BaseService;

class InvoicesService extends BaseService
{

 public function __construct()
  {
      parent::__construct('Modules\manage\Models\Invoices');
   }

}

