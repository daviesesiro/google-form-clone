<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\FormController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

//Auth
Route::get('login', [LoginController::class, 'showLoginForm']);
Route::get('register', [RegisterController::class, 'create']);

Route::get('/', function () {
  return Inertia::render('Home');
});

//form
Route::get('/form', [FormController::class, 'index']);
