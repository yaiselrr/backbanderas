<?php

namespace Modules\wp\Http\Controllers;

use App\Http\Controllers\BaseRestController;

class All_products_viewsController extends BaseRestController
{
    const FORM_REQUEST = "Modules\\wp\\Http\\Requests\\All_products_viewsRequest";

    /**
     *  All_products_viewsController constructor.
     */
    public function __construct()
    {
        $classnamespace='Modules\wp\Models\All_products_views';
        $classnamespaceservice='Modules\wp\Services\All_products_viewsService';
        $this->modelClass=new $classnamespace ;
        $this->service= new $classnamespaceservice(new $classnamespace);
        $this->middleware('data.transform:'.self::FORM_REQUEST.','.$classnamespace);
    }


}

