const warning = document.querySelector('.alert');
const message = document.querySelector('.msg');
const x = document.querySelector('.close-btn');
const fa = document.querySelector('.fa-exclamation-circle');

x.addEventListener('click', function(e) {
    warning.classList.remove('show');
    warning.classList.add('hide');
});

function showMessageWarning(str) {
    warning.classList.remove('hide');
    warning.classList.add('show');
    warning.classList.add('showAlert');
    message.innerHTML = str;
}

function showMessageSuccess(str) {
    warning.classList.remove('hide');
    warning.classList.add('show');
    warning.classList.add('showAlert');
    warning.classList.add('success');
    x.classList.add('success');
    fa.classList.add('success');
    message.innerHTML = str;
    // setInterval(showMessageSuccess, 4000, 'Text Copiado!')
    setTimeout(function(){
        warning.classList.add('hide');
        warning.classList.remove('success');
        x.classList.remove('success');
        fa.classList.remove('success');
    }, 3000);
    
}