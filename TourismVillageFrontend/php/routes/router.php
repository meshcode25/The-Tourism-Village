<?php 
/**
    * List of routes
    * Data Type = Array
    */
 
$routes = [
    [
        "pattern" => '/^index$/',
        "method" => "ANY",
        "controller" => "Index"
    ],
    [
        "pattern" => "/^user\/(\d+)$/",
        "method" => "GET",
        "controller" => "Users",
        "page" => "edit"
    ],

    [
        "pattern"=> "/^login$/",
        "method"=> "POST",
        "controller"=> "login"

    ],

    [
        "pattern"=> "/^signup$/",
        "method"=> "POST",
        "controller"=> "signup"

    ],

    [
        "pattern"=> "/^resetpassword$/",
        "method"=> "GET",
        "controller"=> "login"

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
    
    public function __construct($route =''){
        if(!empty($route)){
            $this->route = $route;
            // Validate route
            if($this->validate_route()){
                // If route is valid
                ob_start();
                // load the controller class
                include_once("controllers/{$this->controller}.php");
 
                if(!$this->page){
                    // If page is not set
                    $this->page = 'index';
                }
                // Initializing the controller with the request data
                $controller = new ($this->controller)($this->params);
                // Execute the object of the class
                $controller->{$this->page}(...$this->args);
                echo ob_get_clean();
            }else{
                // Throw an Error if route is not valid
                throw new ErrorException("Undefined Route.");
            }
        }else{
            // Throw an Error if route is not defined
            throw new ErrorException("Undefined Route.");
        }
    }
 
    protected function validate_route(){
        global $routes;
 
        foreach($routes as $route){
            /**
                * Check if the route is allowed
                */
            if(preg_match($route['pattern'], $this->route, $matches)){
                /**
                    * Checking if the provided method and the request method are match
                    */
                if($route['method'] != "ANY"){
                    if($route['method'] != $_SERVER['REQUEST_METHOD']){
                        throw new ErrorException("Request Method is denied!");
                    }
                }
 
                /***
                       * Defining the Arguments
                    */
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
     
                    // Store POST Request Data
                    $this->params['post'] = $_POST ?? []; 
                    // Store GET Request Data
                    $this->params['get'] = $_GET ?? []; 
                    // merging matches with params
                    $this->params = array_merge($this->params, array_filter($matches));
                    return true;
                }

            }
            return false;
        }
    }