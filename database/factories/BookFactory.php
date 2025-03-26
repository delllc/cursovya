<?php

namespace Database\Factories;

use App\Models\Book;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use phpDocumentor\Reflection\Types\Boolean;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Book>
 */
class BookFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */


    use HasFactory;
    protected $model = Book::class;
    public function definition(): array
    {
        return [
            'title' => $this->faker->title(),
            'author' => $this->faker->name(),
            'description' => $this->faker->text(),
            'available' => $this->faker->boolean(0.5),
            'category' => $this->faker->words(2),
        ];
    }

}
