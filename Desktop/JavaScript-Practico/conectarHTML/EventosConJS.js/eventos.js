//ESTOS SON METODOS PARA EJECUTAR EL CODIGO EN HTML
const h1 = document.querySelector('h1');

const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btncalcular');
const pResult = document.querySelector('#resultado');

//function btnOnClick() {
    //console.log('Dio click de nuevo')

//}
//ESTO NOS SIRVE PARA CONCATENAR YA INTERACTUANDO DESDE LA PAGINA CON LA CONSOLA
function btnOnClick() {
    const sumaInputs = number(input1.value) + number(input2.value);
    pResult.innerText = 'Resultado:' + sumaInputs;
}