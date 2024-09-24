<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Class All_products_views
 */
return new class extends Migration
{

    /**
     * {@inheritdoc}
     */
    public function up()
    {
        $db = \Illuminate\Support\Facades\DB::connection('wp');
        $db->statement("DROP VIEW IF EXISTS all_products_views CASCADE;");

        $db->statement("CREATE OR REPLACE VIEW all_products_views(ID,product_title,product_description,product_status,slug,product_type) as select `wp1u_posts`.`ID` AS `ID`,`wp1u_posts`.`post_title` AS `product_title`,`wp1u_posts`.`post_content` AS `product_description`,`wp1u_posts`.`post_status` AS `product_status`,`wp1u_posts`.`post_name` AS `slug`,`wp1u_posts`.`post_type` AS `product_type` from `wp1u_posts` where (`wp1u_posts`.`post_type` = 'product')");
        $db->commit();
    }

    public function down()
    {
        Schema::dropIfExists('all_products_views');
    }
};
