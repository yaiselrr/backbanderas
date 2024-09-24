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

Route::group(['prefix' => 'manage', 'middleware' => ['auth:api']], function () {
       Route::get('/', function () {
              return ["message" => "manage"];
       });


       /*Products*/
       Route::post('products/validate', 'ProductsController@actionValidate');
       Route::post('products/update_multiple', 'ProductsController@updateMultiple');
       Route::get('products/export_excel', 'ProductsController@export_excel');
       Route::get('products/export_pdf', 'ProductsController@export_pdf');
       Route::delete('products/delete_by_id', 'ProductsController@deleteById');
       Route::post('products/{id}', 'ProductsController@update');
       Route::resource('products', 'ProductsController');


       /*Refurbished*/
       Route::post('refurbished/validate', 'RefurbishedController@actionValidate');
       Route::post('refurbished/update_multiple', 'RefurbishedController@updateMultiple');
       Route::get('refurbished/export_excel', 'RefurbishedController@export_excel');
       Route::get('refurbished/export_pdf', 'RefurbishedController@export_pdf');
       Route::delete('refurbished/delete_by_id', 'RefurbishedController@deleteById');
       Route::post('refurbished/{id}', 'RefurbishedController@update');
       Route::resource('refurbished', 'RefurbishedController');


       /*Client*/
       Route::post('client/validate', 'ClientController@actionValidate');
       Route::post('client/update_multiple', 'ClientController@updateMultiple');
       Route::get('client/export_excel', 'ClientController@export_excel');
       Route::get('client/export_pdf', 'ClientController@export_pdf');
       Route::delete('client/delete_by_id', 'ClientController@deleteById');
       Route::post('client/{id}', 'ClientController@update');
       Route::resource('client', 'ClientController');


       /*Invoices*/
       Route::post('invoices/validate', 'InvoicesController@actionValidate');
       Route::post('invoices/update_multiple', 'InvoicesController@updateMultiple');
       Route::get('invoices/export_excel', 'InvoicesController@export_excel');
       Route::get('invoices/export_pdf', 'InvoicesController@export_pdf');
       Route::delete('invoices/delete_by_id', 'InvoicesController@deleteById');
       Route::post('invoices/{id}', 'InvoicesController@update');
       Route::resource('invoices', 'InvoicesController');


       /*Orders*/
       Route::post('orders/validate', 'OrdersController@actionValidate');
       Route::post('orders/update_multiple', 'OrdersController@updateMultiple');
       Route::get('orders/export_excel', 'OrdersController@export_excel');
       Route::get('orders/export_pdf', 'OrdersController@export_pdf');
       Route::delete('orders/delete_by_id', 'OrdersController@deleteById');
       Route::post('orders/{id}', 'OrdersController@update');
       Route::resource('orders', 'OrdersController');




       /*Product_order*/
       Route::post('product_order/validate', 'Product_orderController@actionValidate');
       Route::post('product_order/update_multiple', 'Product_orderController@updateMultiple');
       Route::get('product_order/export_excel', 'Product_orderController@export_excel');
       Route::get('product_order/export_pdf', 'Product_orderController@export_pdf');
       Route::delete('product_order/delete_by_id', 'Product_orderController@deleteById');
       Route::post('product_order/{id}', 'Product_orderController@update');
       Route::resource('product_order', 'Product_orderController');


       /*Products_attribute*/
       Route::post('products_attribute/validate', 'Products_attributeController@actionValidate');
       Route::post('products_attribute/update_multiple', 'Products_attributeController@updateMultiple');
       Route::get('products_attribute/export_excel', 'Products_attributeController@export_excel');
       Route::get('products_attribute/export_pdf', 'Products_attributeController@export_pdf');
       Route::delete('products_attribute/delete_by_id', 'Products_attributeController@deleteById');
       Route::post('products_attribute/{id}', 'Products_attributeController@update');
       Route::resource('products_attribute', 'Products_attributeController');


       /*Products_attribute*/
       Route::post('business_sectors/validate', 'Business_sectorsController@actionValidate');
       Route::post('business_sectors/update_multiple', 'Business_sectorsController@updateMultiple');
       Route::get('business_sectors/export_excel', 'Business_sectorsController@export_excel');
       Route::get('business_sectors/export_pdf', 'Business_sectorsController@export_pdf');
       Route::delete('business_sectors/delete_by_id', 'Business_sectorsController@deleteById');
       Route::post('business_sectors/{id}', 'Business_sectorsController@update');
       Route::resource('business_sectors', 'Business_sectorsController');

       /*Key_words*/
       Route::post('key_words/validate', 'Key_wordsController@actionValidate');
       Route::post('key_words/update_multiple', 'Key_wordsController@updateMultiple');
       Route::get('key_words/export_excel', 'Key_wordsController@export_excel');
       Route::get('key_words/export_pdf', 'Key_wordsController@export_pdf');
       Route::delete('key_words/delete_by_id', 'Key_wordsController@deleteById');
       Route::resource('key_words', 'Key_wordsController');
});

Route::group(['prefix' => 'store', 'middleware' => []], function () {
    Route::get('/', function () {
        return ["message" => "manage"];
    });
    Route::resource('products', 'ProductsController',['except' => ['store', 'update', 'delete']]);

});
