<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Modules\manage\Services\ProductsService;
use Modules\masters\Models\Product_type;
use Modules\masters\Services\Product_typeService;

class ProductsMigrateWp extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */

    protected $signature = 'migrate_wp_products';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Obtener los productos  de wordpress';


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
            $this->getOutput()->info('Importando  productos de Wp');
            $count = ProductsService::MigrateWpData($this);
            $this->getOutput()->info('Importando ' . $count . 'productos');
            DB::commit();
        } catch (\Throwable $e) {
            DB::rollBack();
            throw $e;
        }
        $statement = 'ALTER TABLE product_type AUTO_INCREMENT = 24325;';
        DB::statement($statement);
    }
}
