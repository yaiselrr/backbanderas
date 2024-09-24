<?php

namespace Modules\wp\Http\Controllers;

use App\Http\Controllers\BaseRestController;

class All_products_relations_viewController extends BaseRestController
{
    const FORM_REQUEST = "Modules\\wp\\Http\\Requests\\All_products_relations_viewRequest";

    /**
     *  All_products_relations_viewController constructor.
     */
    public function __construct()
    {
        $classnamespace='Modules\wp\Models\All_products_relations_view';
        $classnamespaceservice='Modules\wp\Services\All_products_relations_viewService';
        $this->modelClass=new $classnamespace ;
        $this->service= new $classnamespaceservice(new $classnamespace);
        $this->middleware('data.transform:'.self::FORM_REQUEST.','.$classnamespace);
    }


}

