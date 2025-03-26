<?php

use App\Http\Controllers\BookController;
use Illuminate\Support\Facades\Route;


Route::get('/books', [BookController::class, 'index'])->name('book.index');
Route::get('/books/{id}', [BookController::class, 'show'])->name('books.show');


Route::get('/books/search-suggestions', [BookController::class, 'searchSuggestions']);
