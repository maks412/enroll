<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: *");

echo json_encode(array(
    "citizenship" => "Kazakhstan",
    "birthday" => "1999-03-23",
    "nationality" => array(
        "selected_id" => 11,
        "list" => array(
            array("text" => "Select One", "value" => null),
            array("text" => "KZ", "value" => 11),
            array("text" => "USA", "value" => 12),) 
    ),
    "social_status" => array(
        "selected_id" => 123,
        array("text" => "Select One", "value" => null),
        array("text" => "Social", "value" => 123),
        array("text" => "Status", "value" => 12)
    ),
    "gender" => "Male",
    "married" => "Single",
    "document_type" => "passport",
    "IIN" => "1233454566",
    "document_no" => "3458349865",
    "issued_by" => "IIM KZ",
    "issued_date" => "2001-05-23",
    "fname" => "Maks",
    "lname" => "Galiyev",
    "nname" => "Макс",
    "nlname" => "Галиев",
    "patronymic" => "Естайулы",

    "photo" => "upload photo file"
));
?>

