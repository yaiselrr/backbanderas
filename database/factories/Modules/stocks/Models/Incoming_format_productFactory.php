<?php

namespace Database\Factories\Modules\stocks\Models;

use Illuminate\Database\Eloquent\Factories\Factory;

class Incoming_format_productFactory extends Factory
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

