<?php

header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode([
        "status" => "error",
        "message" => "Invalid request.",
    ]);
    exit();
}

function clean_input($data)
{
    return htmlspecialchars(strip_tags(trim($data)));
}

$name = clean_input($_POST["name"] ?? "");
$company = clean_input($_POST["company"] ?? "");
$email = clean_input($_POST["email"] ?? "");
$phone = clean_input($_POST["phone"] ?? "");
$message = clean_input($_POST["message"] ?? "");

if (empty($name)) {
    echo json_encode([
        "status" => "error",
        "message" => "Please enter your name.",
    ]);
    exit();
}

if (empty($company)) {
    echo json_encode([
        "status" => "error",
        "message" => "Please enter company name.",
    ]);
    exit();
}

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode([
        "status" => "error",
        "message" => "Please enter a valid email address.",
    ]);
    exit();
}

if (empty($phone)) {
    echo json_encode([
        "status" => "error",
        "message" => "Please enter phone number.",
    ]);
    exit();
}

if (empty($message)) {
    echo json_encode([
        "status" => "error",
        "message" => "Please enter your requirements.",
    ]);
    exit();
}

$EmailTo = "janavalsan@mindstory.in";
$subject = "New AdMotion Consultation Request";

$datetime = date("d M Y, h:i A");

$Body = '
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>New AdMotion Enquiry</title>
</head>

<body style="margin:0;padding:20px 0;background:#0A1324;font-family:Arial,Helvetica,sans-serif;">

<table width="100%" border="0" cellspacing="0" cellpadding="0">
<tr>
<td align="center">

<table width="650" border="0" cellspacing="0" cellpadding="0" style="
background:#162033;
border:1px solid #2A3852;">

<!-- HEADER -->
<tr>
<td style="
background:#4CCFCF;
padding:30px;">

<h2 style="
margin:0;
color:#0A1324;
font-size:28px;
font-weight:bold;">
ADMOTION
</h2>

<p style="
margin:8px 0 0;
color:#17384A;
font-size:14px;">
New enquiry from website
</p>

<p style="
margin:5px 0 0;
color:#17384A;
font-size:12px;">
'.$datetime.'
</p>

</td>
</tr>

<!-- ACCENT -->
<tr>
<td height="4" style="background:#78D9FF;"></td>
</tr>

<!-- CONTENT -->
<tr>
<td style="padding:30px;">

<h3 style="
margin:0 0 15px;
color:#78D9FF;
font-size:22px;">
New Lead Received
</h3>

<p style="
margin:0 0 25px;
color:#B5C1D1;
font-size:14px;
line-height:24px;">
A visitor has submitted a consultation request through your website.
</p>

<table width="100%" border="0" cellspacing="0" cellpadding="0" style="border:1px solid #2A3852;">

<tr>
<td width="35%" style="
padding:14px;
background:#1A2538;
color:#78D9FF;
font-weight:bold;">
Full Name
</td>

<td style="
padding:14px;
background:#162033;
color:#F4F8FB;
border-bottom:1px solid #2A3852;">
'.$name.'
</td>
</tr>

<tr>
<td style="
padding:14px;
background:#1A2538;
color:#78D9FF;
font-weight:bold;">
Company
</td>

<td style="
padding:14px;
background:#162033;
color:#F4F8FB;
border-bottom:1px solid #2A3852;">
'.$company.'
</td>
</tr>

<tr>
<td style="
padding:14px;
background:#1A2538;
color:#78D9FF;
font-weight:bold;">
Email
</td>

<td style="
padding:14px;
background:#162033;
color:#F4F8FB;
border-bottom:1px solid #2A3852;">
'.$email.'
</td>
</tr>

<tr>
<td style="
padding:14px;
background:#1A2538;
color:#78D9FF;
font-weight:bold;">
Phone
</td>

<td style="
padding:14px;
background:#162033;
color:#F4F8FB;
border-bottom:1px solid #2A3852;">
'.$phone.'
</td>
</tr>

<tr>
<td style="
padding:14px;
background:#1A2538;
color:#78D9FF;
font-weight:bold;
vertical-align:top;">
Requirements
</td>

<td style="
padding:14px;
background:#162033;
color:#F4F8FB;
line-height:24px;">
'.nl2br($message).'
</td>
</tr>

</table>

</td>
</tr>

<!-- BUTTON -->
<tr>
<td style="padding:0 30px 30px;">

<table border="0" cellspacing="0" cellpadding="0">
<tr>
<td style="
background:#4CCFCF;
padding:12px 22px;">

<a href="mailto:'.$email.'" style="
color:#0A1324;
font-weight:bold;
font-size:14px;
text-decoration:none;">
Reply to Client
</a>

</td>
</tr>
</table>

</td>
</tr>

<!-- FOOTER -->
<tr>
<td style="
background:#0F182A;
padding:25px;
text-align:center;
border-top:1px solid #2A3852;">

<div style="
font-size:16px;
font-weight:bold;
color:#78D9FF;">
ADMOTION
</div>

<div style="
margin-top:8px;
font-size:12px;
line-height:20px;
color:#B5C1D1;">
Generated automatically from the website enquiry form.
</div>

</td>
</tr>

</table>

</td>
</tr>
</table>

</body>
</html>';


$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: AdMotion <info@yourdomain.com>\r\n";
$headers .= "Reply-To: " . $email . "\r\n";

if (mail($EmailTo, $subject, $Body, $headers)) {
    echo json_encode([
        "status" => "success",
        "message" => "Thank you! Your request has been submitted successfully.",
    ]);
} else {
    echo json_encode([
        "status" => "error",
        "message" => "Unable to send email. Please try again later.",
    ]);
}
?>

