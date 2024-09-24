<?php

namespace Modules\manage\Http\Controllers;

use App\Http\Controllers\BaseRestController;

class InvoicesController extends BaseRestController
{
    const FORM_REQUEST = "Modules\\manage\\Http\\Requests\\InvoicesRequest";

    /**
     *  InvoicesController constructor.
     */
    public function __construct()
    {
        $classnamespace='Modules\manage\Models\Invoices';
        $classnamespaceservice='Modules\manage\Services\InvoicesService';
        $this->modelClass=new $classnamespace ;
        $this->service= new $classnamespaceservice(new $classnamespace);
        $this->middleware('data.transform:'.self::FORM_REQUEST.','.$classnamespace);
    }


}

