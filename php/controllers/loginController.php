<?php

    
class Login{
    // params 
    public $params;
    // method
    public $method;
    //arg
    public $args;

    //class contructors
    public function _construct($params=[], $method=[], $args=[]){
        if(!empty($params)){
            $this->params=$params;
        }else{
            $this->params=[];
        }

        if(!empty($method)){
            $this->method=$method;
        }else{
            $this->method=[];
        }

        if(!empty($args)){
            $this->args=$args;
        }else{
            $this->args=[];
        }
        
    
    }

    public function printParams(){
        echo $this->params;
        echo $this->method;
        echo $this->args;

        echo "  Here is the LOGIN function print it   ";


        if($_SERVER['REQUEST_METHOD']=="POST"){
            if(!empty($_REQUEST["email"])){
                $route=$_SERVER["REQUEST_URI"];
                echo $route;
                $response=array("email" => $_REQUEST["email"], "password"=>$_REQUEST["password"], "route"=>[$route]);
                echo json_encode($response);

            
            }else{
                     
                $url=$_SERVER["REQUEST_URI"] ;
                echo "the sent post request is empty";
            
                echo "HERE IS THE SHIT TO PRINT". "\r\n";
            }
        }else{
            
            $url=$_SERVER["REQUEST_URI"];
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




    }

}


?>