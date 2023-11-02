
function validar(){
    var nombre, telefono, correo;
    nombre = document.getElementById("nombre").value;
    nombre = document.getElementById("telefono").value;
    nombre = document.getElementById("correo").value;
    nombre = document.getElementById("asunto").value;
    nombre = document.getElementById("mensaje").value;

    
    if(nombre === "" || telefono ==="" || correo ==="" || asunto ==="" || mensaje ===""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    
}

