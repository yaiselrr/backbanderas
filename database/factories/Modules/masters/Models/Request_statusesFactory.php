<?php

namespace Database\Factories\Modules\masters\Models;

use Illuminate\Database\Eloquent\Factories\Factory;

class Request_statusesFactory extends Factory
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

