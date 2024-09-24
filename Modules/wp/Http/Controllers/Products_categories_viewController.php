<?php

namespace Modules\wp\Http\Controllers;

use App\Http\Controllers\BaseRestController;

class Products_categories_viewController extends BaseRestController
{
    const FORM_REQUEST = "Modules\\wp\\Http\\Requests\\Products_categories_viewRequest";

    /**
     *  Products_categories_viewController constructor.
     */
    public function __construct()
    {
        $classnamespace='Modules\wp\Models\Products_categories_view';
        $classnamespaceservice='Modules\wp\Services\Products_categories_viewService';
        $this->modelClass=new $classnamespace ;
        $this->service= new $classnamespaceservice(new $classnamespace);
        $this->middleware('data.transform:'.self::FORM_REQUEST.','.$classnamespace);
    }


}

