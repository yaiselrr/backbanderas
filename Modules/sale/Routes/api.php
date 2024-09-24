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

Route::group(['prefix' => 'sale', 'middleware' => ['auth:api']], function () {
       Route::get('/', function () {
              return ["message" => "sale"];
       });


       /*Pay_ways*/
       Route::post('pay_ways/validate', 'Pay_waysController@actionValidate');
       Route::post('pay_ways/update_multiple', 'Pay_waysController@updateMultiple');
       Route::get('pay_ways/export_excel', 'Pay_waysController@export_excel');
       Route::get('pay_ways/export_pdf', 'Pay_waysController@export_pdf');
       Route::delete('pay_ways/delete_by_id', 'Pay_waysController@deleteById');
       Route::post('pay_ways/{id}', 'Pay_waysController@update');
       Route::resource('pay_ways', 'Pay_waysController');


       /*Coupons*/
       Route::post('coupons/validate', 'CouponsController@actionValidate');
       Route::post('coupons/update_multiple', 'CouponsController@updateMultiple');
       Route::get('coupons/export_excel', 'CouponsController@export_excel');
       Route::get('coupons/export_pdf', 'CouponsController@export_pdf');
       Route::delete('coupons/delete_by_id', 'CouponsController@deleteById');
       Route::post('coupons/{id}', 'CouponsController@update');
       Route::resource('coupons', 'CouponsController');
});
