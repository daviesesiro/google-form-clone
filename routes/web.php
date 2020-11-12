<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\FormController;
use Illuminate\Support\Facades\Auth;
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
Route::get('login', [LoginController::class, 'showLoginForm'])->name('login');
Route::post('login', [LoginController::class, 'login'])->name('login.attempt');

Route::get('register', [RegisterController::class, 'showRegisterForm']);
Route::post('register', [RegisterController::class, 'register']);

Route::get('/', function () {
  return Inertia::render('Home');
})->name('home');

Route::get('/users', function () {
  return inertia::render(route('home'), ['users', Auth::user()]);
});



//form
Route::get('/form', [FormController::class, 'index'])->middleware('auth')->name('form.index');
Route::get('/form/create', [FormController::class, 'create'])->middleware('auth')->name('form.create');
Route::post('/form/store', [FormController::class, 'store'])->middleware('auth')->name('form.store');
