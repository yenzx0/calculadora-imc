const BotaoCalcular = document.getElementById("calcular")
BotaoCalcular.addEventListener("click", calcularIMC)

let nome = document.getElementById("nome").value
let peso = document.getElementById("peso").value
let altura = document.getElementById("altura").value
let imc = document.getElementById("peso").value / (document.getElementById("altura").value * document.getElementById("altura").value)

function calcularIMC() {
    let nome = document.getElementById("nome").value
    let imc = document.getElementById("peso").value / (document.getElementById("altura").value * document.getElementById("altura").value)
    let resultado = document.getElementById("resultado")

    if (imc < 18.5) {
        resultado.textContent = `${nome}, seu IMC é ${imc.toFixed(2)} e você está abaixo do peso.`
    } else if (imc >= 18.5 && imc < 25) {
        resultado.textContent = `${nome}, seu IMC é ${imc.toFixed(2)} e você está com o peso normal.`
    } else if (imc >= 25 && imc < 30) {
        resultado.textContent = `${nome}, seu IMC é ${imc.toFixed(2)} e você está com sobrepeso.`
    } else if (imc >= 30 && imc < 35) {
        resultado.textContent = `${nome}, seu IMC é ${imc.toFixed(2)} e você está com obesidade grau I.`
    } else if (imc >= 35 && imc < 40) {
        resultado.textContent = `${nome}, seu IMC é ${imc.toFixed(2)} e você está com obesidade grau II.`
    } else if (imc >= 40) {
        resultado.textContent = `${nome}, seu IMC é ${imc.toFixed(2)} e você está com obesidade grau III.`
    }
}