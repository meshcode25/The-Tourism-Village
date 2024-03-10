<?php
 
class Index{
    protected $params= [];
    function __construct($params = [])
    {   
        // Define provided parmaters
        $this->params = $params;
    }
    public function index(){
        // Sample page content
        echo "<h1>Sample Index Page</h1>";
 
        // Output the prameters available
        echo "<pre>";
        print_r($this->params);
        echo "</pre>";
    }
}

?>