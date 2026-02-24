  
  
console.log("Hola mundo")


// Siempre accedemos desde el document

document.getElementById("demo").innerHTML = "Modificando el título" // selección por id

console.log(document.getElementById("demo"))

console.log(document.getElementsByTagName("main"))

console.log(document.getElementsByClassName("parrafo"))

document.getElementsByClassName("parrafo")[2].innerHTML = "Modificando el párrafo"


document.getElementById("principal").style.color = "red"
document.getElementsByClassName("parrafo")[0].style.color = "blue"


// document.getElementById("principal").style.fontSize = "50px"

document.getElementById("demo").innerHTML = "Mensaje de despedida"

alert("Hola mundo desde la alerta")

