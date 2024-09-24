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

Route::group(['prefix' => 'masters', 'middleware' => ['auth:api']], function () {
    Route::get('/', function () {
        return ["message" => "masters"];
    });

    /*Categories*/
    Route::post('categories/validate', 'CategoriesController@actionValidate');
    Route::post('categories/update_multiple', 'CategoriesController@updateMultiple');
    Route::get('categories/export_excel', 'CategoriesController@export_excel');
    Route::get('categories/export_pdf', 'CategoriesController@export_pdf');
    Route::delete('categories/delete_by_id', 'CategoriesController@deleteById');
    Route::post('categories/{id}', 'CategoriesController@update');
    Route::resource('categories', 'CategoriesController');


    /*Request_statuses*/
    Route::post('request_statuses/validate', 'Request_statusesController@actionValidate');
    Route::post('request_statuses/update_multiple', 'Request_statusesController@updateMultiple');
    Route::get('request_statuses/export_excel', 'Request_statusesController@export_excel');
    Route::get('request_statuses/export_pdf', 'Request_statusesController@export_pdf');
    Route::delete('request_statuses/delete_by_id', 'Request_statusesController@deleteById');
    Route::post('request_statuses/{id}', 'Request_statusesController@update');
    Route::resource('request_statuses', 'Request_statusesController');

    /*Types*/
    Route::post('types/validate', 'TypesController@actionValidate');
    Route::post('types/update_multiple', 'TypesController@updateMultiple');
    Route::get('types/export_excel', 'TypesController@export_excel');
    Route::get('types/export_pdf', 'TypesController@export_pdf');
    Route::delete('types/delete_by_id', 'TypesController@deleteById');
    Route::post('types/{id}', 'TypesController@update');
    Route::resource('types', 'TypesController');

    /*Attributes*/
    Route::post('attributes/validate', 'AttributesController@actionValidate');
    Route::post('attributes/update_multiple', 'AttributesController@updateMultiple');
    Route::get('attributes/export_excel', 'AttributesController@export_excel');
    Route::get('attributes/export_pdf', 'AttributesController@export_pdf');
    Route::delete('attributes/delete_by_id', 'AttributesController@deleteById');
    Route::post('attributes/{id}', 'AttributesController@update');
    Route::resource('attributes', 'AttributesController');

    /*Product_type*/
    Route::post('product_type/validate', 'Product_typeController@actionValidate');
    Route::post('product_type/update_multiple', 'Product_typeController@updateMultiple');
    Route::get('product_type/export_excel', 'Product_typeController@export_excel');
    Route::get('product_type/export_pdf', 'Product_typeController@export_pdf');
    Route::delete('product_type/delete_by_id', 'Product_typeController@deleteById');
    Route::post('product_type/{id}', 'Product_typeController@update');
    Route::resource('product_type', 'Product_typeController');

});
Route::group(['prefix' => 'store', 'middleware' => []], function () {
    Route::get('/', function () {
        return ["message" => "masters"];
    });
    /*Categories*/
    Route::resource('categories', 'CategoriesController', ['except' => ['store', 'update', 'delete']]);
    /*Request_statuses*/
    Route::resource('request_statuses', 'Request_statusesController', ['except' => ['store', 'update', 'delete']]);
    /*Attributes*/
    Route::resource('attributes', 'AttributesController', ['except' => ['store', 'update', 'delete']]);
    Route::resource('types', 'TypesController', ['except' => ['store', 'update', 'delete']]);
});
