//ESTOS SON METODOS PARA EJECUTAR EL CODIGO EN HTML
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafo = document.querySelector('.parrafo');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(input.value);

console.log({
    h1,
    p,
    parrafo,
    pid,
    input,
});
//FORMA DE ESCRIBIR EN HTML DESDE JAVASCRIPT
//CONVIERTE CODIGO HTML
h1.innerHTML = 'Computer <br> Feo';
h1.innerText//NoOS SIRVE PARA ESCRIBIR TEXTO DENTRO DE NUESTRO HTML
//ATRIBUTOS
//console.log(h1.getAttribute("class"));
//PARA MODIFICAR UNA CLASE EN EL HTML DE LA CONSOLA
//h1.setAttribute("class", "rojo");
//FROMA DE MODIFICAR DIRECTAMENTE LAS CLASES
h1.classList.add("rojo");//AGREGAR UNA CLASE
h1.classList.remove("verde");//SIRVE PARA ELIMINAR UNA CLASE

input.value = "567";
//NOS AYUDA A CREAR EL ELEMENTO HTML QUE QUERAMOS
//console.log(document.createElement("img"));
//CREAR UN ELEMENTO DIRECTAMENTE EN LA PAGINA
const img = document.createElement("img");
img.setAttribute('src', 'https://images.pexels.com/photos/1542495/pexels-photo-1542495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
console.log(img);//ESTO PARA INSERTAR LA ETIQUETA COMPLETA EN LA CONSOLA


pid.innerHTML = "";//PARA BORRAR EL TEXTO OCONTENIDO DE LA EQTIQUETA DEL HTML

pid.append(img);//ESTO SIRVE PARA INSERTAR LA IMAGEN EN LA ID DEL HTML