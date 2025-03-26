<?php

namespace App\Http\Controllers;

use App\Models\leftobject;

class leftobjectsController extends Controller
{
    public function index()
    {
        $leftObjects = leftobject::all();
        return response()->json($leftObjects);
    }
}
