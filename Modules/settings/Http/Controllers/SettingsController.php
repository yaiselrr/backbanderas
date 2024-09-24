<?php

namespace Modules\settings\Http\Controllers;

use App\Http\Controllers\BaseRestController;

class SettingsController extends BaseRestController
{
    const FORM_REQUEST = "Modules\\settings\\Http\\Requests\\SettingsRequest";

    /**
     *  SettingsController constructor.
     */
    public function __construct()
    {
        $classnamespace = 'Modules\settings\Models\Settings';
        $classnamespaceservice = 'Modules\settings\Services\SettingsService';
        $this->modelClass = new $classnamespace;
        $this->service = new $classnamespaceservice(new $classnamespace);
        $this->middleware('data.transform:' . self::FORM_REQUEST . ',' . $classnamespace);
    }
}
