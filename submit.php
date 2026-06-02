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

$Body =
    '
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>AdMotion Lead</title>
</head>

<body style="
margin:0;
padding:40px 15px;
background:#0A1324;
font-family:Arial,Helvetica,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" border="0">
<tr>
<td align="center">

<table width="650" cellpadding="0" cellspacing="0" border="0" style="
max-width:650px;
background:#162033;
border-radius:24px;
overflow:hidden;
box-shadow:0 20px 60px rgba(0,0,0,.55);
border:1px solid rgba(255,255,255,.08);">

<!-- HEADER -->
<tr>
<td style="
padding:45px 40px;
background:linear-gradient(135deg,#78D9FF 0%,#4CCFCF 100%);
">

<p style="
margin:10px 0 0;
font-size:15px;
color:#17384A;">
New enquiry from website 
</p>

<p style="
margin:8px 0 0;
font-size:13px;
color:#17384A;">
' .
    $datetime .
    '
</p>

</td>
</tr>

<!-- GLOW BAR -->
<tr>
<td style="
height:4px;
background:linear-gradient(90deg,#78D9FF,#4CCFCF);
"></td>
</tr>

<!-- INTRO -->
<tr>
<td style="
padding:35px 40px 20px;
color:#F4F8FB;">

<h2 style="
margin:0 0 10px;
font-size:24px;
font-weight:700;
color:#78D9FF;">
🚀 New Lead Received
</h2>

<p style="
margin:0;
font-size:15px;
line-height:1.8;
color:#B5C1D1;">
A visitor has submitted a consultation request through your website.
</p>

</td>
</tr>

<!-- DETAILS -->
<tr>
<td style="padding:0 40px 35px;">

<table width="100%" cellpadding="0" cellspacing="0" border="0" style="
border-collapse:collapse;
overflow:hidden;
border-radius:16px;
border:1px solid rgba(255,255,255,.08);">

<tr>
<td style="
padding:16px;
width:35%;
background:#1A2538;
font-weight:700;
color:#78D9FF;">
Full Name
</td>

<td style="
padding:16px;
background:#162033;
color:#F4F8FB;
border-bottom:1px solid rgba(255,255,255,.08);">
' .
    $name .
    '
</td>
</tr>

<tr>
<td style="
padding:16px;
background:#1A2538;
font-weight:700;
color:#78D9FF;">
Company
</td>

<td style="
padding:16px;
background:#162033;
color:#F4F8FB;
border-bottom:1px solid rgba(255,255,255,.08);">
' .
    $company .
    '
</td>
</tr>

<tr>
<td style="
padding:16px;
background:#1A2538;
font-weight:700;
color:#78D9FF;">
Email
</td>

<td style="
padding:16px;
background:#162033;
color:#F4F8FB;
border-bottom:1px solid rgba(255,255,255,.08);">
' .
    $email .
    '
</td>
</tr>

<tr>
<td style="
padding:16px;
background:#1A2538;
font-weight:700;
color:#78D9FF;">
Phone
</td>

<td style="
padding:16px;
background:#162033;
color:#F4F8FB;
border-bottom:1px solid rgba(255,255,255,.08);">
' .
    $phone .
    '
</td>
</tr>

<tr>
<td style="
padding:16px;
background:#1A2538;
font-weight:700;
color:#78D9FF;
vertical-align:top;">
Requirements
</td>

<td style="
padding:16px;
background:#162033;
color:#F4F8FB;
line-height:1.8;">
' .
    nl2br($message) .
    '
</td>
</tr>

</table>

</td>
</tr>

<!-- CTA BUTTON -->
<tr>
<td style="padding:0 40px 35px;">

<a href="mailto:' .
    $email .
    '" style="
display:inline-block;
padding:14px 28px;
background:linear-gradient(135deg,#78D9FF,#4CCFCF);
color:#0A1324;
font-weight:700;
font-size:14px;
text-decoration:none;
border-radius:12px;">
Reply to Client
</a>

</td>
</tr>

<!-- FOOTER -->
<tr>
<td style="
padding:30px;
background:#0F182A;
text-align:center;
border-top:1px solid rgba(255,255,255,.08);">

<div style="
font-size:16px;
font-weight:700;
color:#78D9FF;
margin-bottom:8px;">
ADMOTION
</div>

<div style="
font-size:13px;
line-height:1.8;
color:#B5C1D1;">
<br>
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

