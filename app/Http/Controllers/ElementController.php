<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ElementController extends Controller
{
    /**
     * Returns the elements view
     * 
     * @return view
     */
    public function list()
    {
        return view('elements');
    }
}
