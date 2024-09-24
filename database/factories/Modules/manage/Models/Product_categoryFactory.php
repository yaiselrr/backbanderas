<?php

namespace Database\Factories\Modules\manage\Models;

use Illuminate\Database\Eloquent\Factories\Factory;

class Product_categoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        \Bezhanov\Faker\ProviderCollectionHelper::addAllProvidersTo($this->faker);
        return [
        ];
    }
}

