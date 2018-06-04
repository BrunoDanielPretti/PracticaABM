function prueba(p){
    alert(p);
}

function borrar(p){     
        $.ajax({
            url: "administracion/borrarPorNombre.php",
            type: "POST",
            data: {
                nombre: p
            }
        })
        .done(function(datos){
            $("#salida").html(datos);
        })
        .fail(function(datos){
            alert("MAL");
        });//no olvidar el ; despues al final del ajax
}

function modificar(p){
    var datosEnviar = {
            nombre: $("#txtNombre").val(),
            apellido: $("#txtApellido").val(),
            numero: $("#txtNumero").val(),
            param: p
        }

        $.ajax({
            url: "administracion/modificar.php",
            type: "POST",
            data: datosEnviar
        })
}