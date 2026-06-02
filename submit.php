<?php

header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode([
        "status" => "error",
        "message" => "Invalid request."
    ]);
    exit;
}

function clean_input($data)
{
    return htmlspecialchars(strip_tags(trim($data)));
}

$name    = clean_input($_POST['name'] ?? '');
$company = clean_input($_POST['company'] ?? '');
$email   = clean_input($_POST['email'] ?? '');
$phone   = clean_input($_POST['phone'] ?? '');
$message = clean_input($_POST['message'] ?? '');

if (empty($name)) {
    echo json_encode(["status"=>"error","message"=>"Please enter your name."]);
    exit;
}

if (empty($company)) {
    echo json_encode(["status"=>"error","message"=>"Please enter company name."]);
    exit;
}

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["status"=>"error","message"=>"Please enter a valid email address."]);
    exit;
}

if (empty($phone)) {
    echo json_encode(["status"=>"error","message"=>"Please enter phone number."]);
    exit;
}

if (empty($message)) {
    echo json_encode(["status"=>"error","message"=>"Please enter your requirements."]);
    exit;
}

$EmailTo = "janavalsan@mindstory.in";
$subject = "New AdMotion Consultation Request";

$datetime = date("d M Y, h:i A");

$Body = '
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>New Consultation Request</title>
</head>

<body style="margin:0;padding:40px;background:#130914;font-family:Arial,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0">
<tr>
<td align="center">

<table width="650" cellpadding="0" cellspacing="0"
style="background:#ffffff;border-radius:24px;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,.2);">

<tr>
<td style="padding:40px;background:linear-gradient(135deg,#992380 0%,#7a1d68 50%,#4d133f 100%);">

<h1 style="margin:0;color:#fff;font-size:28px;">
AdMotion
</h1>

<p style="margin:10px 0 0;color:#f3d3ee;font-size:14px;">
New Consultation Request
</p>

<p style="margin:8px 0 0;color:#ffffff;font-size:13px;">
'.$datetime.'
</p>

</td>
</tr>

<tr>
<td style="padding:35px;">

<table width="100%" cellpadding="0" cellspacing="0"
style="border-collapse:collapse;">

<tr>
<td style="padding:16px;background:#f7f0f6;width:35%;font-weight:600;">
Full Name
</td>
<td style="padding:16px;border-bottom:1px solid #eee;">
'.$name.'
</td>
</tr>

<tr>
<td style="padding:16px;background:#f7f0f6;font-weight:600;">
Company
</td>
<td style="padding:16px;border-bottom:1px solid #eee;">
'.$company.'
</td>
</tr>

<tr>
<td style="padding:16px;background:#f7f0f6;font-weight:600;">
Email
</td>
<td style="padding:16px;border-bottom:1px solid #eee;">
'.$email.'
</td>
</tr>

<tr>
<td style="padding:16px;background:#f7f0f6;font-weight:600;">
Phone
</td>
<td style="padding:16px;border-bottom:1px solid #eee;">
'.$phone.'
</td>
</tr>

<tr>
<td style="padding:16px;background:#f7f0f6;font-weight:600;vertical-align:top;">
Requirements
</td>
<td style="padding:16px;">
'.nl2br($message).'
</td>
</tr>

</table>

</td>
</tr>

<tr>
<td style="padding:20px;background:#fafafa;text-align:center;color:#888;font-size:12px;">
Generated from the AdMotion website enquiry form.
</td>
</tr>

</table>

</td>
</tr>
</table>

</body>
</html>';

$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: AdMotion <info@yourdomain.com>\r\n";
$headers .= "Reply-To: ".$email."\r\n";

if(mail($EmailTo, $subject, $Body, $headers)){

    echo json_encode([
        "status" => "success",
        "message" => "Thank you! Your consultation request has been submitted successfully."
    ]);

} else {

    echo json_encode([
        "status" => "error",
        "message" => "Unable to send email. Please try again later."
    ]);

}
?>
