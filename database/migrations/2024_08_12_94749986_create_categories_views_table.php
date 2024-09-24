<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Class Categories_view
 */
return new class extends Migration
{

    /**
     * {@inheritdoc}
     */
    public function up()
    {
        $db = \Illuminate\Support\Facades\DB::connection('wp');
        $db->statement("DROP VIEW IF EXISTS categories_view CASCADE;");

        $db->statement("CREATE OR REPLACE VIEW categories_view(term_id,name,taxonomy,slug,parent,description) as select `wp1u_terms`.`term_id` AS `term_id`,`wp1u_terms`.`name` AS `name`,`wp1u_term_taxonomy`.`taxonomy` AS `taxonomy`,`wp1u_terms`.`slug` AS `slug`,`wp1u_term_taxonomy`.`parent` AS `parent`,`wp1u_term_taxonomy`.`description` AS `description` from (`wp1u_terms` join `wp1u_term_taxonomy` on((`wp1u_terms`.`term_id` = `wp1u_term_taxonomy`.`term_id`))) where (`wp1u_term_taxonomy`.`taxonomy` = 'product_cat')");
        $db->commit();
    }

    public function down()
    {
        Schema::dropIfExists('categories_view');
    }
};
