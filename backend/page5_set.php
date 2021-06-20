<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: *");

$str = json_decode($_POST['json'], true);

$certificate75 = $str['certificate75'];
$spt_number = $str['spt_number'];
$spt_point = $str['spt_point'];
$spt_upload = $str['spt_upload'];
$infomatrix_number = $str['infomatrix_number'];
$infomatrix_point = $str['infomatrix_point'];
$infomatrix_upload = $str['infomatrix_upload'];
$student_fee = $str['student_fee'];
$tuition_fee = $str['tuition_fee'];
$eng_course = $str['eng_course'];
$creative_exam = $str['creative_exam'];
$pedagogical_test = $str['pedagogical_test'];
$creative_exam_text = $str['creative_exam_text'];
$pedagogical_test_text = $str['pedagogical_test_text'];
?>