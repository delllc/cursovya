<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class BookController extends Controller
{
    public function index(Request $request)
    {
        $query = Book::query();

        // Фильтрация по категории
        if ($request->has('category') && $request->input('category')) {
            $query->where('category', $request->input('category'));
        }

        // Фильтрация по наличию
        if ($request->has('available') && $request->input('available') !== null) {
            $query->where('available', filter_var($request->input('available'), FILTER_VALIDATE_BOOLEAN));
        }

        // Поиск по названию или автору
        $searchTerm = $request->input('search');
        $searchTerm = '%' . mb_strtolower($searchTerm) . '%';
        $query->where(function ($q) use ($searchTerm) {
            $q->whereRaw('LOWER(title) LIKE ?', [$searchTerm])
                ->orWhereRaw('LOWER(author) LIKE ?', [$searchTerm]);
        });

        // Получаем книги
        $books = $query->get();




        // Возвращаем данные через JSON
        return response()->json([
            'books' => $books,
        ]);
    }

    public function searchSuggestions(Request $request)
    {
        $query = $request->input('query');

        if (!$query) {
            return response()->json([]);
        }

        $suggestions = Book::where('title', 'LIKE', '%' . $query . '%')
            ->orWhere('author', 'LIKE', '%' . $query . '%')
            ->limit(5)
            ->pluck('title');

        return response()->json($suggestions);
    }

    public function show($id)
       {
            $books = Book::findOrFail($id);
            return inertia('book/Show', ['books' => $books]);

      }

}
