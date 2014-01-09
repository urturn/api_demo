<?php 
$filename = 'layout.html';

$somecontent = file_get_contents('./ad.html');

$somecontent = str_replace('[[QUERY]]', urldecode($_GET['q']), $somecontent);

$somecontent = str_replace('[[ITUNES]]', urldecode($_GET['l']), $somecontent);

$somecontent = str_replace('[[IMAGE]]', urldecode($_GET['b']), $somecontent);

!$handle = fopen($filename, 'w');
fwrite($handle, $somecontent);
fclose($handle);


header("Cache-Control: public");
header("Content-Description: File Transfer");
header("Content-Length: ". filesize("$filename").";");
header("Content-Disposition: attachment; filename=$filename");
header("Content-Type: application/octet-stream; "); 
header("Content-Transfer-Encoding: binary");

readfile($filename);
?>

