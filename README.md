# Ejercicio N°2 - Trabajo Práctico N°5
En este trabajo práctico realizamos diferentes ejercicios para aprender algunos conceptos básicos del lenguaje JavaScript.
Se resolvió haciendo uso de los conceptos aprendidos previamente en Trabajo Prácticos anteriores y se integraron nuevos conocimientos:
* DOM "Document Object Model"
    * `document.getElementByID`
    * ``
## Uso de GIT
Dado que es requerimiento del Trabajo Práctico hacer un repositorio por cada ejercicio, se creó una carpeta por cada ejercicio de Trabajo Práctico. Dentro de cada carpeta de ejercicio, se tomó la estructura básica de careptas y archivos de los Trabajos Prácticos anteriores y se realiza el commit inicial. Luego se creó una rama `dev` a partir de la rama `main`. Por cada funcionalidad requerida en el ejercicio se creó una rama `nombreFuncialidad` donde se trabajó la resolución de dicha funcionalidad y luego se unieron los cambios a la rama `dev`. Una vez finalizado el ejercicio y comprobado su funcionamiento, se unió la rama `dev` a la rama `main` para tener todos los cambios. 
## Ejercicios JavaScript
### Prácticas con DOM y BOM
-------------------
#### Generaciones

2- Crea una **clase** llamada `Persona` que siga las siguientes condiciones:
Sus propiedades son: 
* Nombre
* Edad
* DNI
* Sexo (H hombre, M mujer)
* Peso
* Altura 
* Año de nacimiento. 
* *Si quieres añadir alguna propiedad extra puedes hacerlo.*

Los **métodos** que se debe poder utilizar son:
* `mostrarGeneracion`: este método debe mostrar un mensaje **indicando a qué generación pertenece la persona creada** y **cual es el rasgo característico** de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:
    |Nombre de la Generación|Marco Temporal|Porblación de la Generaciones|Circunstancia histórica|Rasgo característico|
    |:---:|:---:|:---:|:---:|:---:|
    |Generación Z|1994-2010|7.800.000|Expansion masiva de internet|Irreverencia|
    |Generación Y|1981-1993|7.200.000|Inicio de la digiliación|Frustación|
    |Generación X|1969-1980|9.300.000|Crisis del 73 y transición española|Obsesión por el éxito|
    |Baby Boom|1949-1968|12.200.000|Paz y explosión demográfica|Ambición|
    |Silent Generation|1930-1948|6.300.000|Conflictos Bélicos|Austeridad|

* `esMayorDeEdad`: indica **si es mayor de edad**, devuelve un mensaje indicando que la persona es mayor de edad.
* `mostrarDatos`: devuelve **toda la información** del objeto.
Luego crea la **interfaz** necesaria para que el usuario pueda **crear un objeto persona**, permitiendo **ingresar las propiedades mediante un formulario**, también agregar los **botones “mostrar generación”**, **es “mayor de edad”** e **indicar en un alert el resultado** de la función correspondiente.

## Autor
[**César Luciano Angeleri**](https://www.linkedin.com/in/cesar-luciano-angeleri/)
## Tecnologías utilizadas
* HTML
* CSS
* **JavaScript**
*  GIT y GitHub
