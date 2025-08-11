document.addEventListener('DOMContentLoaded', function(){
    
    const miDiv = document.getElementById('miDiv');
    const boton = document.getElementById('saludar');

    miDiv.addEventListener('click', function() {
        alert("Hola! Soy el div");
    });

    boton.addEventListener('click', function(event){
        event.stopPropagation();
    });
});