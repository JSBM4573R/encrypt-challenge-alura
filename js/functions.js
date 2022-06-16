const btnEncriptar = document.querySelector('.btn-encrypt');
const btnDesencriptar = document.querySelector('.btn-decrypt');
var textoArea = document.querySelector('#encrypt');

var arrayTextoEncriptado = [];
var capturaTexto = "";

btnEncriptar.addEventListener('click', function (e) {
    e.preventDefault();
    capturaTexto = textoArea.value.split('');
    console.log(capturaTexto);
    encrypt(capturaTexto);
    console.log(arrayTextoEncriptado.join(''))
});

function encrypt(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == 'e') {
            arrayTextoEncriptado.push('enter')
        } else if (array[i] == 'i') {
            arrayTextoEncriptado.push('imes')
        } else if (array[i] == 'a') {
            arrayTextoEncriptado.push('ai')
        } else if (array[i] == 'o') {
            arrayTextoEncriptado.push('ober')
        } else if (array[i] == 'u') {
            arrayTextoEncriptado.push('ufat')
        } else {
            arrayTextoEncriptado.push(array[i]);
        }
    }
}