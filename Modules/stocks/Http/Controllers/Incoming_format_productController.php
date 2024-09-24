<?php

namespace Modules\stocks\Http\Controllers;

use App\Http\Controllers\BaseRestController;

class Incoming_format_productController extends BaseRestController
{
    const FORM_REQUEST = "Modules\\stocks\\Http\\Requests\\Incoming_format_productRequest";

    /**
     *  Incoming_format_productController constructor.
     */
    public function __construct()
    {
        $classnamespace = 'Modules\stocks\Models\Incoming_format_product';
        $classnamespaceservice = 'Modules\stocks\Services\Incoming_format_productService';
        $this->modelClass = new $classnamespace;
        $this->service = new $classnamespaceservice(new $classnamespace);
        $this->middleware('data.transform:' . self::FORM_REQUEST . ',' . $classnamespace);
    }
}
