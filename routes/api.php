<?php

use Illuminate\Http\Request;

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

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/
//traeer componentes de la base de datos
//api forma en que provee informacion y cualquiera puede conectarse y consumir
//web solo inerfaz diseñada
Route::get('posts', 'PostController@index');
Route::get('post/{slug}', 'PostController@show');

