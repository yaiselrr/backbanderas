<?php

namespace Database\Factories\Modules\sale\Models;

use Illuminate\Database\Eloquent\Factories\Factory;

class Pay_waysFactory extends Factory
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

