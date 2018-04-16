let nuevo = document.querySelector('#btnNuevo');
var mensaje = document.querySelector('#txt_mensaje');
var radioSimple = document.querySelector('#radio_simple');
var radioIcon = document.querySelector('#radio_icon');
let contador = 1;
nuevo.addEventListener('click', function (e) {
    console.log(mensaje.value, radioSimple.checked, radioIcon.checked);
    jlert.createAlert(radioIcon ? 'icon' : 'simple', mensaje.value + contador, {
        bg: 'info',
        base: 'info',
        round: false,
        color: 'whitesmoke',
        positionIcon: 'right',
        icon: 'info',
        time: 3000,
        closeButton: false,
        position: 'top-right',
        firstElement: false,
        animation: { init: 'gum', end: 'gum', timeInit: 1000, timeEnd: 1000 },
        progressBar: false
    }).openJlert();
    contador++;
});