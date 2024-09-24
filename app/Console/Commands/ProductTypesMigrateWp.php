<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Modules\masters\Models\Product_type;
use Modules\masters\Services\Product_typeService;

class ProductTypesMigrateWp extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */

    protected $signature = 'migrate_wp_product_type';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Obtener las Tipos de producto de wordpress';


    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        DB::beginTransaction();
        try {
            $this->getOutput()->info('Importando tipos de productos de Wp');
            $count = Product_typeService::MigrateWpData($this->getOutput());
            $this->getOutput()->info('Importando ' . $count . ' tipo de productos');
            DB::commit();
        } catch (\Throwable $e) {
            DB::rollBack();
            throw $e;
        }
        $statement = 'ALTER TABLE product_type AUTO_INCREMENT = 211;';
        DB::statement($statement);
    }
}
