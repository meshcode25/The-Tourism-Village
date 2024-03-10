<?php


// Load Routing Class
require_once('/routes/router.php');
 
/**
    * Execute Page Routing
    * $_GET['route'] = Route to output
    */
new Routing(rtrim($_GET['route'] ?? '','/'));

?>