<?php

// Load Routing Class
require_once('./routes/router.php');
 
/**
    * Execute Page Routing
    * $_GET['route'] = Route to output

    */
    
    // $urlPath=$_SERVER['SCRIPT_URI'];
    $path=parse_url($_SERVER['SCRIPT_NAME'], $array);

    echo $array;
 
    echo  $path ;
    
    // "here is the array string for the parse_url". 
    // "here it is the uri PATH, the url PATH requesting route ".
    
    echo rtrim($_GET['email'] ?? '','/');


    $URL=$_SERVER["REQUEST_URI"];
    ECHO "this is the urls, REQUEST URI ".  $URL;
    
    $arg=parse_str($path["query"], $paras);
    // ECHO "HERE IS THE FULL UrlPATH ". $urlPath;


    if(isset(($_SERVER['QUERY_STRING']))){
        $params=htmlspecialchars_decode($_SERVER["QUERY_STRING"]);
        echo $params . "these are the params of the query string";
        echo $params;
    }else{
        $params=[];
    }

    new Routing(rtrim($URL ?? '','/'), rtrim($params ?? ' ', '/'));




?>