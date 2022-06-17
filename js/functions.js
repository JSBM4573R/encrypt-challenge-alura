const btnEncriptar = document.querySelector('.btn-encrypt');
const btnDesencriptar = document.querySelector('.btn-decrypt');
var textoArea = document.querySelector('#encrypt');
const eventInformation = document.querySelector('.event-information');
const onloadInformation = document.querySelector('.onload-information');
var textEncryptDecrypt = document.querySelector('#text-encrypt-decrypt');
const btnCopy = document.querySelector('.btn-copy');

var arrayTextoEncriptado = [];
var capturaTexto = "";

btnEncriptar.addEventListener('click', function (e) {
    capturaTexto = textoArea.value.split('');
    console.log(capturaTexto);
    encrypt(capturaTexto);
    console.log(arrayTextoEncriptado.join(''));
    textEncryptDecrypt.innerHTML = arrayTextoEncriptado.join('');
    eventInformation.classList.remove('hide');
    onloadInformation.classList.add('hide');
    textoArea.value = '';
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

window.onload = function(){
    eventInformation.classList.add('hide');
};

btnCopy.addEventListener('click', function() {
   var inputFalso = document.createElement('input');
   inputFalso.setAttribute('value', textEncryptDecrypt.innerHTML)
   document.body.appendChild(inputFalso);
   inputFalso.select();
   document.execCommand('copy');
   document.body.removeChild(inputFalso);
   alert("Copiado en el portapales!");
});
