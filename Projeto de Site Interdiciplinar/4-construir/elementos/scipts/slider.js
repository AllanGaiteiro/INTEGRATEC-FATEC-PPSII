
////////testes
//document.querySelector('div.cabecalho').id = 'slider_3'  //
///cabecalho.id = 'slider_3'
///////////////////////////////////////


/// variaveis
var cabecalho = document.querySelector('div.cabecalho')
var n = 1
var tmp = 5000
var count = 0


/////// em alteraçoes

setInterval(function () {
    n += (cabecalho.id == 'slider_3') ? -2 : 1;
    cabecalho.id = `slider_${n}`
}, tmp)



