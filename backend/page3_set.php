<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: *");

$str = json_decode($_POST['json'], true);

$phone = $str['phone'];
$current_address_country = $str['current_address_country'];
$current_address_province = $str['current_address_province'];
$current_address_city = $str['current_address_city'];
$current_address = $str['current_address'];
$register_address_country = $str['register_address_country'];
$register_address_province = $str['register_address_province'];
$register_address_city = $str['register_address_city'];
$register_address = $str['register_address'];
$student_house = $str['student_house'];
$relatives = $str['items'];

?>