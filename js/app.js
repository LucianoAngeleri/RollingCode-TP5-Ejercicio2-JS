let btnCrear = document.getElementById("btnCrear")
let btnGeneracion = document.getElementById("btnGeneracion")
let btnDatos = document.getElementById("btnDatos")
let formCreacion = document.querySelector("form")

btnCrear.addEventListener("click",mostrarFormCreacion)
btnGeneracion.addEventListener("click",mostrarGeneracion)
btnDatos.addEventListener("click",mostrarDatos)

function mostrarFormCreacion(){
    let contenedorCreacion = document.getElementById("contenedorCreacion")
    contenedorCreacion.classList.remove("d-none")
    btnGeneracion.classList.remove("d-none")
    btnDatos.classList.remove("d-none")
    btnCrear.classList.add("d-none")
}

function mostrarGeneracion() {
    
}
function mostrarDatos() {
    
}
