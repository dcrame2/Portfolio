<?php
if($_POST["message"]) {
    mail("dcrame2@gmail.com", "Form to email message", $_POST["message"], "From: an@email.address");
}
?>