<? 

    


if($_SERVER['REQUEST_METHOD']=="POST"){
    if(!empty($_REQUEST["email"])){
        $route=$_SERVER["REQUEST_URI"];
        echo $route;
        $response=array("email" => $_REQUEST["email"], "password"=>$_REQUEST["password"], "route"=>[$route]);
        echo json_encode($response);

    
    }else{
        echo "the sent post request is empty";
     
        ECHO "HERE IS THE SHIT TO PRINT". "\r\n";
    }
}else{
        
        $url=$_SERVER["REQUEST_URI"] ."<br>" ;
        echo $url. "<br>";
        echo "the url(uri) is up there look up" . "<br>" ;
        
        $getRequest=$_GET['email'] ."<br>" ;
        echo $getRequest;
        echo "the filename_name request) is up there look up" . "<br>" ;

        $request_filename=$_SERVER["HTTPS"] ."<br>" ;
        echo $request_filename;
        echo "HERE IS THE http IS UP is up there look up" . "<br>" ;

        echo $_SERVER['SCRIPT_NAME'] ."  and this is the server[script_name]<br>";


        $route=rtrim($_GET['email'] ?? '','/');
        echo $route . "<br>";
        echo "there above we have the route <br>";
        echo "the server[request_method, is not of method=post, so I quit <br>";
        echo $_SERVER['PHP_SELF'] ."  and this is the server[php_self]<br>";
        echo $_SERVER['SERVER_NAME'] ."  and this is the server[server_name]<br>";
        echo $_SERVER['HTTP_HOST']."  and this is the server[http_host]<br>";
        echo $_SERVER['HTTP_REFERER'] ."   and this is the server[http_referer]<br>";
        echo $_SERVER['HTTP_USER_AGENT'] ."   and this is the server[http_user_agent]<br>";
        echo $_SERVER['SCRIPT_NAME'] ."  and this is the server[script_name]<br>";
} 




    // if(!empty($_REQUEST["email"])){
    //     // echo $_REQUEST["email"];        
    //     // echo $_REQUEST["email"]. "\n";
    //     // echo $_REQUEST["password"];

    //     // echo $_SERVER['PHP_SELF'] ."<br>";
    //     // echo $_SERVER['SERVER_NAME'] ."<br>";
    //     // echo $_SERVER['HTTP_HOST']."<br>";
    //     // echo $_SERVER['HTTP_USER_AGENT']."<br>";
    //     // echo $_SERVER['SCRIPT_NAME']."<br>";
    //     $response=array("email" => $_REQUEST["email"], "password"=>$_REQUEST["password"]);
    //     echo json_encode($response);

    
    //     }else{
    //         echo "the sent post request is empty";
    //         echo "<br>";
    //         echo $_GET["emai"];
    //         echo "<br>";        
    //         echo $_GET["password"];
    //         echo "<br>";
    //         // echo $_SERVER['HTTP_REFERER'] ."<br>";
    //         // echo $_REQUEST["password"]

    //         // json_encode(array("email" => "here is teh emimal"))
    //         ECHO "HERE IS THE SHIT TO PRINT". "\r\n";
    // }
?>