const campoA = document.querySelector("#valorA");
const campoB = document.querySelector("#valorB");
const seletorOperador = document.getElementById("operador");
const btnCalc = document.querySelector("#botaoCalcular");
const displayResultado = document.getElementById("resultado");

btnCalc.addEventListener('click', function() {
    const a = Number(campoA.value);
    const b = Number(campoB.value);
    const operacao = seletorOperador.value;

    if (operacao === "+") {
        calculo = a + b;
        console.log("SOMA: "+ a +" + "+ b);
    } else if (operacao === "-") {
        calculo = a - b;
        console.log("SUBTRAÇÃO: "+ a +" - "+ b);
    } else if (operacao === "x") {
        calculo = a * b;
        console.log("MULTIPLICAÇÃO: "+ a +" x "+ b);
    } else if (operacao === "/") {
        calculo = b !== 0 ? a / b : "Erro (divisão por 0)"; // Mensagem de erro caso divisível por 0
        console.log("DIVISÃO: "+ a +" / "+ b);
    }

    displayResultado.textContent = "RESULTADO: " + calculo;    
    console.log("Resultado da função: "+calculo);

    console.log("BOTÃO PRESSIONADO!");
});

console.log("ARQUIVO JS FUNCIONANDO NORMALMENTE!");