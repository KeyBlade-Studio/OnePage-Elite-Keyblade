<?php
// Check if the form was submitted via POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Set your receiving email address - change this value
    $to = "your-email@example.com";

    // Sanitize and assign form inputs
    $subject = !empty($_POST["subject"]) ? strip_tags($_POST["subject"]) : "No Subject";
    $name = !empty($_POST["name"]) ? strip_tags($_POST["name"]) : "Anonymous";
    $email = !empty($_POST["email"]) ? filter_var($_POST["email"], FILTER_SANITIZE_EMAIL) : "";
    $message = !empty($_POST["message"]) ? strip_tags($_POST["message"]) : "";

    // Validate the email address
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email address.";
        exit;
    }

    // Prevent header injection by removing line breaks from name and email
    $name = preg_replace('/[\r\n]+/', ' ', $name);
    $email = preg_replace('/[\r\n]+/', ' ', $email);

    // Construct email headers
    $headers  = "From: " . $name . " <" . $email . ">\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/plain; charset=UTF-8\r\n";

    // Attempt to send the email
    if(mail($to, $subject, $message, $headers)){
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message.";
    }
} else {
    // If the request method is not POST, display an error message
    echo "Invalid request method.";
}
?>
