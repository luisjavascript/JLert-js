let nuevo = document.querySelector('#btnNuevo');
var mensaje = document.querySelector('#txt_mensaje');
var radioSimple = document.querySelector('#radio_simple');
var radioIcon = document.querySelector('#radio_icon');
let contador = 1;
var backgroundColor = document.querySelector('#backgroundColor');
var colorColor = document.querySelector('#colorColor');
var baseColor = document.querySelector('#baseColor');
var selectPositionIcon = document.querySelector('#selectPositionIcon');
var selectPositionJlert = document.querySelector('#selectPositionJlert');
var checkRound = document.querySelector('#checkRound');
var checkCloseButton = document.querySelector('#checkCloseButton');
var checkFirstElement = document.querySelector('#checkFirstElement');
var timeOut = document.querySelector('#timeOut');
var iconName = document.querySelector('#iconName');
nuevo.addEventListener('click', function (e) {
    console.log(mensaje.value, backgroundColor.value, colorColor.value, baseColor.value, radioSimple.checked, radioIcon.checked);
    jlert.createAlert('icon', mensaje.value + contador, {
        bg: backgroundColor.value.length > 0 ? backgroundColor.value : 'done',
        base: baseColor.value.length > 0 ? baseColor.value : 'done',
        round: checkRound.checked ? true : false,
        color: colorColor.value.length > 0 ? colorColor.value : 'white',
        positionIcon: selectPositionIcon.value.length > 0 ? selectPositionIcon.value : 'right',
        icon: iconName.value.length > 0 ? iconName.value : 'info',
        time: timeOut.value.length > 0 ? parseInt(timeOut.value) : 4000,
        closeButton: checkCloseButton.checked ? true : false,
        position: selectPositionJlert.value.length > 0 ? selectPositionJlert.value : 'top-right',
        firstElement: checkFirstElement.checked ? true : false,
        animation: { init: 'gum', end: 'gum', timeInit: 1000, timeEnd: 1000 },
        progressBar: false
    }).openJlert();
    contador++;
});