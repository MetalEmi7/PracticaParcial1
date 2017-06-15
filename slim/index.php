<?php

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require 'vendor/autoload.php';
require_once 'genericDAO.php';

$app = new \Slim\App;
$app->options('/{routes:.+}', function ($request, $response, $args) {
    return $response;
});



$app->add(function ($req, $res, $next) {
    $response = $next($req, $res);
    return $response
            ->withHeader('Access-Control-Allow-Origin', '*')
            ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
});



$app->get('/table/{table}', function (Request $request, Response $response) {
    $table = $request->getAttribute('table');
    return GenericDAO::getAll($table);
});

$app->get('/table/{table}/Login', function (Request $request, Response $response, $args) {
    $table = $request->getAttribute('table');
    $params = $request->getParams('form');
    GenericDAO::getUser($table,$params);
    return $response;
});
//ERRORES:
/*  
    1. GET y POST: Metodo no permitodo [???]
    2. REQUEST Genera 10 errores

    Aparentemente: Habia un error de sintaxis en la ruta del metodo
    del servicio en el codigo de angular. [Revisando] 
*/




$app->post('/table/{table}/insert', function (Request $request, Response $response,$args) {
    $table = $request->getAttribute('table');
    $params = $request->getParams();
    GenericDAO::insert($table,$params);
    return $response;
});

$app->delete('/table/{table}/delete/{id}', function (Request $request, Response $response) {
    $table = $request->getAttribute('table');
    $id = $request->getAttribute('id');
    GenericDAO::delete($table, $id);
    return $response;
});
//ERRORES:
/* POST: Metodo no permitido :405 */   //Cuando no se manda ningun valor

$app->put('/table/{table}/update', function (Request $request, Response $response) {
    $table = $request->getAttribute('table');
    $params = $request->getParams();
    GenericDAO::update($table,$params);
    return $response;
});

$app->run();

?>