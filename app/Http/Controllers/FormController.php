<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;

class FormController extends Controller
{
  public function index()
  {
    return Inertia::render('Form/Index');
  }

  public function create()
  {
    return Inertia::render('Form/Create');
  }

  public function store()
  {
    // dd(request());
    $data = request()->validate([
      "sections.*.title" => 'required',
      "sections.*.description" => 'required',
      "questions" => 'required',
      "options" => 'required',
      "questions.*.question" => 'required',
      "options.*.option" => 'required'
    ]);

    return redirect(route('form.index'));
  }
}
