let btnCrear = document.getElementById("btnCrear")
let btnBorrar = document.getElementById("btnBorrar")
let btnGeneracion = document.getElementById("btnGeneracion")
let btnDatos = document.getElementById("btnDatos")
let formCreacion = document.querySelector("form")

btnCrear.addEventListener("click",mostrarFormCreacion)
btnCrear.addEventListener("click",borrarPersona)
btnGeneracion.addEventListener("click",mostrarGeneracion)
btnDatos.addEventListener("click",mostrarDatos)
formCreacion.addEventListener("submit",enviarForm)

function mostrarFormCreacion(){
    let contenedorCreacion = document.getElementById("contenedorCreacion")
    contenedorCreacion.classList.remove("d-none")
    btnCrear.classList.add("d-none")
}
function enviarForm(e) {
    e.preventDefault();
    btnGeneracion.classList.remove("d-none")
    btnDatos.classList.remove("d-none")
    btnBorrar.classList.remove("d-none")
    formCreacion.reset();
}

function mostrarGeneracion() {
    
}
function mostrarDatos() {
    
}
function borrarPersona(){

}