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


btnEncriptar.addEventListener('click', function(){
  capturaTextoArea = textoArea.value;
  if(capturaTextoArea.length==0){
    showMessageWarning('Porfavor ingresa el texto a encriptar')
  }else{
    mostrarEncriptacion();
  }
});

/**
 * Metodo que muestra el texto encriptado.
 */
function mostrarEncriptacion() {
  capturaTextoArea = textoArea.value;
  textEncryptDecrypt.innerHTML = encriptar(capturaTextoArea);
  eventInformation.classList.remove('hide');
  onloadInformation.classList.add('hide');
  textoArea.value = ''; 
  showMessageSuccess('Texto encriptado correctamente!');
}

/**
 * Metodo que encripta las vocales "a", "e", "i", "o", "u" encontradas 
 * en el texto ingresado por "ai", "enter", "imes", "ober", "ufat".
 * @param {capturaTextoArea} texto ingresado por el usuario.
 * @returns textoEncriptado
 */
function encriptar(texto) {
  var texto = texto.split('');
  var textoEncriptado = [];
  for (let i = 0; i < texto.length; i++) {
    if (texto[i] == 'e') {
      textoEncriptado.push('enter')
    } else if (texto[i] == 'i') {
      textoEncriptado.push('imes')
    } else if (texto[i] == 'a') {
      textoEncriptado.push('ai')
    } else if (texto[i] == 'o') {
      textoEncriptado.push('ober')
    } else if (texto[i] == 'u') {
      textoEncriptado.push('ufat')
    } else {
      textoEncriptado.push(texto[i]);
    }
  }
  return textoEncriptado.join('');
}


btnDesencriptar.addEventListener('click', function(){
  capturaTextoArea = textoArea.value;
  if(capturaTextoArea.length==0){
    showMessageWarning('Porfavor ingresa el texto a desencriptar')
  }else{
    mostrarDesencriptacion();
  }
});

/**
 * Metodo que muestra el texto desencriptado.
 */
function mostrarDesencriptacion() {
  textEncryptDecrypt.innerHTML = desencriptar(capturaTextoArea);
  eventInformation.classList.remove('hide');
  onloadInformation.classList.add('hide');
  showMessageSuccess('Texto desencriptado correctamente!');
}

/**
 * Metodo que desencripta el texto ingresado por el usuario.
 * @param {capturaTextoArea} texto encriptado por el usuario.
 * @returns texto desencriptado
 */
function desencriptar(texto) {
  const vocales = ['a','e','i','o','u'];
  const patronesRegExp = [/(ai)/gm,/(enter)/gm,/(imes)/gm,/(ober)/gm,/(ufat)/gm];
  for (let i = 0; i < vocales.length; i++) {
    texto = texto.replace(patronesRegExp[i], vocales[i]);
  }
  return texto;
}

/**
 * Metodo que valida si existen acentos, letras capitalizadas o números.
 * @param {capturaTextoArea} texto 
 * @returns true si encuentra acentos o mayusculas o numeros.
 */
function validarTexto(texto) {
  return /[A-Z\u00C0-\u017F\d]/gm.test(texto);
}

/**
 * Metodo que valida si existen vocales.
 * @param {capturaTextoArea} texto 
 * @returns true si existen vocales.
 */
 function validarExistenciaVocales(texto) {
  return /[aeiou]/gm.test(texto)
}