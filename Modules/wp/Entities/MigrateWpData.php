<?php


namespace Modules\wp\Entities;


use Illuminate\Console\Command;

interface MigrateWpData
{
    static public function MigrateWpData(Command $output=null);
}