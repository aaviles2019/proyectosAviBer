<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //forma en hacer la consulta y que regrese los datos paginados paginados
        return Post::orderBy('id', 'DESC')->paginate();
    }
    public function show($slug)
    {
        //
        return Post::where('slug', $slug)->first();
    }


   
}
