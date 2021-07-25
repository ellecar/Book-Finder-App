<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class BorrowerList extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('borrower_lists', function (Blueprint $table) {
            $table->increments('id');
            $table->string('b_name');
            $table->string('b_title');
            $table->string('rented');
            $table->string('b_price');
            $table->string('b_status');
            $table->date('b_date');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('borrower_lists');
    }
}
