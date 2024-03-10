<? 

    if(!empty($_REQUEST["email"])){
        // echo $_REQUEST["email"];        
        // echo $_REQUEST["email"]. "\n";
        // echo $_REQUEST["password"];

        // echo $_SERVER['PHP_SELF'] ."<br>";
        // echo $_SERVER['SERVER_NAME'] ."<br>";
        // echo $_SERVER['HTTP_HOST']."<br>";
        // echo $_SERVER['HTTP_USER_AGENT']."<br>";
        // echo $_SERVER['SCRIPT_NAME']."<br>";
        $response=array("email" => $_REQUEST["email"], "password"=>$_REQUEST["password"]);
        echo json_encode($response);

    
        }else{
            echo "the sent post request is empty";
            echo "<br>";
            echo $_GET["emai"];
            echo "<br>";        
            echo $_GET["password"];
            echo "<br>";
            // echo $_SERVER['HTTP_REFERER'] ."<br>";
            // echo $_REQUEST["password"]

            // json_encode(array("email" => "here is teh emimal"))
            ECHO "HERE IS THE SHIT TO PRINT". "\r\n";
    }
?>