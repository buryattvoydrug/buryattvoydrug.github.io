<?php
$name = trim($_POST['name']);
$email = trim($_POST['e-mail']);
$message = trim($_POST['message']);

// указываем адрес отправителя, можно указать адрес на домене Вашего сайта
$fromMail = 'igor.radimov666@gmail.com';
$fromName = 'clemo.ru';

// Сюда введите Ваш email
$emailTo = 'buryattvoydrug@gmail.com';
$subject = 'Форма обратной связи на php';
$subject = '=?utf-8?b?'. base64_encode($subject) .'?=';
$headers = "Content-type: text/plain; charset=\"utf-8\"\r\n";
$headers .= "From: ". $fromName ." <". $fromMail ."> \r\n";

// тело письма
$body = "Получено письмо с сайта clemo.ru \n Имя: $name\n e-mail: $email\message: $message\n";
$mail = mail($emailTo, $subject, $body, $headers, '-f'. $fromMail );
 echo "Ваше сообщение успешно отправлено!<Br> Вы получите ответ в
      ближайшее время<Br> $back";
?>
