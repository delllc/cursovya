<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\FavoriteBookController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\leftobjectsController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReaderCardController;
use App\Http\Controllers\SettingsController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Session;



//Route::redirect('/', '/');

Route::get('/', function () {
    return Inertia::render('news', [
        NewsController::class,
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
})->name('news');

Route::get('/events', function () {
    return Inertia::render('events');
})->name('events');

Route::get('/library', function () {
    return Inertia::render('library');
})->name('library');




Route::middleware('auth')->group(function () {
    Route::get('/reader-card', [ProfileController::class, 'edit'])
        ->name('reader-card.edit');
///    Route::patch('/reader-card', [ProfileController::class, 'update'])
//        ->name('reader-card.update');
//    Route::delete('/reader-card', [ProfileController::class, 'destroy'])
//        ->name('reader-card.destroy');


    Route::get('/profile', [SettingsController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [SettingsController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [SettingsController::class, 'destroy'])->name('profile.destroy');





    // Favorited books

    Route::get('/favorites', [FavoriteBookController::class, 'index'])
        ->name('favorites.index');

    Route::post('/books/{bookId}/favorite', [FavoriteBookController::class, 'store'])
        ->name('favorite.store');
    Route::delete('/books/{bookId}/favorite', [FavoriteBookController::class, 'destroy'])
        ->name('favorite.destroy');



});

Route::get('/category', [CategoryController::class, 'index']);


Route::get('/news', [NewsController::class, 'index'])->name('news.index');
Route::get('/news/{id}', [NewsController::class, 'show'])->name('news.show');



Route::get('/leftobject', [leftobjectsController::class,
    'index']);




require __DIR__.'/auth.php';
require __DIR__.'/library.php';
require __DIR__.'/auth.php';
