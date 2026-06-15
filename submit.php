<?php

error_reporting(E_ALL);
ini_set('display_errors', 0);
ini_set('log_errors', 1);

// Start output buffer so that any stray PHP warnings/notices
// do NOT corrupt the JSON response (they cause response.json() to throw
// on the client side, showing "Something went wrong").
ob_start();

// Helper: discard buffered output, then send clean JSON.
function send_json(array $payload): void {
    ob_end_clean();
    header('Content-Type: application/json');
    echo json_encode($payload);
    exit();
}


if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    send_json(["status" => "error", "message" => "Invalid request."]);
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

$enquiry_type = clean_input($_POST["enquiry_type"] ?? "general");
$district_name = clean_input($_POST["district_name"] ?? "");
$route_name = clean_input($_POST["route_name"] ?? "");
$bus_name = clean_input($_POST["bus_name"] ?? "");
$bus_reg = clean_input($_POST["bus_reg"] ?? "");

if (empty($name)) {
    send_json(["status" => "error", "message" => "Please enter your name."]);
}

if (empty($company)) {
    send_json(["status" => "error", "message" => "Please enter company name."]);
}

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    send_json(["status" => "error", "message" => "Please enter a valid email address."]);
}

if (empty($phone)) {
    send_json(["status" => "error", "message" => "Please enter phone number."]);
}

if (empty($message)) {
    send_json(["status" => "error", "message" => "Please enter your requirements."]);
}

$EmailTo = "hello@admotionmedia.in";

$enquiry_type_label = "General Consultation";
$subject = "New AdMotion Consultation Request";
$enquiry_details_html = '';

if ($enquiry_type === 'route') {
    $enquiry_type_label = "Route Specific Enquiry";
    $subject = "New AdMotion Route Enquiry - " . $route_name . " ($district_name)";
    $enquiry_details_html = '
<tr>
<td style="
padding:14px 16px;
width:30%;
background:#F8FAFC;
font-size:14px;
font-weight:600;
color:#475569;
border-bottom:1px solid #E2E8F0;
border-right:1px solid #E2E8F0;">
District
</td>
<td style="
padding:14px 16px;
background:#FFFFFF;
font-size:14px;
color:#0F172A;
border-bottom:1px solid #E2E8F0;">
' . $district_name . '
</td>
</tr>
<tr>
<td style="
padding:14px 16px;
background:#F8FAFC;
font-size:14px;
font-weight:600;
color:#475569;
border-bottom:1px solid #E2E8F0;
border-right:1px solid #E2E8F0;">
Route Name
</td>
<td style="
padding:14px 16px;
background:#FFFFFF;
font-size:14px;
color:#0F172A;
border-bottom:1px solid #E2E8F0;">
' . $route_name . '
</td>
</tr>';
} elseif ($enquiry_type === 'bus') {
    $enquiry_type_label = "Bus Specific Enquiry";
    $subject = "New AdMotion Bus Enquiry - " . $bus_name . " ($bus_reg)";
    $enquiry_details_html = '
<tr>
<td style="
padding:14px 16px;
width:30%;
background:#F8FAFC;
font-size:14px;
font-weight:600;
color:#475569;
border-bottom:1px solid #E2E8F0;
border-right:1px solid #E2E8F0;">
District
</td>
<td style="
padding:14px 16px;
background:#FFFFFF;
font-size:14px;
color:#0F172A;
border-bottom:1px solid #E2E8F0;">
' . $district_name . '
</td>
</tr>
<tr>
<td style="
padding:14px 16px;
background:#F8FAFC;
font-size:14px;
font-weight:600;
color:#475569;
border-bottom:1px solid #E2E8F0;
border-right:1px solid #E2E8F0;">
Route Name
</td>
<td style="
padding:14px 16px;
background:#FFFFFF;
font-size:14px;
color:#0F172A;
border-bottom:1px solid #E2E8F0;">
' . $route_name . '
</td>
</tr>
<tr>
<td style="
padding:14px 16px;
background:#F8FAFC;
font-size:14px;
font-weight:600;
color:#475569;
border-bottom:1px solid #E2E8F0;
border-right:1px solid #E2E8F0;">
Bus Name
</td>
<td style="
padding:14px 16px;
background:#FFFFFF;
font-size:14px;
color:#0F172A;
border-bottom:1px solid #E2E8F0;">
' . $bus_name . '
</td>
</tr>
<tr>
<td style="
padding:14px 16px;
background:#F8FAFC;
font-size:14px;
font-weight:600;
color:#475569;
border-bottom:1px solid #E2E8F0;
border-right:1px solid #E2E8F0;">
Bus Registration
</td>
<td style="
padding:14px 16px;
background:#FFFFFF;
font-size:14px;
color:#0F172A;
border-bottom:1px solid #E2E8F0;">
' . $bus_reg . '
</td>
</tr>';
}

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
background:#F4F6F8;
font-family:-apple-system,BlinkMacSystemFont,\'Segoe UI\',Roboto,Helvetica,Arial,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" border="0">
<tr>
<td align="center">

<table width="600" cellpadding="0" cellspacing="0" border="0" style="
max-width:100%;
background:#FFFFFF;
border-radius:12px;
overflow:hidden;
border:1px solid #E2E8F0;">

<!-- HEADER -->
<tr>
<td style="
padding:35px 40px;
background:#0F172A;
color:#FFFFFF;
">
<p style="
margin:0 0 6px;
font-size:16px;
font-weight:700;
letter-spacing:0.5px;
color:#FFFFFF;">
New enquiry from website 
</p>
<p style="
margin:0;
font-size:13px;
color:#94A3B8;">
' . $datetime . '
</p>
</td>
</tr>

<!-- INTRO -->
<tr>
<td style="
padding:35px 40px 20px;
color:#1E293B;">
<h2 style="
margin:0 0 10px;
font-size:20px;
font-weight:700;
color:#0F172A;">
New Lead Received
</h2>
<p style="
margin:0;
font-size:15px;
line-height:1.6;
color:#475569;">
A visitor has submitted a consultation request through your website.
</p>
</td>
</tr>

<!-- DETAILS -->
<tr>
<td style="padding:0 40px 35px;">

<table width="100%" cellpadding="0" cellspacing="0" border="0" style="
border-collapse:collapse;
border:1px solid #E2E8F0;
border-radius:8px;
overflow:hidden;">

<tr>
<td style="
padding:14px 16px;
width:30%;
background:#F8FAFC;
font-size:14px;
font-weight:600;
color:#475569;
border-bottom:1px solid #E2E8F0;
border-right:1px solid #E2E8F0;">
Enquiry Type
</td>
<td style="
padding:14px 16px;
background:#FFFFFF;
font-size:14px;
color:#0F172A;
border-bottom:1px solid #E2E8F0;">
' .
    $enquiry_type_label .
    '
</td>
</tr>

' .
    $enquiry_details_html .
    '

<tr>
<td style="
padding:14px 16px;
width:30%;
background:#F8FAFC;
font-size:14px;
font-weight:600;
color:#475569;
border-bottom:1px solid #E2E8F0;
border-right:1px solid #E2E8F0;">
Full Name
</td>
<td style="
padding:14px 16px;
background:#FFFFFF;
font-size:14px;
color:#0F172A;
border-bottom:1px solid #E2E8F0;">
' .
    $name .
    '
</td>
</tr>

<tr>
<td style="
padding:14px 16px;
background:#F8FAFC;
font-size:14px;
font-weight:600;
color:#475569;
border-bottom:1px solid #E2E8F0;
border-right:1px solid #E2E8F0;">
Company
</td>
<td style="
padding:14px 16px;
background:#FFFFFF;
font-size:14px;
color:#0F172A;
border-bottom:1px solid #E2E8F0;">
' .
    $company .
    '
</td>
</tr>

<tr>
<td style="
padding:14px 16px;
background:#F8FAFC;
font-size:14px;
font-weight:600;
color:#475569;
border-bottom:1px solid #E2E8F0;
border-right:1px solid #E2E8F0;">
Email
</td>
<td style="
padding:14px 16px;
background:#FFFFFF;
font-size:14px;
color:#0F172A;
border-bottom:1px solid #E2E8F0;">
' .
    $email .
    '
</td>
</tr>

<tr>
<td style="
padding:14px 16px;
background:#F8FAFC;
font-size:14px;
font-weight:600;
color:#475569;
border-bottom:1px solid #E2E8F0;
border-right:1px solid #E2E8F0;">
Phone
</td>
<td style="
padding:14px 16px;
background:#FFFFFF;
font-size:14px;
color:#0F172A;
border-bottom:1px solid #E2E8F0;">
' .
    $phone .
    '
</td>
</tr>

<tr>
<td style="
padding:14px 16px;
background:#F8FAFC;
font-size:14px;
font-weight:600;
color:#475569;
vertical-align:top;
border-right:1px solid #E2E8F0;">
Requirements
</td>
<td style="
padding:14px 16px;
background:#FFFFFF;
font-size:14px;
color:#0F172A;
line-height:1.6;">
' .
    nl2br($message) .
    '
</td>
</tr>

</table>

</td>
</tr>

<!-- FOOTER -->
<tr>
<td style="
padding:25px;
background:#F8FAFC;
text-align:center;
border-top:1px solid #E2E8F0;">
<div style="
font-size:14px;
font-weight:700;
color:#0F172A;
letter-spacing:1px;
margin-bottom:4px;">
ADMOTION
</div>
<div style="
font-size:12px;
color:#64748B;">
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
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

$mailResult = mail($EmailTo, $subject, $Body, $headers);
$mailError  = error_get_last();

if ($mailResult) {
    send_json([
        "status"  => "success",
        "message" => "Thank you! Your request has been submitted successfully.",
    ]);
} else {
    // Log the error to server error log
    $errMsg = isset($mailError['message']) ? $mailError['message'] : 'Unknown mail() error';
    error_log("AdMotion mail() failed | To: $EmailTo | Subject: $subject | Error: $errMsg");

    send_json([
        "status"  => "error",
        "message" => "Unable to send email. Please try again later.",
        "debug"   => $errMsg,  // Remove this line in production after debugging
    ]);
}
?>

