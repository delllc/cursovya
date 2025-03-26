<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $primaryKey = 'id'; // Указываем первичный ключ
    public $incrementing = true; // Устанавливаем true, если id автоинкрементируемый
    protected $keyType = 'string'; // Указываем тип ключа

    protected $fillable = [
        'title',
        'desciption',
        'cover_image',
        'available',
        'category',
        'author',
        'url_book'
    ];


    public function readByUser() {
        return $this->belongsToMany(User::class, 'read_books', 'book_id', 'user_id');
    }

    public function currentlyReadByUsers() {
        return $this->belongsToMany(User::class, 'current_books', 'book_id', 'user_id');
    }

    public function favoritedByUsers() {
        return $this->belongsToMany(User::class, 'favorited_books', 'book_id', 'user_id');
    }


}
