//ESTOS SON METODOS PARA EJECUTAR EL CODIGO EN HTML
const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btncalcular');
const pResult = document.querySelector('#resultado');

 form.addEventListener('submit', sumaInputValues);

 //ESTO NOS SIRVE PARA CONCATENAR YA INTERACTUANDO DESDE LA PAGINA CON LA CONSOLA
function sumaInputValues(event) {
    console.log({event});
    event.preventDefault();
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = 'Resultado: ' + sumaInputs;
}


