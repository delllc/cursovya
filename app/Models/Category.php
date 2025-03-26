<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{

    use HasFactory;
    protected $primaryKey = 'id'; // Указываем первичный ключ
    public $incrementing = true; // Устанавливаем true, если id автоинкрементируемый
    protected $keyType = 'string'; // Указываем тип ключа

    protected $fillable = [
        'id',
        'category'
    ];
}
