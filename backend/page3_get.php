<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: *");

echo json_encode(array(
    "register_address_country" => array(
        "selected_id" => 11,
        "list" => array()),
    "register_address_province" => array(
        "selected_id" => 123,
        "list" => array()),
    "register_address_city" => array(
        "selected_id" => 11,
        "list" => array()),
    "current_address_country" => array(
        "selected_id" => 123,
        "list" => array()),
    "current_address_province" => array(
        "selected_id" => 11,
        "list" => array()),
    "current_address_city" => array(
        "selected_id" => 123,
        "list" => array()),
    
    "phone" => "(701)353-2345",
    "student_house" => "yes",
    "relatives" => array(
        "relative_type" => "Mother",
        "full_name" => "Maira apay",
        "contact" => "87017171711"
    ),
));
?>

