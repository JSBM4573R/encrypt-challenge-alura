const btnEncriptar = document.querySelector('.btn-encrypt');
const btnDesencriptar = document.querySelector('.btn-decrypt');
var textoArea = document.querySelector('#encrypt');
const eventInformation = document.querySelector('.event-information');
const onloadInformation = document.querySelector('.onload-information');
var textEncryptDecrypt = document.querySelector('#text-encrypt-decrypt');
const btnCopy = document.querySelector('.btn-copy');

/**
 * Funcion anonima que agrega la clase "hide" al cargar la pagina.
 */
window.onload = function () {
  eventInformation.classList.add('hide');
};

var capturaTextoArea = "";


btnCopy.addEventListener('click', function () {
  var inputFalso = document.createElement('input');
  inputFalso.setAttribute('value', textEncryptDecrypt.innerHTML)
  document.body.appendChild(inputFalso);
  inputFalso.select();
  document.execCommand('copy');
  document.body.removeChild(inputFalso);
  showMessageSuccess('¡Copiado!');
});



/**
 * Metodo que valida si existen vocales.
 * @param {capturaTextoArea} texto 
 * @returns true si existen vocales.
 */
function validarExistenciaVocales(texto) {
  return /[aeiou]/gm.test(texto)
}

function encriptar(texto) {
  const vocales = ['ai','enter','imes','ober','ufat'];
  const patronesRegExp = [/a/gm,/e/gm,/i/gm,/o/gm,/u/gm];
  for (let i = 0; i < vocales.length; i++) {
    texto = texto.replace(patronesRegExp[i], vocales[i]);
  }
  return texto;
}

function desencriptar(texto) {
  const vocales = ['a','e','i','o','u'];
  const patronesRegExp = [/(ai)/gm,/(enter)/gm,/(imes)/gm,/(ober)/gm,/(ufat)/gm];
  for (let i = 0; i < vocales.length; i++) {
    texto = texto.replace(patronesRegExp[i], vocales[i]);
  }
  return texto;
}



/**
 * Metodo que ejecuta un alert al usuario cuando ingresa un texto que 
 * impide realizar la descencriptacion.
 */
 function errorTextoDesencriptar() {
  showMessageWarning('Tienes un error en el texto o la alguna vocal se encuentra consecutiva' +
  ' e impide un correcto desencriptado. Porfavor verifica e intenta nuevamente.');
}

/**
 * Metodo que valida si existen acentos o letras capitalizadas.
 * @param {capturaTextoArea} texto 
 * @returns true si encuentra acentos o mayusculas o numeros.
 */
function validarTexto(texto) {
  return /[A-Z\u00C0-\u017F\d]/gm.test(texto);
}