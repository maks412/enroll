<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: *");

$str = json_decode($_POST['json'], true);

$grant_cert_text = $str['grant_cert_text'];
$grant_cert = $str['grant_cert'];

?>