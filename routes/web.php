<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('{any}', function () {
    return view('template');
})->where('any', '.*')->middleware('auth')->name('admin');


Route::get('/admin', function () {
    return view('template');
})->middleware(['auth'])->name('template');

//
//Route::get('/admin', function () {
//    return view('dashboard');
//})->middleware(['auth'])->name('dashboard');


require __DIR__ . '/auth.php';
