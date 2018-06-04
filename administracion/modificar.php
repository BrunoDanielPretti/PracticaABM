<?php
    require_once "../clases/personas.php";

    $nombre = $_POST["nombre"];
    $apellido = $_POST["apellido"];
    $numero = $_POST["numero"];
    $parametro = $_POST["param"];
    
    $persona = new Persona($nombre,$apellido,$numero);
    $persona->ModificarPorNombre($parametro);

?>