<?php

namespace Database\Seeders;

use DirectoryTree\Authorization\Permission;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Artisan;
use JsonMachine\Items;
use JsonMachine\JsonDecoder\ExtJsonDecoder;
use Modules\manage\Models\Business_sectors;
use Modules\masters\Models\Attributes;
use Modules\masters\Models\Types;
use Modules\security\Models\Roles;
use Modules\security\Models\Users;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->loadUsers();
        $this->loadPermissions();
        $this->loadRoles();
        $this->loadBusinessSectors();
        $this->loadTypes();
        $this->loadCategories();
        $this->loadProductTypes();
        $this->loadAttributes();
        $this->loadProducts();
        $this->call(
            [
                UserSeeder::class
            ]
        );
    }

    public function loadFromJson($class, $address, $id_attribute = "id")
    {
        $elements = Items::fromFile(__DIR__ . $address, ['decoder' => new ExtJsonDecoder(true)]);
        foreach ($elements as $p) {
            $class::updateOrCreate(['id' => $p[$id_attribute]], $p);
        }
    }

    public function loadUsers()
    {
        $this->loadFromJson(Users::class, "/data/users.json");
        $message = "Users created succesfully";
        $this->command->getOutput()->success($message);
    }
    public function loadBusinessSectors()
    {
        $this->loadFromJson(Business_sectors::class, "/data/business_sectors.json");
        $message = "Business sectors created succesfully";
        $this->command->getOutput()->success($message);
    }

    public function loadPermissions()
    {
        $this->loadFromJson(Permission::class, "/data/permissions.json");
        $message = "Permissions created succesfully";
        $this->command->getOutput()->success($message);
    }

    public function loadRoles()
    {
        $this->loadFromJson(Roles::class, "/data/roles.json");
        $message = "Roles created succesfully";
        $this->command->getOutput()->success($message);
    }

    public function loadCategories()
    {
        Artisan::call('migrate_wp_categories');
        $message = "Categories created succesfully";
        $this->command->getOutput()->success($message);
    }

    public function loadProductTypes()
    {
        Artisan::call('migrate_wp_product_type');
        $message = "Product types created succesfully";
        $this->command->getOutput()->success($message);
    }

    public function loadProducts()
    {
        $this->command->getOutput()->info("Loading Products");
        Artisan::call('migrate_wp_products');
        $message = "Products types created succesfully";
        $this->command->getOutput()->success($message);
    }

    public function loadAttributes()
    {
        $this->loadFromJson(Attributes::class, "/data/attributes.json");
        $message = "Attributes created succesfully";
        $this->command->getOutput()->success($message);
    }

    public function loadTypes()
    {
        $this->loadFromJson(Types::class, "/data/types.json");
        $message = "Types created succesfully";
        $this->command->getOutput()->success($message);
    }
}
