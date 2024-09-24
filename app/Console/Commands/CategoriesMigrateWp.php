<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Modules\masters\Models\Categories;
use Modules\masters\Services\CategoriesService;

class CategoriesMigrateWp extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */

    protected $signature = 'migrate_wp_categories';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Obtener las categorias de wordpress';


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
//        Categories::query()->delete();
        try {
            $this->getOutput()->info('Importando categorias de Wp');
            $count = CategoriesService::MigrateWpData($this);
            $this->getOutput()->info('Importandos ' . $count . ' categorias');
            DB::commit();
        } catch (\Throwable $e) {
            DB::rollBack();
            throw $e;
        }
        $statement = "ALTER TABLE categories AUTO_INCREMENT = 527;";
        DB::statement($statement);
    }
}
