<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FavoriteBookController extends Controller
{

    public function index()
    {
        $user = Auth::user();

        $favoritedBooks = $user->favoritedBooks()->with('book')->get();

        $formattedFavorites = $favoritedBooks->map(function ($favoritedBook) {
        return [
            'id' => $favoritedBook->book->id,
            'title' => $favoritedBook->book->title,
            'author' => $favoritedBook->book->author,
            'cover_image'=> $favoritedBook->book->cover_image,
        ];
    });
        return response()->json($formattedFavorites);

    }
    public function store(Request $request, $bookId)
    {
        $book = Book::findOrFail($bookId);
        $user = Auth::user();

        if ($user->favoritedBooks()->where('book_id', $bookId)->exists()) {
            return response()->json(['error' => 'Already favorited'], 400);
        }

        $user->favoritedBooks()->create(['book_id' => $bookId]);

        return response()->json(['message' => 'Book added to favorite'], 200);
    }


    public function destroy(Request $request, $bookId) {
        $user = Auth::user();

        $favorite = $user->favoritedBooks()->where('book_id', $bookId)->first();

        if (!$favorite) {
            return response()->json(['error' => 'Book not found'], 404);
        }

        $favorite->delete();

        return response()->json(['message' => 'Book removed']);
    }
}
