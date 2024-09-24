<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Class All_products_relations_view
 */
return new class extends Migration
{

    /**
     * {@inheritdoc}
     */
    public function up()
    {
        $db = \Illuminate\Support\Facades\DB::connection('wp');
        $db->statement("DROP VIEW IF EXISTS all_products_relations_view CASCADE;");

        $db->statement("CREATE OR REPLACE VIEW all_products_relations_view(ID,product_title,product_description,product_status,slug,product_type,name,product_type_id,category_id,category_name) as select `all_products_views`.`ID` AS `ID`,`all_products_views`.`product_title` AS `product_title`,`all_products_views`.`product_description` AS `product_description`,`all_products_views`.`product_status` AS `product_status`,`all_products_views`.`slug` AS `slug`,`all_products_views`.`product_type` AS `product_type`,`products_type_view`.`name` AS `name`,`products_type_view`.`term_id` AS `product_type_id`,`categories_view`.`term_id` AS `category_id`,`categories_view`.`name` AS `category_name` from (((((`all_products_views` join `wp1u_term_relationships` on((`all_products_views`.`ID` = `wp1u_term_relationships`.`object_id`))) join `wp1u_term_taxonomy` on((`wp1u_term_taxonomy`.`term_taxonomy_id` = `wp1u_term_relationships`.`term_taxonomy_id`))) join `products_type_view` on((`products_type_view`.`term_id` = `wp1u_term_taxonomy`.`term_id`))) left join `wp1u_yoast_primary_term` on((`all_products_views`.`ID` = `wp1u_yoast_primary_term`.`post_id`))) left join `categories_view` on((`categories_view`.`term_id` = `wp1u_yoast_primary_term`.`term_id`)))");
        $db->commit();
    }

    public function down()
    {
        Schema::dropIfExists('all_products_relations_view');
    }
};
