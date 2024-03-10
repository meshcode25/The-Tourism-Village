<?php

    class Users{
        protected $params= [];
        function __construct($params = [])
        {
            // Define provided parmaters
            $this->params = $params;
        }
        public function index(){
            // Sample page content
            echo "<h1>User List Page!</h1>";
            echo "<pre>";
            print_r($this->params);
            echo "</pre>";
        }
        public function edit($user_id=''){
            // Sample page content with the argument
            echo "<h1>EDIT USER with an ID of: [{$user_id}]</h1>";
        }
    }
?>