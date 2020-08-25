<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WelcomeController extends Controller
{
    /**
     * Returns the welcome view
     * @param Request $request
     * @return View
     */
    public function list(Request $request)
    {
        return view('welcome');
    }
}
