<?php

namespace Database\Factories;

use App\Models\leftobject;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\leftobject>
 */
class leftobjectFactory extends Factory
{
    /**
     * Define the model's default state.
//     *
//     * @return array<string, mixed>
//     */

    protected $model = leftobject::class;
    public function definition(): array
    {
        return [
            'title' => $this ->faker->sentence,
            'desc' => $this ->faker->paragraph,
            'published_at' => null,
            'updated_at' => null,
        ];
    }
}
