let resultado = ""
let operacion = ""
function actualizarPantalla(){
    document.getElementById("resultado").value = resultado;
}
function mostrar(numero) {
    resultado += numero;
    actualizarPantalla()
}
function operar(operador) {
    resultado += operador;
    operacion = operador;
    actualizarPantalla()
}
function agregarDecimal(decimal) {
    if (!resultado.includes(decimal)) {
        resultado += decimal;
        actualizarPantalla()
    }
}
function limpiar () {
    resultado = "";
    operacion ="";
    actualizarPantalla()
}
function calcular() {
    try {
        resultado = eval(resultado);
        actualizarPantalla();
    } catch (error) {
        resultado = "Error";
        actualizarPantalla();
    }
}
