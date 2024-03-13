<?php

// Load Routing Class
require_once('./routes/router.php');



    $url=$_SERVER["REQUEST_URI"];

    // $queries=parse_str($querystring, $array);
    // print_r($array);
    echo $url;

    $querystringarray=$_SERVER["QUERY_STRING"];

    $path=explode("?", $url, 2)[0];

    if(!empty(($_SERVER['QUERY_STRING']))){
        $params=($_SERVER['QUERY_STRING']);
        $par=parse_str($params, $array);
        echo $array["name"]. "<br>";
        echo $array["email"]. "<br>";
        echo $array["id"]. "<br>";
        echo "these are the params of the query string above and below". "<br>";
        print_r($array);
    }else{
        $params=[];
        echo "the params are not set";
    }

    echo "this is the path of we got from the request string";
    new Routing(rtrim($path ?? '','/'), rtrim($par ?? ' ', '/'));

    // new Routing("login");




?>