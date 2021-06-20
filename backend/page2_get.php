<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: *");

echo json_encode(array(
    "country" => array(
        "selected_id" => 11,
        "list" => array()),
    "province" => array(
        "selected_id" => 123,
        "list" => array()),
    "school" => array(
        "selected_id" => 11,
        "list" => array()),
    "language" => array(
        "selected_id" => 123,
        "list" => array()),
    "foreign_language" => array(
        "selected_id" => 11,
        "list" => array()),
    "attestat_type" => array(
        "selected_id" => 123,
        "list" => array()),
    "attestat_series" => array(
        "selected_id" => 11,
        "list" => array()),
    "preparation_course" => array(
        "selected_id" => 123,
        "list" => array()),
    "preparation_country" => array(
        "selected_id" => 11,
        "list" => array()),
    "preparation_province" => array(
        "selected_id" => 123,
        "list" => array()),
    
    "attestat_number" => "354553",
    "attestat_score" => "123",
    "attestat_given_date" => "2020-01-12",
));
?>

