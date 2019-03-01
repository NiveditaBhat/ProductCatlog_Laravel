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


Route::get('/api/product',['middleware' => 'cors','uses'=>'ProductController@index']);


Route::post('/api/product','ProductController@store');

Route::put('/api/product/{id}', 'ProductController@update');


Route::get('/',function (Request $request) {
    return view('productEdit');
});

Route::post('/api/productInternal','ProductController@store');

