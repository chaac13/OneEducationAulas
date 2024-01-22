let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function verificaBtnConsole(){
    console.log('o botão foi clicado');
}

function verificaBtnAlert(){
    alert('Eu amo JS');
}
function verificaBtnPrompt(){
    let cidade = prompt('Qual a sua cidade');
    alert(`Estive em ${cidade} e lembrei de você`);
}
function soma(){
    let numeroUm = prompt('Digite um numero');
    let numeroDois = prompt('Digite outro numero');
    alert(`A soma de ${numeroUm} + ${numeroDois} é ${parseInt(numeroUm)+ parseInt(numeroDois)}`);
}