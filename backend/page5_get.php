<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: *");

echo json_encode(array(
    "certificate75" => "upload",
    "spt_number" => "123",
    "spt_point" => "212",
    "spt_upload" => "upload",
    "infomatrix_number" => "123",
    "infomatrix_point" => "2012",
    "infomatrix_upload" => "upload",
    "student_fee" => "upload",
    "tuition_fee" => "upload",
    "eng_course" => "upload",

    "creative_exam" => "upload",
    "pedagogical_test" => "upload",
    "creative_exam_text" => "4k5j65",
    "pedagogical_test_text" => "3j45hjh"
));
?>

