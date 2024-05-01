// Script para interacciones con botones y mapa

$(document).ready(function(){
    $("#btnVerImagenes").click(function(){
        $("#seccionImagenes").toggle();
    });
    
    $("#btnEnviarMensaje").click(function(){
        $("#formularioMensaje").toggle();
    });

    $("#formMensaje").submit(function(event) {
        var nombre = $("#nombre").val();
        var mensaje = $("#mensaje").val();
        alert("Mensaje enviado correctamente. Gracias por tu mensaje, " + nombre + "!");
        $("#nombre").val("");
        $("#mensaje").val("");
        $("#formularioMensaje").hide();
    });

    $("#btnInicio").click(function(){
        alert("Has hecho clic en Inicio.");
    });

    $("#btnImagenes").click(function(){
        alert("Has hecho clic en Imágenes.");
    });

    $("#btnContacto").click(function(){
        alert("Has hecho clic en Contacto.");
    });
    $(".btn-comprar").click(function() {
        var producto = $(this).closest(".card-body").find(".card-title").text();
        alert("Has comprado el producto: " + producto);
    });
});

