<?php

namespace Modules\masters\Http\Controllers;

use App\Http\Controllers\BaseRestController;

class AttributesController extends BaseRestController
{
    const FORM_REQUEST = "Modules\\masters\\Http\\Requests\\AttributesRequest";

    /**
     *  AttributesController constructor.
     */
    public function __construct()
    {
        $classnamespace = 'Modules\masters\Models\Attributes';
        $classnamespaceservice = 'Modules\masters\Services\AttributesService';
        $this->modelClass = new $classnamespace;
        $this->service = new $classnamespaceservice(new $classnamespace);
        $this->middleware('data.transform:' . self::FORM_REQUEST . ',' . $classnamespace);
    }
}
