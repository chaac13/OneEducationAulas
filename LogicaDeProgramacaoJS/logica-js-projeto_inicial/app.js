alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
let tentativas = 1;

while(chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    if(numeroSecreto == chute){
        break;
    }else{
        
        if(chute > numeroSecreto){
            alert(`o numero secreto é menor que ${chute}`);
        }else{
            alert(`o numero secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1  ? 'tentativas' : 'tentativa'; 
alert(`Você acertou o numero ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);


//01.Iniciando com JavaScript - Desafio: hora da prática
/*
alert('Boas vindas ao nosso site!')
let nome = "lua"
let idade = 25
let numeroDeVendas = 50
let saldoDisponivel = 1000
alert('Erro! Preencha todos os campos')
let mensagemDeErro = 'Erro! Preencha todos os campos'
alert(mensagemDeErro)
nome = prompt("Digite o nome do usuário")
idade = prompt("Digite a idade")

if(idade>=18){
    alert('Pode tirar a habilitação!')
}

//////////////////////////////////////////////////////////////////////////
//02.Condicionais e concatenação - Desafio: hora da prática

let dia = prompt("Qual é o dia da semana")
if(dia == 'Sábado'|| dia =='Domingo'){
    alert('Bom fim de semana')
}else{
    alert('Boa semana')
}

let numero = prompt('Digite um numero')
if(numero => 0){
    alert('Positivo')
}else{
    alert('negativo')
}

pontuacao = 105;
if (pontuacao > 100) {
    console.log('Parabéns, você venceu!');
} else {
    console.log('Tente novamente para ganhar.');
}

let saldoConta = 500; // Exemplo de saldo
alert(`Seu saldo é de R$${saldoConta}.`);

let nome = prompt('Qual o seu nome?');
alert(`Boas vindas ${nome}`);

//////////////////////////////////////////////////////////////////////////////////
//03.Loops e tentativas-Desafio:hora da pratica

let contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador++;
}

let contador = 10;
while (contador >= 0) {
    console.log(contador);
    contador--;
}

let numeroMaximo = prompt("Digite um número para a contagem regressiva:");
while (numeroMaximo >= 0) {
    console.log(numeroMaximo);
    numeroMaximo--;
}

let numeroMaximo = prompt("Digite um número para a contagem progregressiva:");;
let contador = 0;
while (contador <= numeroMaximo) {
    console.log(contador);
    contador++
}

///////////////////////////////////////////////////////////////////////////////////////////////////
//04.Boas práticas de programação-Desafio: hora da prática
console.log('Boas vindas');

let nome = 'Caio';
console.log(`Olá, ${nome}!`);

let linguagemPreferida = prompt('Qual  a linguagem de programação que você mais gosta?');
console.log(linguagemPreferida);

let valor1 = 42;
let valor2 = 8;
let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`)

let valor1 = 10;
let valor2 = 8;
let resultado = valor1 - valor2;
console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.`);

let idade = prompt('Digite a sua idade:');
if (idade > 17) {
    console.log('Você é maior de idade.');
} else {
    console.log('Você é menor de idade.');
}

var numero = parseFloat(prompt("Digite um número:"));


if (numero > 0) {
    console.log("O número é positivo.");
} else if (numero < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}

let numero = 1;
while (numero <= 10) {
    console.log(numero);
    numero++;
}

let nota = 8; // Substitua pelo valor da nota que deseja testar
if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

let numeroAleatorio = Math.random();
console.log(numeroAleatorio);

let numeroInteiroAleatorio = parseInt(Math.random() * 10) + 1;
console.log(numeroInteiroAleatorio);

let numeroInteiroAleatorio = parseInt(Math.random() * 1000) + 1;
console.log(numeroInteiroAleatorio);

*/

