<?php

namespace Modules\stocks\Http\Controllers;

use App\Http\Controllers\BaseRestController;

class Incoming_productsController extends BaseRestController
{
    const FORM_REQUEST = "Modules\\stocks\\Http\\Requests\\Incoming_productsRequest";

    /**
     *  Incoming_productsController constructor.
     */
    public function __construct()
    {
        $classnamespace = 'Modules\stocks\Models\Incoming_products';
        $classnamespaceservice = 'Modules\stocks\Services\Incoming_productsService';
        $this->modelClass = new $classnamespace;
        $this->service = new $classnamespaceservice(new $classnamespace);
        $this->middleware('data.transform:' . self::FORM_REQUEST . ',' . $classnamespace);
    }
}
