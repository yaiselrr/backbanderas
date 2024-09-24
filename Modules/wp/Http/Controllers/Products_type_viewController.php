<?php

namespace Modules\wp\Http\Controllers;

use App\Http\Controllers\BaseRestController;

class Products_type_viewController extends BaseRestController
{
    const FORM_REQUEST = "Modules\\wp\\Http\\Requests\\Products_type_viewRequest";

    /**
     *  Products_type_viewController constructor.
     */
    public function __construct()
    {
        $classnamespace='Modules\wp\Models\Products_type_view';
        $classnamespaceservice='Modules\wp\Services\Products_type_viewService';
        $this->modelClass=new $classnamespace ;
        $this->service= new $classnamespaceservice(new $classnamespace);
        $this->middleware('data.transform:'.self::FORM_REQUEST.','.$classnamespace);
    }


}

