
function mostrar_alert() {

// obtener valores de los inputs
console.log(document.getElementById("nombre").value)
console.log(document.getElementById("email").value)
console.log(document.getElementById("password").value)
console.log(document.getElementById("fecha").value)

// mensaje confirmación con un alert
alert("Registro exitoso!!!")

// limpiar los inputs
document.getElementById("nombre").value = ""
document.getElementById("email").value = ""
document.getElementById("password").value = ""
document.getElementById("fecha").value = ""

// mensaje de confirmación en el DOM
document.getElementById("mensaje").textContent ="Registro realizado correctamente." // modifica el contenido de la etiqueta
document.getElementById("mensaje").innerHTML ="<h3>Registro realizado correctamente.</h3>" // inyecta html en la etiqueta

}

