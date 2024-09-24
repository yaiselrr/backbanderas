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
Route::post('test_permissions_user', 'Permission_usersController@handlePermissions');
Route::post('test_permissions_role', 'Permission_roleController@handlePermissions');

Route::group(['prefix' => 'security', 'middleware' => ['auth:api']], function () {
       Route::get('/', function () {
              return ["message" => "security"];
       });


       /*Roles*/
       Route::post('roles/validate', 'RolesController@actionValidate');
       Route::post('roles/update_multiple', 'RolesController@updateMultiple');
       Route::get('roles/export_excel', 'RolesController@export_excel');
       Route::get('roles/export_pdf', 'RolesController@export_pdf');
       Route::delete('roles/delete_by_id', 'RolesController@deleteById');
       Route::post('roles/{id}', 'RolesController@update');
       Route::resource('roles', 'RolesController');


       /*Users*/
       Route::post('users/validate', 'UsersController@actionValidate');
       Route::post('users/update_multiple', 'UsersController@updateMultiple');
       Route::get('users/export_excel', 'UsersController@export_excel');
       Route::get('users/export_pdf', 'UsersController@export_pdf');
       Route::delete('users/delete_by_id', 'UsersController@deleteById');
       Route::post('users/{id}', 'UsersController@update');
       Route::resource('users', 'UsersController');


       /*Dealers*/
       Route::post('dealers/validate', 'DealersController@actionValidate');
       Route::post('dealers/update_multiple', 'DealersController@updateMultiple');
       Route::get('dealers/export_excel', 'DealersController@export_excel');
       Route::get('dealers/export_pdf', 'DealersController@export_pdf');
       Route::delete('dealers/delete_by_id', 'DealersController@deleteById');
       Route::post('dealers/{id}', 'DealersController@update');
       Route::resource('dealers', 'DealersController');


       /*Permission_role*/
       Route::post('permission_role/validate', 'Permission_roleController@actionValidate');
       Route::post('permission_role/update_multiple', 'Permission_roleController@updateMultiple');
       Route::get('permission_role/export_excel', 'Permission_roleController@export_excel');
       Route::get('permission_role/export_pdf', 'Permission_roleController@export_pdf');
       Route::delete('permission_role/delete_by_id', 'Permission_roleController@deleteById');
       Route::post('permission_role/{id}', 'Permission_roleController@update');
       Route::resource('permission_role', 'Permission_roleController');


       /*Permission_users*/
       Route::post('permission_users/validate', 'Permission_usersController@actionValidate');
       Route::post('permission_users/update_multiple', 'Permission_usersController@updateMultiple');
       Route::get('permission_users/export_excel', 'Permission_usersController@export_excel');
       Route::get('permission_users/export_pdf', 'Permission_usersController@export_pdf');
       Route::delete('permission_users/delete_by_id', 'Permission_usersController@deleteById');
       Route::post('permission_users/{id}', 'Permission_usersController@update');
       Route::resource('permission_users', 'Permission_usersController');
       


       /*Permissions*/
       Route::post('permissions/validate', 'PermissionsController@actionValidate');
       Route::post('permissions/update_multiple', 'PermissionsController@updateMultiple');
       Route::get('permissions/export_excel', 'PermissionsController@export_excel');
       Route::get('permissions/export_pdf', 'PermissionsController@export_pdf');
       Route::delete('permissions/delete_by_id', 'PermissionsController@deleteById');
       Route::post('permissions/{id}', 'PermissionsController@update');
       Route::resource('permissions', 'PermissionsController');
       Route::post('permissions/{id}', 'PermissionsController@update');
       Route::post('permissions/assign_role_to_user/{userId}/{roleId}', 'PermissionsController@assignRoleToUser');
       Route::post('permissions/grant_permission_to_role/{roleId}', 'PermissionsController@grantPermissionToRole');


       /*Role_users*/
       Route::post('role_users/validate', 'Role_usersController@actionValidate');
       Route::post('role_users/update_multiple', 'Role_usersController@updateMultiple');
       Route::get('role_users/export_excel', 'Role_usersController@export_excel');
       Route::get('role_users/export_pdf', 'Role_usersController@export_pdf');
       Route::delete('role_users/delete_by_id', 'Role_usersController@deleteById');
       Route::post('role_users/{id}', 'Role_usersController@update');
       Route::resource('role_users', 'Role_usersController');
});
