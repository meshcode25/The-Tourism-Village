<?php

// echo (__DIR__."/.".".htacess");
// include_once(__DIR__."/.".".htacess");

// public PDO::__construct(
//     string $dsn;
//     ?string $username = null;
//     ?string $password = null;
//     ?array $options = null;



//     // $dbconnection="mysqli";
//     // $servername="127.0.0.1";
//     // $username="root";
//     // $password="";
//     // $dbname="tourismvillage db";
//     // $options=[
//     //     PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION,
//     // ];
// )

$dbconnection="mysqli";
$servername="localhost";
$username="Yegon";
$password="Yegon@2029";
$dbname="tourismvillage db";
$charset=""
$options=[
    PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION,
];


// $dbconnection=$_ENV["dbconnection"];
// $servername=$_ENV["dbconnection"];
// $username=$_ENV["username"];
// $password=$_ENV["password"];
// $dbname=$_ENV["dbname"];

try{
    $conn = new PDO("$dbconnection:host=$servername, dbname=$dbname", $username, $password, $options);
    //set Atttributes to handles exception erros 
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); 

    
    ECHO " SUCCESSFULLY CONNECTED TO THE DATABASE   ";
    

}catch(PDOException $e){
    echo "DATABASE CONNECTION FAILED   ". $e->getMessage(). "END OF DATABASE CONNECTION ERROR   ";
    error_log("DATABASE CONNECTION FAILED   ". $e->getMessage(). "END OF DATABASE CONNECTION ERROR   ")

}

// Load Routing Class
require_once('./routes/router.php');



    $url=$_SERVER["REQUEST_URI"];

    // $queries=parse_str($querystring, $array);
    // print_r($array);
    // echo $url;

    $querystringarray=$_SERVER["QUERY_STRING"];

    $path=explode("?", $url, 2)[0];

    if(!empty(($_SERVER['QUERY_STRING']))){
        $params=($_SERVER['QUERY_STRING']);
        $par=parse_str($params, $array);
        // echo $array["name"]. "<br>";
        // echo $array["email"]. "<br>";
        // echo $array["id"]. "<br>";
        echo "these are the params of the query string above and below    ". "<br>    ";
        error_log("these are the params of the query string above and below  ")
        print_r($array);
    }else{
        $params=[];

        echo "the params are not set";
        error_log("these are the params of the query string above and below  ")

    }

    error_log("these are the params of the query string above and below  ")

    echo "this is the path of we got from the request string    ";
    new Routing(rtrim($path ?? '','/'), rtrim($par ?? ' ', '/'));

    // new Routing("login");




?>