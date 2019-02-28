<?php
use Illuminate\Http\Request;
use App\Http\Middleware\Cors;
/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/api/product','ProductController@index');


Route::post('/api/product', 'ProductController@store');
//Route::match(['post', 'options'], '/api/product', 'ProductController@store')->middleware('cors');
//Route::post('/api/product', 'ProductController@store');
//Route::post('/api/product', 'ProductController@store');

//Route::post('/api/product', 'ProductController@store');
//Route::get('/product','ProductController@create');
