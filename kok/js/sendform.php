<?php
//Сбор данных из полей формы.  Берём данные из input c атрибутом name="...."
$name = $_POST['name'];
$phone = $_POST['phone'];
// $form_name = $_POST['name'];
// $token = "5032955667:AAFKnv1kRVSZpXzGeMQVqk6X-lUV0ut3C08";
$token = "5063623396:AAF7TYxtBSRqqB4bKUAOauvd-G-CW6AvhWo"; // Тут пишем токен
// $chat_id = "-722948997";
$chat_id = "-630527965"; // Тут пишем ID группы, куда будут отправляться сообщения
 //Указываем название сайта $sitename = "belecky.online";

$arr = array(
  'Имя: ' => $name,
  'Телефон: ' => $phone
  // 'Запрос с формы: ' => $form_name,
  //'Модель сотрудничества: ' => $model,
  //'Описание модели: ' => $model_descr
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

?>