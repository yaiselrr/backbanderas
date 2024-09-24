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

Route::group(['prefix' => 'stocks', 'middleware' => []], function () {
       Route::get('/', function () {
              return ["message" => "stocks"];
       });


       /*Incoming_format_product*/
       Route::post('incoming_format_product/validate', 'Incoming_format_productController@actionValidate');
       Route::post('incoming_format_product/update_multiple', 'Incoming_format_productController@updateMultiple');
       Route::get('incoming_format_product/export_excel', 'Incoming_format_productController@export_excel');
       Route::get('incoming_format_product/export_pdf', 'Incoming_format_productController@export_pdf');
       Route::delete('incoming_format_product/delete_by_id', 'Incoming_format_productController@deleteById');
       Route::resource('incoming_format_product', 'Incoming_format_productController');


       /*Incoming_products*/
       Route::post('incoming_products/validate', 'Incoming_productsController@actionValidate');
       Route::post('incoming_products/update_multiple', 'Incoming_productsController@updateMultiple');
       Route::get('incoming_products/export_excel', 'Incoming_productsController@export_excel');
       Route::get('incoming_products/export_pdf', 'Incoming_productsController@export_pdf');
       Route::delete('incoming_products/delete_by_id', 'Incoming_productsController@deleteById');
       Route::resource('incoming_products', 'Incoming_productsController');
});
