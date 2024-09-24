<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Modules\manage\Models\Products;
use Modules\manage\Services\ProductsService;
use Modules\masters\Models\Product_type;
use Modules\masters\Services\Product_typeService;

class ProductsChangeImageName extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */

    protected $signature = 'products_change_name';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Cambiar los nombres de los productos';


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
        $this->getOutput()->info('Cambiando los nombres de los  productos de Wp');
        try {
            $files = [];
            $read_address = Storage::path('public') . '/products';
            $this->listdiraux($read_address, $files);
            $files = array_filter($files, function ($element) {
                return str_contains($element, '..webp');
            });
            foreach ($files as $f) {
                rename($f, str_replace('..', '.', $f));
            }

            $products = Products::query()->get()->all();
            foreach ($products as $p) {
                $image = str_replace('..', '.', $p->image);
                $p->image = $image;
                $p->save();
            }
            $fp = fopen('error_image.log', 'a');//opens file in append mode
            fclose($fp);
        } catch (\Throwable $e) {
            throw $e;
        }
        $this->getOutput()->info('Terminado de cambiar los nombres');
    }

    public function listdiraux($dir, &$files)
    {
        $handle = opendir($dir);
        while (($file = readdir($handle)) !== false) {
            if ($file == '.' || $file == '..') {
                continue;
            }
            $filepath = $dir == '.' ? $file : $dir . '/' . $file;
            if (is_link($filepath))
                continue;
            if (is_file($filepath))
                $files[] = $filepath;
            else if (is_dir($filepath))
                $this->listdiraux($filepath, $files);
        }
        closedir($handle);
    }


}
