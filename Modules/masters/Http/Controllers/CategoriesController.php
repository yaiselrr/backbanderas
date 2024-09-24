<?php

namespace Modules\masters\Http\Controllers;

use App\Http\Controllers\BaseRestController;

class CategoriesController extends BaseRestController
{
    const FORM_REQUEST = "Modules\\masters\\Http\\Requests\\CategoriesRequest";

    /**
     *  CategoriesController constructor.
     */
    public function __construct()
    {
        $classnamespace = 'Modules\masters\Models\Categories';
        $classnamespaceservice = 'Modules\masters\Services\CategoriesService';
        $this->modelClass = new $classnamespace;
        $this->service = new $classnamespaceservice(new $classnamespace);
        $this->middleware('data.transform:' . self::FORM_REQUEST . ',' . $classnamespace);
    }


}
