<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: *");

$str = json_decode($_POST['json'], true);

$status = $str['status'];
//status "true" bolsa norm

?>