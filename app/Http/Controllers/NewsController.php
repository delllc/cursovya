<?php

namespace App\Http\Controllers;

use App\Models\NewsCard;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    public function index()
    {
        $newsCards = NewsCard::all();
        return response()->json($newsCards);
    }

    public function show($id)
    {
        $newsItem = NewsCard::findOrFail($id);
        return inertia('news/Show', ['newsItem' => $newsItem]);
    }
}
