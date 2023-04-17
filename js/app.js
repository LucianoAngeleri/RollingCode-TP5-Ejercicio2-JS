let btnCrear = document.getElementById("btnCrear")
let btnBorrar = document.getElementById("btnBorrar")
let btnGeneracion = document.getElementById("btnGeneracion")
let btnMayor = document.getElementById("btnMayor")
let contenedorCreacion = document.getElementById("contenedorCreacion")
let formCreacion = document.querySelector("form")



btnCrear.addEventListener("click", mostrarFormCreacion)
btnCrear.addEventListener("click", borrarPersona)
btnGeneracion.addEventListener("click", mostrarGeneracion)
btnMayor.addEventListener("click", mostrarMayorEdad)
formCreacion.addEventListener("submit", enviarForm)

let persona;

function mostrarFormCreacion() {
    contenedorCreacion.classList.remove("d-none")
    btnCrear.classList.add("d-none")
}
function enviarForm(e) {
    e.preventDefault();
    btnGeneracion.classList.remove("d-none")
    btnMayor.classList.remove("d-none")
    btnBorrar.classList.remove("d-none")

    let nombre = document.getElementById("inputNombre").value
    let edad = document.getElementById("inputEdad").value
    let dni = document.getElementById("inputDNI").value
    let sexo = document.getElementById("inputSexo").value
    let peso = document.getElementById("inputPeso").value
    let altura = document.getElementById("inputAltura").value
    let nacimiento = new Date(document.getElementById('inputNac').value);
    let anioNacimiento = nacimiento.getFullYear();

    let contenedorDatos = document.getElementById("contenedorDatos")

    persona = new Persona(nombre, edad, dni, sexo, peso, altura, anioNacimiento)

    contenedorCreacion.classList.add("d-none")
    formCreacion.reset();
    contenedorDatos.classList.remove("d-none")
    persona.mostrarDatos();

}

function mostrarGeneracion() {
    const alertaGeneracion = document.getElementById('alertaGeneracion')
    const contenedorAlerta = document.createElement('div')
    contenedorAlerta.innerHTML = [
        `<div class="alert alert-success alert-dismissible" role="alert">`,
        `   <div>${persona.mostrarGeneracion()}</div>`,
        '   <button tipo="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')
    alertaGeneracion.append(contenedorAlerta)
}
function mostrarMayorEdad() {

}
function borrarPersona() {
    delete Persona
}

//Clase Persona
class Persona {
    #nombre;
    #edad;
    #dni;
    #sexo;
    _peso;
    _altura;
    #anioNacimiento;
    constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento) {
        this.#nombre = nombre;
        this.#edad = edad;
        this.#dni = dni;
        this.#sexo = sexo;
        this._peso = peso;
        this._altura = altura;
        this.#anioNacimiento = anioNacimiento;
    }
    get nombre() {
        return this.#nombre;
    }
    set nombre(nuevoNombre) {
        if (nuevoNombre.length > 0) {
            this.#nombre = nuevoNombre;
        }
    }
    get edad() {
        return this.#edad;
    }
    set edad(nuevaEdad) {
        if (nuevaEdad > 0 && !isNaN(nuevaEdad)) {
            this.#edad = nuevaEdad;
        }
    }
    get dni() {
        return this.#dni;
    }
    set dni(nuevoDni) {
        if (nuevoDni > 0 && !isNaN(nuevoDni)) {
            this.#dni = nuevoDni;
        }
    }
    get sexo() {
        return this.#sexo;
    }
    set sexo(nuevoSexo) {
        if (nuevoSexo === "H" && nuevoSexo === "M") {
            this.#sexo = nuevoSexo;
        }
    }
    get peso() {
        return this._peso;
    }
    set peso(nuevoPeso) {
        if (nuevoPeso > 0) {
            this._peso = nuevoPeso;
        }
    }
    get altura() {
        return this._altura;
    }
    set altura(nuevaAltura) {
        if (nuevaAltura > 0) {
            this._altura = nuevaAltura;
        }
    }
    get anioNacimiento() {
        return this.#anioNacimiento;
    }
    set anioNacimiento(nuevoAnioNacimiento) {
        if (nuevoAnioNacimiento > 0) {
            this.#anioNacimiento = nuevoAnioNacimiento;
        }
    }
    mostrarGeneracion() {
        if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) {
            return `${this.nombre} pertenece a la "Generación Z" cuyo rasgo es la "Irreverencia"`;
        } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
            return `${this.nombre} pertenece a la "Generación Y" cuyo rasgo es la "Frustración"`;
        } else if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
            return `${this.nombre} pertenece a la "Generación X" cuyo rasgo es la "Obsesión por el éxito"`;
        } else if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) {
            return `${this.nombre} pertenece a la "Baby Boom" cuyo rasgo es la "Ambición"`;
        } else if (this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948) {
            return `${this.nombre} pertenece a la "Silent Generation" cuyo rasgo es la "Austeridad"`;
        }
    }
    esMayorDeEdad() {
        return this.edad >= 18 ? `${this.nombre} es mayor de edad` : `${this.nombre} es menor de edad`;
    }

    mostrarDatos() {
        const datosPersona = document.createElement("ul")
        datosPersona.classList.add("list-group", "py-3", "fs-3", "shadow")

        const nombreItemLista = document.createElement("li")
        nombreItemLista.classList.add("list-group-item", "text-bg-dark", "border-warning")
        nombreItemLista.textContent = `Nombre: ${this.nombre}`
        datosPersona.appendChild(nombreItemLista)
        const edadItemLista = document.createElement("li")
        edadItemLista.classList.add("list-group-item", "text-bg-dark", "border-warning")
        edadItemLista.textContent = `Edad: ${this.edad} años`
        datosPersona.appendChild(edadItemLista)
        const dniItemLista = document.createElement("li")
        dniItemLista.classList.add("list-group-item", "text-bg-dark", "border-warning")
        dniItemLista.textContent = `DNI: ${this.dni}`
        datosPersona.appendChild(dniItemLista)
        const sexoItemLista = document.createElement("li")
        sexoItemLista.classList.add("list-group-item", "text-bg-dark", "border-warning")
        sexoItemLista.textContent = `Sexo: ${this.sexo === "H" ? "Hombre" : "Mujer"}`
        datosPersona.appendChild(sexoItemLista)
        const pesoItemLista = document.createElement("li")
        pesoItemLista.classList.add("list-group-item", "text-bg-dark", "border-warning")
        pesoItemLista.textContent = `Peso: ${this.peso} kilogramos`
        datosPersona.appendChild(pesoItemLista)
        const alturaItemLista = document.createElement("li")
        alturaItemLista.classList.add("list-group-item", "text-bg-dark", "border-warning")
        alturaItemLista.textContent = `Altura: ${this.altura} centímetros`
        datosPersona.appendChild(alturaItemLista)
        const nacimientoItemLista = document.createElement("li")
        nacimientoItemLista.classList.add("list-group-item", "text-bg-dark", "border-warning")
        nacimientoItemLista.textContent = `Año de nacimiento: ${this.anioNacimiento}`
        datosPersona.appendChild(nacimientoItemLista)
        contenedorDatos.appendChild(datosPersona)
    }
}