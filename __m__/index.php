<?php

$title = $_GET['t'];
$referer = $_GET['r'];

$_SERVER["HTTP_REFERER"] = $referer;

define("_BBC_PAGE_NAME", urldecode($title));
define("_BBCLONE_DIR", "/var/www/web247/html/stats/");
define("COUNTER", _BBCLONE_DIR . "mark_page.php");
if (is_readable(COUNTER)) {
    include_once COUNTER;
}

header('Content-Type: image/jpeg');
$im = imagecreatetruecolor(1, 1);
imagejpeg($im);
imagedestroy($im);

php?>
