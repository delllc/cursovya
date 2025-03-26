<?php

namespace Database\Factories;

use App\Models\NewsCard;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\NewsCard>
 */
class NewsCardFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = NewsCard::class;

    public function definition(): array
    {
        return [
            'title' => $this->faker->sentence(6),
            'date' => $this->faker->date(),
            'desc' => $this->faker->paragraph(3),
            'views' => $this->faker->numberBetween(1000, 100000),
            'comment' => $this->faker->numberBetween(100, 10000),
        ];
    }
}
