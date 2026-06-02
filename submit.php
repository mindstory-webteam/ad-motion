<?php

// BLOCK DIRECT ACCESS
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    die("Access denied.");
}

$errorMSG = "";

// SANITIZE FUNCTION
function clean_input($data) {
    return htmlspecialchars(strip_tags(trim($data)));
}

// FULL NAME
$name = clean_input($_POST["name"] ?? '');
if (empty($name)) {
    $errorMSG .= "Full Name is required. ";
}

// COMPANY
$company = clean_input($_POST["company"] ?? '');
if (empty($company)) {
    $errorMSG .= "Company is required. ";
}

// EMAIL
$email = clean_input($_POST["email"] ?? '');
if (empty($email)) {
    $errorMSG .= "Email is required. ";
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errorMSG .= "Enter a valid email address. ";
}

// PHONE
$phone = clean_input($_POST["phone"] ?? '');
if (empty($phone)) {
    $errorMSG .= "Phone is required. ";
}

// MESSAGE / GOALS
$message = clean_input($_POST["message"] ?? '');
if (empty($message)) {
    $errorMSG .= "Please enter your requirements. ";
}

// CONTINUE ONLY IF NO ERRORS
if ($errorMSG == "") {

    // DATE & TIME
    $datetime = date("d M Y, h:i A");

    // EMAIL SETTINGS
    $EmailTo = "janavalsan@mindstory.in"; // CHANGE THIS
    $subject = "New Consultation Request";

    // HTML EMAIL BODY
    $Body = '
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>New Consultation Request</title>
    </head>
    <body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,sans-serif;">

        <table width="100%" cellpadding="0" cellspacing="0" style="padding:30px 0;background:#f4f4f4;">
            <tr>
                <td align="center">

                    <table width="620" cellpadding="0" cellspacing="0"
                        style="background:#ffffff;border-radius:8px;overflow:hidden;">

                        <tr>
                            <td style="background:#992380;padding:24px 40px;">
                                <h2 style="margin:0;color:#fff;">
                                    New Consultation Request
                                </h2>
                                <p style="margin:8px 0 0;color:#e9c6e5;font-size:13px;">
                                    Submitted on '.$datetime.'
                                </p>
                            </td>
                        </tr>

                        <tr>
                            <td style="padding:30px;">

                                <table width="100%" cellpadding="0" cellspacing="0"
                                    style="border:1px solid #e5e5e5;border-collapse:collapse;">

                                    <tr>
                                        <td style="padding:14px;background:#f9f9f9;border:1px solid #e5e5e5;width:35%;">
                                            <strong>Full Name</strong>
                                        </td>
                                        <td style="padding:14px;border:1px solid #e5e5e5;">
                                            '.$name.'
                                        </td>
                                    </tr>

                                    <tr>
                                        <td style="padding:14px;background:#f9f9f9;border:1px solid #e5e5e5;">
                                            <strong>Company</strong>
                                        </td>
                                        <td style="padding:14px;border:1px solid #e5e5e5;">
                                            '.$company.'
                                        </td>
                                    </tr>

                                    <tr>
                                        <td style="padding:14px;background:#f9f9f9;border:1px solid #e5e5e5;">
                                            <strong>Email</strong>
                                        </td>
                                        <td style="padding:14px;border:1px solid #e5e5e5;">
                                            <a href="mailto:'.$email.'">'.$email.'</a>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td style="padding:14px;background:#f9f9f9;border:1px solid #e5e5e5;">
                                            <strong>Phone</strong>
                                        </td>
                                        <td style="padding:14px;border:1px solid #e5e5e5;">
                                            '.$phone.'
                                        </td>
                                    </tr>

                                    <tr>
                                        <td style="padding:14px;background:#f9f9f9;border:1px solid #e5e5e5;vertical-align:top;">
                                            <strong>Goals / Requirements</strong>
                                        </td>
                                        <td style="padding:14px;border:1px solid #e5e5e5;">
                                            '.nl2br($message).'
                                        </td>
                                    </tr>

                                </table>

                            </td>
                        </tr>

                        <tr>
                            <td style="background:#f8f8f8;padding:20px;text-align:center;">
                                <p style="margin:0;color:#888;font-size:12px;">
                                    This is an automated message from your website contact form.
                                </p>
                            </td>
                        </tr>

                    </table>

                </td>
            </tr>
        </table>

    </body>
    </html>';

    // EMAIL HEADERS
    $headers  = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8\r\n";
    $headers .= "From: Website Enquiry <noreply@" . $_SERVER['SERVER_NAME'] . ">\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($EmailTo, $subject, $Body, $headers)) {
        echo "success";
    } else {
        echo "Unable to send email. Please try again later.";
    }

} else {
    echo $errorMSG;
}

?>