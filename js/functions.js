const btnEncriptar = document.querySelector('.btn-encrypt');
const btnDesencriptar = document.querySelector('.btn-decrypt');
var textoArea = document.querySelector('#encrypt');
const eventInformation = document.querySelector('.event-information');
const onloadInformation = document.querySelector('.onload-information');
var textEncryptDecrypt = document.querySelector('#text-encrypt-decrypt');
const btnCopy = document.querySelector('.btn-copy');

/**
 * function anonima que agrega la clase "hide" al cargar la pagina.
 */
window.onload = function () {
  eventInformation.classList.add('hide');
};


var arrayTextoEncriptado = [];
var arrayTextoDesencriptado = [];
var arrayTest = [];
var bandera = false;
var capturaTextoArea = "";

btnEncriptar.addEventListener('click', function (e) {
  capturaTextoArea = textoArea.value.split('');
  if (textEncryptDecrypt.textContent.length > 0 && capturaTextoArea.length > 0) {
    textoArea.innerHTML = '';
    textEncryptDecrypt.innerHTML = '';
    encrypt(capturaTextoArea);
    mostrarEncriptacion();
  } else {
    encrypt(capturaTextoArea);
    mostrarEncriptacion();
  }
});


/**
 * Metodo que encripta las vocales "a", "e", "i", "o", "u" encontradas 
 * en el texto ingresado por "ai", "enter", "imes", "ober", "ufat".
 * @param {capturaTextoArea} array Coleccion de caracteres alfabeticos de tipo string
 */
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

btnCopy.addEventListener('click', function () {
  var inputFalso = document.createElement('input');
  inputFalso.setAttribute('value', textEncryptDecrypt.innerHTML)
  document.body.appendChild(inputFalso);
  inputFalso.select();
  document.execCommand('copy');
  document.body.removeChild(inputFalso);
  alert("Text Copiado!");
});


/**
 * Metodo que muestra el texto encriptado,
 * remueve la clase "hide" a la clase eventInformation,
 * agrega la clase "hide" a la clase onloadInformation,
 * borra el arrayTextoDesencriptado y
 * limpia el textArea
 */
function mostrarEncriptacion() {
  textEncryptDecrypt.innerHTML = arrayTextoEncriptado.join('');
  eventInformation.classList.remove('hide');
  onloadInformation.classList.add('hide');
  arrayTextoEncriptado.length = 0;    //borra el array
  textoArea.value = '';   //limpia el textArea
}


/**
 * Metodo que muestra el texto desencriptado,
 * remueve la clase "hide" a la clase eventInformation,
 * agrega la clase "hide" a la clase onloadInformation,
 * borra el arrayTextoDesencriptado y
 * borra el array arrayTest
 */
function mostrarDesencriptacion() {
  textEncryptDecrypt.innerHTML = arrayTextoDesencriptado.join('');
  eventInformation.classList.remove('hide');
  onloadInformation.classList.add('hide');
  arrayTextoDesencriptado.length = 0;   //Borra el array
  arrayTest.length = 0;    //Borra el array
}

btnDesencriptar.addEventListener('click', function () {
  capturaTextoArea = textoArea.value.split('');
  desencriptar(capturaTextoArea);
  mostrarDesencriptacion();
});


/**
 * Metodo que valida si en el array se encuentra la palabra "ai".
 * Si la encuentra entonces, guarda en el arrayTextoDesencriptado
 * la vocal "a" para generar la desencriptacion del texto.
 * @param {capturaTextoArea} array Coleccion de caracteres alfabeticos de tipo String
 * @param {[i]} index Indice en donde se encontro la letra "a"
 */
function validarA(array, index) {
  for (let a = 0; a < array.length; a++) {
    if (array[index] == 'a'){
      arrayTest.push(array[index]);
    } else if (array[index] == 'i') {
      arrayTest.push(array[index]);
    }
    index ++;
    if(arrayTest.length == 2) {
      var validar = arrayTest.toString().split(',').join('')
      if (validar == 'ai') {
        arrayTextoDesencriptado.push('a');
        bandera = true;
        arrayTest.length = 0;   //Dejo limpio el arrayTest para un proximo test de validacion
        break;
      } else {
        continue;
      }
    } else {
      continue;
    }
  }
}


/**
 * Metodo que valida si en el array se encuentra la palabra "enter"
 * Si la encuentra entonces, guarda en el arrayTextoDesencriptado
 * la vocal "e" para generar la desencriptacion del texto.
 * @param {capturaTextoArea} array Coleccion de caracteres alfabeticos de tipo String
 * @param {[i]} index Indice en donde se encontro la letra "e"
 */
function validarE(array, index) {
  for (let e = 0; e < array.length; e++) {
    if (array[index] == 'e') {
      arrayTest.push(array[index])
    } else if (array[index] == 'n') {
      arrayTest.push(array[index])
    } else if (array[index] == 't') {
      arrayTest.push(array[index])
    } else if (array[index] == 'e') {
      arrayTest.push(array[index])
    } else if (array[index] == 'r') {
      arrayTest.push(array[index])
    }
    index++;
    if (arrayTest.length == 5) {
      var validar = arrayTest.toString().split(',').join('');
      if (validar == 'enter') {
        arrayTextoDesencriptado.push('e');
        bandera = true;
        arrayTest.length = 0;   //Dejo limpio el arrayTest para un proximo test de validacion
        break;
      } else {
        continue;
      }
    } else {
      continue;
    }
  }
}

/**
 * Metodo que valida si en el array se encuentra la palabra "imes".
 * Si la encuentra entonces, guarda en el arrayTextoDesencriptado
 * la vocal "i" para generar la desencriptacion del texto.
 * @param {capturaTextoArea} array Coleccion de caracteres alfabeticos de tipo String
 * @param {[i]} index Indice en donde se encontro la letra "i"
 */
function validarI(array, index) {
  for (let i = 0; i < array.length; i++) {
    if (array[index] == 'i') {
      arrayTest.push(array[index])
    } else if (array[index] == 'm') {
      arrayTest.push(array[index])
    } else if (array[index] == 'e') {
      arrayTest.push(array[index])
    } else if (array[index] == 's') {
      arrayTest.push(array[index])
    }
    index++;
    if (arrayTest.length == 4) {
      var validar = arrayTest.toString().split(',').join('');
      if (validar == 'imes') {
        arrayTextoDesencriptado.push('i');
        bandera = true;
        arrayTest.length = 0;   //Dejo limpio el arrayTest para un proximo test de validacion
        break;
      } else {
        continue;
      }
    } else {
      continue;
    }
  }
}


/**
 * Metodo que valida si en el array se encuentra la palabra "ober".
 * Si la encuentra entonces, guarda en el arrayTextoDesencriptado
 * la vocal "o" para generar la desencriptacion del texto.
 * @param {capturaTextoArea} array Coleccion de caracteres alfabeticos de tipo String
 * @param {[i]} index Indice en donde se encontro la letra "o"
 */
function validarO(array, index) {
  for (let i = 0; i < array.length; i++) {
    if (array[index] == 'o') {
      arrayTest.push(array[index])
    } else if (array[index] == 'b') {
      arrayTest.push(array[index])
    } else if (array[index] == 'e') {
      arrayTest.push(array[index])
    } else if (array[index] == 'r') {
      arrayTest.push(array[index])
    }
    index++;
    if (arrayTest.length == 4) {
      var validar = arrayTest.toString().split(',').join('');
      if (validar == 'ober') {
        arrayTextoDesencriptado.push('o');
        bandera = true;
        arrayTest.length = 0;   //Dejo limpio el arrayTest para un proximo test de validacion
        break;
      } else {
        continue;
      }
    } else {
      continue;
    }
  }
}


function validarU(array, index) {
  for (let u = 0; u < array.length; u++) {
    if (array[index] == 'u') {
      arrayTest.push(array[index]);
    } else if (array[index] == 'f') {
      arrayTest.push(array[index]);
    } else if (array[index] == 'a') {
      arrayTest.push(array[index]);
    } else if (array[index] == 't') {
      arrayTest.push(array[index])
    }
    index++;
    if (arrayTest.length == 4) {
      var validar = arrayTest.toString().split(',').join('')
      if (validar == 'ufat') {
        arrayTextoDesencriptado.push('u')
        bandera = true;
        arrayTest.length = 0;
        break;
      } else {
        continue;
      }
    } else {
      continue;
    }
  }
}

/**
 * Metodo que desencripta el texto capturado del textArea
 * @param {capturaTextoArea} array Coleccion de caracteres alfabeticos de tipo String
 */
function desencriptar(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] == 'e') {
      validarE(array, i);
      if (bandera == true){
        i+=4;
      } else {
        errorTextoDesencriptar();
        break;
      }
    } else if (array[i] == 'a') {
      validarA(array, i);
      if (bandera == true){
        i++;
      } else {
        errorTextoDesencriptar();
        break;
      }
    } else if (array[i] == 'i') {
      validarI(array, i);
      if (bandera == true){
        i+=3;
      } else {
        errorTextoDesencriptar();
        break;
      }
    } else if (array[i] == 'o') {
      validarO(array, i);
      if (bandera == true){
        i+=3;
      } else {
        errorTextoDesencriptar();
        break;
      }
    } else if (array[i] == 'u') {
      validarU(array, i);
      if (bandera = true){
        i+=3;
      } else {
        errorTextoDesencriptar();
        break;
      }
    } else {
      bandera = false;
      arrayTextoDesencriptado.push(array[i]);
    }
  }
}

/**
 * Metodo que ejecuta un alert al usuario cuando ingresa un texto que 
 * impide realizar la descencriptacion.
 */
function errorTextoDesencriptar() {
  alert('Tienes un error en el texto o la alguna vocal se encuentra consecutiva' +
  ' e impide un correcto desencriptado porfavor verifica e intenta nuevamente. o<°');
}

