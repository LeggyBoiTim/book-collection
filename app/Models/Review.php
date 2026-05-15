<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

#[Fillable(['book_id', 'user_id', 'rating', 'content'])]
class Review extends Model
{
    /** @use HasFactory<ReviewFactory> */
    use HasFactory;

    public function book(): BelongsTo
    {
        return $this->belongsTo(Book::class);
    }
}
