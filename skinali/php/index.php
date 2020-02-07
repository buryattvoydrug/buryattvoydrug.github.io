<?php
$glass_type = trim($_POST['glass_type']);
$width = trim($_POST['width']);
$height = trim($_POST['height']);
$montage = trim($_POST['montage']);
$delivery = trim($_POST['delivery']);
$name = trim($_POST['name']);
$phone = trim($_POST['phone']);

// указываем адрес отправителя, можно указать адрес на домене Вашего сайта
$fromMail = 'igor.radimov666@gmail.com';
$fromName = 'cooper.ru';

// Сюда введите Ваш email
$emailTo = 'buryattvoydrug@gmail.com';
$subject = 'Форма обратной связи на php';
$subject = '=?utf-8?b?'. base64_encode($subject) .'?=';
$headers = "Content-type: text/plain; charset=\"utf-8\"\r\n";
$headers .= "From: ". $fromName ." <". $fromMail ."> \r\n";

// тело письма
$body = "Получено письмо с сайта testsite.ru \n Имя: $name\n E-mail: $email\nСообщение: $message\n $glass_type\n $width\n $height\n $montage\n $delivery\n";
$mail = mail($emailTo, $subject, $body, $headers, '-f'. $fromMail );
 echo "Ваше сообщение успешно отправлено!<Br> Вы получите ответ в
      ближайшее время<Br> $back";
?>
