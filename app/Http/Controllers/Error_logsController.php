<?php
/**Generate by ASGENS
*@author virtualspot  
*@date Mon May 06 16:54:08 GMT-04:00 2024  
*@time Mon May 06 16:54:08 GMT-04:00 2024  
*/


namespace App\Http\Controllers;


class Error_logsController extends BaseRestController
{

    /**
     *  Error_logsController constructor.
     */
    public function __construct()
    {
        $classnamespace='App\Models\Error_logs';
        $classnamespaceservice='App\Services\Error_logsService';
        $this->modelClass=new $classnamespace ;
        $this->service= new $classnamespaceservice(new $classnamespace);
    }


}


