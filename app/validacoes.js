function atualizaDica(chute) {

    const valor = +chute;

    if(isNaN(valor) ){
        dica.innerHTML = "invalido";
    } else 

    if(valor > maior){
        dica.innerHTML = `maior que ${maior}.`;
    } else 

    if(valor < menor){
        dica.innerHTML = `menor que ${menor}.`;
    } else 
 
    if(valor  < sorteio){
        dica.classList.remove("fa-arrow-down");
        dica.classList.add("fa-arrow-up");
    } else if(valor  > sorteio){
        dica.classList.add("fa-arrow-down");
        dica.classList.remove("fa-arrow-up");
    }
}

function exibeChuteNaTela(chute) {
    mostraNumero.innerHTML = `
    <p>Você disse:</p>
		<div><span class="numero">${chute}</span></div>
        `;
}

function testaSeAcertou(chute){

    const valor = +chute;

    if (valor == sorteio){
        document.body.innerHTML = `
        <h2>Parabéns! Você acertou na <strong>${tentativas}º tentativa</strong>. O número sorteado era: ${sorteio}</h2>
        `;
    }
}