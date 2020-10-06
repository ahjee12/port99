<?php
    $name = $_POST['name'];
    $visitor_email = $_POST['address'];
    $message = $_POST['message'];

    // $email_from = 'ahjee200@gmail.com';
    $email_subject = "New Form Submission";
    $email_body = "User Name: $name./n".
    "User Email: $visitor_email./n".
    "User Message : $message./n"



?>