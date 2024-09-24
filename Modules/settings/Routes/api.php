<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'settings', 'middleware' => []], function () {
       Route::get('/', function () {
              return ["message" => "settings"];
       });


       /*Settings*/
       Route::post('settings/validate', 'SettingsController@actionValidate');
       Route::post('settings/update_multiple', 'SettingsController@updateMultiple');
       Route::get('settings/export_excel', 'SettingsController@export_excel');
       Route::get('settings/export_pdf', 'SettingsController@export_pdf');
       Route::delete('settings/delete_by_id', 'SettingsController@deleteById');
       Route::resource('settings', 'SettingsController');

       /*Message_blocks*/
       Route::post('message_blocks/validate', 'Message_blocksController@actionValidate');
       Route::post('message_blocks/update_multiple', 'Message_blocksController@updateMultiple');
       Route::get('message_blocks/export_excel', 'Message_blocksController@export_excel');
       Route::get('message_blocks/export_pdf', 'Message_blocksController@export_pdf');
       Route::delete('message_blocks/delete_by_id', 'Message_blocksController@deleteById');
       Route::post('message_blocks/{id}', 'Message_blocksController@update');
       Route::resource('message_blocks', 'Message_blocksController');
});
