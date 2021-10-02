function Cuenta (){
    var cmj = Number (document.getElementById('cmj-val').value)
    var sj = Number (document.getElementById('sj-val').value)
    var CMJSJ = (cmj-sj)
    var denominador = (CMJSJ/sj)
    var final = (denominador*100)
    var numerofinal = final.toFixed(2)
    var h = document.getElementById('resultado1')
    h.innerHTML = "El indice de elasticidad corresponde a un "+ numerofinal+"%"
}

