<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: *");

echo json_encode(array( 
    "grant_cert" => "file_upload",
    "grant_cert_text" => "grant_cert_text"
));
?>

