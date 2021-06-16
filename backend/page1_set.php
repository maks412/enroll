<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: *");

$str = json_decode($_POST['json'], true);

$fname = $str['fname'];
$lname = $str['lname'];
$nname = $str['nname'];
$nlname = $str['nlname'];
$patronymic = $str['patronymic'];
$photo = $str['photo'];
$birthday = $str['birthday'];
$nationality = $str['nationality'];
$gender = $str['gender'];
$married = $str['married'];
$document_type = $str['document_type'];
$IIN = $str['IIN'];
$document_no = $str['document_no'];
$issued_by = $str['issued_by'];
$issued_date = $str['issued_date'];
$social_status = $str['social_status'];
$social_status_upload = $str['social_status_upload'];
?>