<?php
 
@$nombre = addslashes($_POST['nombre']);
@$email = addslashes($_POST['email']);
@$mensaje = addslashes($_POST['mensaje']);
 
//Preparamos el mensaje de contacto
$cabeceras = "From: $email\n" //La persona que envia el correo
 . "Reply-To: $email\n";
$asunto = "Mensaje desde la pagina Web"; //asunto aparecera en la bandeja del servidor de correo
$email_to = "r_romero@puntolab.net"; //cambiar por tu email
$contenido = "$nombre ha enviado un mensaje desde la web www.puntolab.net"
. "\n"
. "Nombre: $nombre\n"
. "Email: $email\n"
. "Mensaje: $mensaje\n"
. "\n";
 
//Enviamos el mensaje y comprobamos el resultado
if (@mail($email_to, $asunto ,$contenido ,$cabeceras )) {
	
	$url="http://puntolab.net"; 
	
	echo "<script>alert('!Mensaje enviado correctamente!'); </script>";
	echo "<SCRIPT>window.location='$url';</SCRIPT>"; 
		
//Si el mensaje se envía muestra una confirmación
}else{
 
//Si el mensaje no se envía muestra el mensaje de error
die("Error: Su información no pudo ser enviada, intente más tarde");
}
?>