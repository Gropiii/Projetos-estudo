let numeroSecreto = gerarNumeroAleatorio();
console.log (`O número secreto é `, numeroSecreto);
let tentativas = 1;

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function textosDaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function exibirMensagemInicial() {
 textosDaTela('h1','Jogo do número secreto!');
textosDaTela('p','Escolha um número de 1 a 10.');       
}
exibirMensagemInicial()

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log (`O número secreto é `, numeroSecreto);
    console.log ('O chute foi: ', chute);
    console.log (chute==numeroSecreto);
    limparCampo();
    if(chute==numeroSecreto){
        textosDaTela('h1','Parabéns, você acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentivas' : 'tentativa';
        textosDaTela('p',`Você precisou de ${tentativas} ${palavraTentativa} para descobrir o número secreto (${numeroSecreto}).`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        tentativas++
        if(chute>numeroSecreto) {
        textosDaTela('h1',`O número secreto é menor que ${chute}`);
        textosDaTela('p','Tente outro número');
    } else{
        textosDaTela('h1',`O número secreto é maior que ${chute}`);
        textosDaTela('p','Tente outro número');
    }
}
}

function novoJogo() {
    document.getElementById('reiniciar').setAttribute('disabled',true);
    numeroSecreto = gerarNumeroAleatorio();
    console.log (`O número secreto é `, numeroSecreto);
    limparCampo();
    tentativas=1;
    exibirMensagemInicial()
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';    
}
