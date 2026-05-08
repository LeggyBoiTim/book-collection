<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAuthorRequest;
use App\Http\Resources\AuthorResource;
use App\Models\Author;

class AuthorController extends Controller
{
    public function index()
    {
        return AuthorResource::collection(Author::all());
    }

    public function store(StoreAuthorRequest $request) {
        $author = Author::create($request->validated());

        $authors = Author::all();
        return AuthorResource::collection($authors);
    }

    public function update(StoreAuthorRequest $request, Author $author) {
        $author->update($request->validated());

        $authors = Author::all();
        return AuthorResource::collection($authors);
    }

    public function destroy(Author $author) {
        if ($author->books()->count() > 0) {
            return response()->json(['message' => 'Kan auteur niet verwijderen omdat er nog boeken aan gekoppeld zijn'], 400);
        }

        $author->delete();

        return response()->json(['message' => 'Auteur succesvol verwijderd']);
    }
}
