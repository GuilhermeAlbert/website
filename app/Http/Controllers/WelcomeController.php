<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WelcomeController extends Controller
{
    /**
     * Returns the welcome view
     * 
     * @return view
     */
    public function list()
    {
        return view('welcome');
    }
}
