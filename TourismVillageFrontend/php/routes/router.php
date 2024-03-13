<?php 
/**
    * List of routes
    * Data Type = Array
    */
 
$routes = [
    [
        "pattern" => '/^index$/',
        "method" => "ANY",
        "controller" => "index",
        "class"=>"Index",
    ],
    [
        "pattern" => "/^user\/(\d+)$/",
        "method" => "GET",
        "controller" => "Users",
        "page" => "edit",
        "class"=>"Edit",
    ],

    [
        "pattern"=> "/^(.*)[0-9 a-z A-Z-\/]*login$/",
        "method"=> "POST",
        "controller"=> "loginController",
        "class"=>"Login"
    ],
    
    [
        "pattern"=> "/^(.*)[0-9 a-z A-Z-\/]*login$/",
        "method"=> "GET",
        "controller"=> "loginController",
        "class"=>"Login"
    ],

    [
        "pattern"=> "/^(.*)[0-9 a-z A-Z-\/]*signup$/",
        "method"=> "POST",
        "controller"=> "signupController",
        "class"=>"Signup",
    ],

    [
        "pattern"=> "/^(.*)[0-9 a-z A-Z-\/]*resetpassword$/",
        "method"=> "GET",
        "controller"=> "resetPassword",
        "class"=>"Resetpassword",
    ]
];
 
/**
    * Routing Class
    */
class Routing{
    // route URI
    public $route;
    // Controller
    public $controller;
    // the object to execute from the controller
    public $page;
    // Post, Get, and other Request Data
    public $params =[];
    // URI parameter = the controller's object argument(s)
    public $args =[];

    public $class;
    
    public function __construct($route =''){
        if(!empty($route)){
            $this->route = $route;
            echo "the next line of code is what I am talking about ".  $this->route;
            // Validate route
            if($this->validate_route()){
                // If route is valid
                ob_start();
                // load the controller class
                // $path ='C:\xampp\php\PEAR';
                // set_include_path(get_include_path() . "/". $path);
                $path=getcwd();
                // $fullpath=$path."\controllers\
                // echo $path;
                // echo "CURRENTLY WORKING DIRECTORY" .$path;

                $currentcontroller=$this->controller;
                // include_once($fullpath $currentcontroller .".php");

                include_once("C:/xampp/htdocs/www/php/controllers/$this->controller.php");
                // ./routes/router.php
   
                if(!$this->page){
                    // If page is not set
                    $this->page = 'index';
                }
                // Initializing the controller with the request data
                // $controller = new ($this->class)($this->params);
                $controller= new ($this->class)([1,2,3], ["post", "get"], ["create user"]);
                // Execute the object of the class
                 echo $controller->printParams();
                //  echo $controller->{$this->page}(...$this->args);

                echo ob_get_clean();

            }else{
                // Throw an Error if route is not valid
                throw new ErrorException(" Unable to validtae Route in Validate_Route function Undefined Route.");
            }
        }else{
            // Throw an Error if route is not defined
            throw new ErrorException("Route is empty pUndefined Route.");
        }
    }
 
    protected function validate_route(){
        global $routes;
        echo "here is the route I am validating ". $this->route;

        foreach($routes as $route){
            /**
                * Check if the route is allowed
                */
            if(preg_match($route['pattern'], $this->route, $matches)){
                /* Checking if the provided method and the request method are match*/
                if($route['method'] != "ANY"){
                    if($route['method'] != $_SERVER['REQUEST_METHOD']){
                        throw new ErrorException("Request Method is denied!");
                    }
                }
 
                /***
                       * Defining the Arguments*/
                    if(isset($matches[1])){
                        if(!is_array($matches[1])){
                            $this->args = [$matches[1]];
                        }else{
                            $this->args = $matches[1];
                        }
                    }
                    /**
                        * Defining the class Object
                        */
                    if(isset($route['page']))
                    $this->page = $route['page'];
                    /**
                        * Defining the class name
                        */
                    $this->controller = $route['controller'];

                    $this->class=$route['class'];
     
                    // Store POST Request Data
                    $this->params['post'] = $_POST ?? []; 
                    // Store GET Request Data
                    $this->params['get'] = $_GET ?? []; 
                    // merging matches with params
                    $this->params = array_merge($this->params, array_filter($matches));
                    return true;
                }

            }

            print_r("here is the route I am validating ". $this->route); 
            throw new ErrorException("This route didn't match any in our routes array!");
            return false;
        }
    }