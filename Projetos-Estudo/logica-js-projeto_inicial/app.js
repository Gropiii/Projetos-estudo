alert('Bem vindo ao jogo de adivinhação!');
var dificuldade = prompt('Escolha a dificuldade (1,2,3)');
console.log (`A dificuldade escolhida foi ${dificuldade}`)
let numeroMaximo;
if (dificuldade==1){
 numeroMaximo=10;  
} else {
if (dificuldade==2){
    numeroMaximo=100; 
} else {
    if (dificuldade==3){
    numeroMaximo=1000; 
}}}
let numeroSecreto = parseInt(Math.random()*numeroMaximo+1);
console.log('Valor do número secreto:',numeroSecreto);
let chuteUsuario;
let tentativas=1;

//Condição de interpretação
while (chuteUsuario !=numeroSecreto){
    chuteUsuario = prompt(`Digite um número entre 1 e ${numeroMaximo}`);
    console.log('Valor do chute do usuário:',chuteUsuario);
    console.log('Resultado da comparação:',chuteUsuario == numeroSecreto);
    console.log('Número de tentativas', tentativas);
    if (chuteUsuario == numeroSecreto) {
        break;
    } else {
        if (chuteUsuario>numeroSecreto){
            alert (`Quase! Mas o número secreto é menor que ${chuteUsuario}.`);
        } else {
            alert (`Quase! Mas o número secreto é maior que ${chuteUsuario}.`);
        }   
        tentativas++;        
    }
}
let palavraTentativa = tentativas == 1 ? 'tentativa' : 'tentativas';
alert(`Parabéns, acertou o número secreto (${numeroSecreto}) em ${tentativas} ${palavraTentativa}!!!`);