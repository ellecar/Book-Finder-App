<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class book_list extends Model
{
    protected $fillable = [
        'id','title','author','price','status','date'
    ];
    protected $hidden = [];
}