<?php

namespace Modules\manage\Http\Controllers;

use App\Http\Controllers\BaseRestController;

class OrdersController extends BaseRestController
{
    const FORM_REQUEST = "Modules\\manage\\Http\\Requests\\OrdersRequest";

    /**
     *  OrdersController constructor.
     */
    public function __construct()
    {
        $classnamespace='Modules\manage\Models\Orders';
        $classnamespaceservice='Modules\manage\Services\OrdersService';
        $this->modelClass=new $classnamespace ;
        $this->service= new $classnamespaceservice(new $classnamespace);
        $this->middleware('data.transform:'.self::FORM_REQUEST.','.$classnamespace);
    }


}

