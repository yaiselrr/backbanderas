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

       Route::group(['prefix'=>'wp','middleware' => ['auth:api']],function () {
               Route::get('/', function (){
                   return ["message"=>"wp"];
               });


        /*All_products_relations_view*/
               Route::post('all_products_relations_view/validate', 'All_products_relations_viewController@actionValidate');
               Route::post('all_products_relations_view/update_multiple', 'All_products_relations_viewController@updateMultiple');
               Route::get('all_products_relations_view/export_excel', 'All_products_relations_viewController@export_excel');
               Route::get('all_products_relations_view/export_pdf', 'All_products_relations_viewController@export_pdf');
               Route::delete('all_products_relations_view/delete_by_id', 'All_products_relations_viewController@deleteById');
               Route::post('all_products_relations_view/{id}', 'All_products_relations_viewController@update');
               Route::resource('all_products_relations_view', 'All_products_relations_viewController');


        /*All_products_views*/
               Route::post('all_products_views/validate', 'All_products_viewsController@actionValidate');
               Route::post('all_products_views/update_multiple', 'All_products_viewsController@updateMultiple');
               Route::get('all_products_views/export_excel', 'All_products_viewsController@export_excel');
               Route::get('all_products_views/export_pdf', 'All_products_viewsController@export_pdf');
               Route::delete('all_products_views/delete_by_id', 'All_products_viewsController@deleteById');
               Route::post('all_products_views/{id}', 'All_products_viewsController@update');
               Route::resource('all_products_views', 'All_products_viewsController');


        /*Categories_view*/
               Route::post('categories_view/validate', 'Categories_viewController@actionValidate');
               Route::post('categories_view/update_multiple', 'Categories_viewController@updateMultiple');
               Route::get('categories_view/export_excel', 'Categories_viewController@export_excel');
               Route::get('categories_view/export_pdf', 'Categories_viewController@export_pdf');
               Route::delete('categories_view/delete_by_id', 'Categories_viewController@deleteById');
               Route::post('categories_view/{id}', 'Categories_viewController@update');
               Route::resource('categories_view', 'Categories_viewController');


        /*Products_categories_view*/
               Route::post('products_categories_view/validate', 'Products_categories_viewController@actionValidate');
               Route::post('products_categories_view/update_multiple', 'Products_categories_viewController@updateMultiple');
               Route::get('products_categories_view/export_excel', 'Products_categories_viewController@export_excel');
               Route::get('products_categories_view/export_pdf', 'Products_categories_viewController@export_pdf');
               Route::delete('products_categories_view/delete_by_id', 'Products_categories_viewController@deleteById');
               Route::post('products_categories_view/{id}', 'Products_categories_viewController@update');
               Route::resource('products_categories_view', 'Products_categories_viewController');


        /*Products_type_view*/
               Route::post('products_type_view/validate', 'Products_type_viewController@actionValidate');
               Route::post('products_type_view/update_multiple', 'Products_type_viewController@updateMultiple');
               Route::get('products_type_view/export_excel', 'Products_type_viewController@export_excel');
               Route::get('products_type_view/export_pdf', 'Products_type_viewController@export_pdf');
               Route::delete('products_type_view/delete_by_id', 'Products_type_viewController@deleteById');
               Route::post('products_type_view/{id}', 'Products_type_viewController@update');
               Route::resource('products_type_view', 'Products_type_viewController');


        /*Wp1u_posts*/
               Route::post('wp1u_posts/validate', 'Wp1u_postsController@actionValidate');
               Route::post('wp1u_posts/update_multiple', 'Wp1u_postsController@updateMultiple');
               Route::get('wp1u_posts/export_excel', 'Wp1u_postsController@export_excel');
               Route::get('wp1u_posts/export_pdf', 'Wp1u_postsController@export_pdf');
               Route::delete('wp1u_posts/delete_by_id', 'Wp1u_postsController@deleteById');
               Route::post('wp1u_posts/{id}', 'Wp1u_postsController@update');
               Route::resource('wp1u_posts', 'Wp1u_postsController');


    });
