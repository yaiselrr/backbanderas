<?php

namespace Modules\wp\Http\Controllers;

use App\Http\Controllers\BaseRestController;

class Wp1u_postsController extends BaseRestController
{
    const FORM_REQUEST = "Modules\\wp\\Http\\Requests\\Wp1u_postsRequest";

    /**
     *  Wp1u_postsController constructor.
     */
    public function __construct()
    {
        $classnamespace='Modules\wp\Models\Wp1u_posts';
        $classnamespaceservice='Modules\wp\Services\Wp1u_postsService';
        $this->modelClass=new $classnamespace ;
        $this->service= new $classnamespaceservice(new $classnamespace);
        $this->middleware('data.transform:'.self::FORM_REQUEST.','.$classnamespace);
    }


}

