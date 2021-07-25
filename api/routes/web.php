<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});
$router->group(['prefix' => 'api'], function () use ($router){
    
    $router->get('book-list', ['uses' => 'BookListController@getAllBook']);
    $router->post('add-book', ['uses' => 'BookListController@insertBook']);

    $router->get('borrower-list', ['uses' => 'BorrowerListController@getAllBorrower']);
    $router->post('borrower-list', ['uses' => 'BorrowerListController@insertBook']);

    // $router->delete('delete-book/{id}', ['uses' => 'BookListController@deleteBook']);
    $router->put('book-list/{id}', ['uses' => 'BookListController@updateBook']);

    $router->put('borrower-list/{id}', ['uses' => 'BorrowerListController@updateBorrower']);

    $router->delete('book-list/{id}', ['uses' => 'BookListController@deleteBook']);

});

// $router->group(['prefix' => 'api'], function () use ($router){
//     $router->post('add-book', ['uses' => 'BookListController@insertBook']);
// });

// $router->group(['prefix' => 'api'], function () use ($router){
//     $router->get('borrower-list', ['uses' => 'BorrowerListController@getAllBorrower']);
// });
// $router->group(['prefix' => 'api'], function () use ($router){
//     $router->post('borrower-list', ['uses' => 'BorrowerListController@insertBook']);
// });

// $router->group(['prefix' => 'api'], function () use ($router){
//     $router->delete('delete-book/{id}', ['uses' => 'BookListController@deleteBook']);
// });