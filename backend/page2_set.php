<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: *");

$str = json_decode($_POST['json'], true);

$country = $str['country'];
$province = $str['province'];
$school = $str['school'];
$language = $str['language'];
$foreign_language = $str['foreign_language'];
$attestat_type = $str['attestat_type'];
$attestat_series = $str['attestat_series'];
$attestat_number = $str['attestat_number'];
$attestat_score = $str['attestat_score'];
$attestat_given_date = $str['attestat_given_date'];
$attestat_upload = $str['attestat_upload'];
$preparation_course = $str['preparation_course'];
$preparation_country = $str['preparation_country'];
$preparation_province = $str['preparation_province'];
?>