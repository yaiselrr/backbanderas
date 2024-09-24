<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Class Products_categories_view
 */
return new class extends Migration
{

    /**
     * {@inheritdoc}
     */
    public function up()
    {
        $db = \Illuminate\Support\Facades\DB::connection('wp');
        $db->statement("DROP VIEW IF EXISTS products_categories_view CASCADE;");

        $db->statement("CREATE OR REPLACE VIEW products_categories_view(product_id,product_title,product_description,product_status,product_name,product_type,categorie_id,categorie_name,slug,taxonomy,id) as select `wp1u_yoast_primary_term`.`post_id` AS `product_id`,`wp1u_posts`.`post_title` AS `product_title`,`wp1u_posts`.`post_content` AS `product_description`,`wp1u_posts`.`post_status` AS `product_status`,`wp1u_posts`.`post_name` AS `product_name`,`wp1u_posts`.`post_type` AS `product_type`,`wp1u_terms`.`term_id` AS `categorie_id`,`wp1u_terms`.`name` AS `categorie_name`,`wp1u_terms`.`slug` AS `slug`,`wp1u_yoast_primary_term`.`taxonomy` AS `taxonomy`,`wp1u_yoast_primary_term`.`id` AS `id` from ((`wp1u_terms` join `wp1u_yoast_primary_term` on((`wp1u_terms`.`term_id` = `wp1u_yoast_primary_term`.`term_id`))) join `wp1u_posts` on((`wp1u_posts`.`ID` = `wp1u_yoast_primary_term`.`post_id`))) where (`wp1u_yoast_primary_term`.`taxonomy` = 'product_cat')");
        $db->commit();
    }

    public function down()
    {
        Schema::dropIfExists('products_categories_view');
    }
};
