<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Class Products_type_view
 */
return new class extends Migration
{

    /**
     * {@inheritdoc}
     */
    public function up()
    {
        $db = \Illuminate\Support\Facades\DB::connection('wp');
        $db->statement("DROP VIEW IF EXISTS products_type_view CASCADE;");

        $db->statement("CREATE OR REPLACE VIEW products_type_view(term_id,name,taxonomy,description,term_group) as select `wp1u_terms`.`term_id` AS `term_id`,`wp1u_terms`.`name` AS `name`,`wp1u_term_taxonomy`.`taxonomy` AS `taxonomy`,`wp1u_term_taxonomy`.`description` AS `description`,`wp1u_terms`.`term_group` AS `term_group` from (`wp1u_terms` join `wp1u_term_taxonomy` on((`wp1u_terms`.`term_id` = `wp1u_term_taxonomy`.`term_id`))) where (`wp1u_term_taxonomy`.`taxonomy` = 'product_type')");
        $db->commit();
    }

    public function down()
    {
        Schema::dropIfExists('products_type_view');
    }
};
