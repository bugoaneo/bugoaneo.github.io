<?php

/* https://api.telegram.org/bot5063623396:AAF7TYxtBSRqqB4bKUAOauvd-G-CW6AvhWo/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['name'];
$phone = $_POST['phone'];
// $email = $_POST['user_email'];
$token = "5063623396:AAF7TYxtBSRqqB4bKUAOauvd-G-CW6AvhWo";
$chat_id = "-630527965";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone
  // 'Email' => $email
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thank-you.html');
} else {
  echo "Error";
}
?>