<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class Bandera_adminSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::beginTransaction();
        try {

            \Modules\security\Models\Roles::factory(10)->create();
            \Modules\masters\Models\Categories::factory(10)->create();
            \Modules\settings\Models\Settings::factory(10)->create();
            \Modules\sale\Models\Pay_ways::factory(10)->create();
            \Modules\masters\Models\Request_statuses::factory(10)->create();
            \Modules\stocks\Models\Incoming_products::factory(10)->create();
            \Modules\security\Models\Users::factory(10)->create();
            \Modules\manage\Models\Orders::factory(10)->create();
            \Modules\manage\Models\Client::factory(10)->create();
            \Modules\manage\Models\Products::factory(10)->create();
            \Modules\manage\Models\Invoices::factory(10)->create();
            \Modules\stocks\Models\Incoming_format_product::factory(10)->create();
            \Modules\manage\Models\Refurbished::factory(10)->create();

            DB::commit();
        } catch (\Throwable $e) {
            DB::rollBack();
            throw $e;
        }
    }
}

