<?php
if(isset($_POST['email'])) {
     
    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "s.clara.wu@gmail.com";
    $email_subject = "Penn Labs Project Submission";
     
     
    function died($error) {
      // your error code can go here
        echo json_encode(array("Response" => "Error", 'Error' => $error));
    }
     
    // validation expected data exists
    if(!isset($_POST['name']) ||
      !isset($_POST['email']) ||
      !isset($_POST['message'])) {
         echo json_encode(array("Response"=>"Error"));
    }     
    $name = $_POST['name']; // required
    $email_from = $_POST['email']; // required
    $comments = $_POST['message']; // required
     
    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
  if(!preg_match($email_exp,$email_from)) {
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
    return died($error_message);
  }
    $string_exp = "/^[A-Za-z .'-]+$/";
  if(!preg_match($string_exp,$name)) {
    $error_message .= 'The name you entered does not appear to be valid.<br />';
    return died($error_message);
  }

   if(strlen($error_message) > 0) {
    died($error_message);
  }
    $email_message = "Form details below.<br/>";
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
     
    $email_message .= "<br/><em>Name: </em>".clean_string($name)."<br/>";
    $email_message .= "<em>Email: </em>".clean_string($email_from)."<br/>";
    $email_message .= "<em>Message: </em>".clean_string($comments)."<br/>";
     
     
$url_send = 'http://sendgrid.com/';
$user = $_ENV['SENDGRID_USER'];
$pw = $_ENV['SENDGRID_PW'];

$params = array(
  'api_user' => $user,
  'api_key' => $pw,
  'to' => 's.clara.wu@gmail.com',
  'subject' => $email_subject,
  'html' => '<p>' . $email_message . '</p>',
  'from' => $email_from,
  'replyto' => $email_from,
  'fromname' => clean_string($name)
);

$request = $url_send.'api/mail.send.json';

 // Generate curl request
 $session = curl_init($request);

 // Tell curl to use HTTP POST
 curl_setopt ($session, CURLOPT_POST, true);

 // Tell curl that this is the body of the POST
 curl_setopt ($session, CURLOPT_POSTFIELDS, $params);

 // Tell curl not to return headers, but do return the response
 curl_setopt($session, CURLOPT_HEADER, false);
 curl_setopt($session, CURLOPT_RETURNTRANSFER, true);

 // obtain response
 $response = curl_exec($session);
 curl_close($session);

 error_log($response);

echo json_encode(array('Response' => 'Success'));
}
?>

