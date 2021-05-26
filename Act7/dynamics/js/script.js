$(document).ready(function() {
    $(".submitcarr").on("click", function(){
        let d= $(".carrera").val();
        let peti=$.post("./dynamics/php/Consultas.php", {busq:d});
        peti.done(function(res){
            $(".results").html(res);
        })
        peti.fail(function(res){
            alert("No se pudo");
        })
    });

    $(".filtmod").on("change", function(){
        let val= $(".filtmod").val();
        let peticion=$.ajax({
            url: "./dynamics/php/Consultas.php",
            data:{dato:val},
            method:"POST"
        });
        peticion.always(function(res){
            alert("Datos enviados");
        })
        peticion.done(function(res){
            $(".results").html(res);
        })
        peticion.fail(function(res){
            alert("No se pudo");
        })
    });
    
});
