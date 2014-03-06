<?php
  
  function base64_to_jpeg($base64_string, $output_file) {
    $ifp = fopen($output_file, "wb"); 

    $data = explode(',', $base64_string);

    fwrite($ifp, base64_decode($data[1])); 
    fclose($ifp); 

    return $output_file; 
  }

  base64_to_jpeg($_POST['url'], './img/' . md5($_POST['url']) . '.jpg');
  echo md5($_POST['url']) .'.jpg';
?>