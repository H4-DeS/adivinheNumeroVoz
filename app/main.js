const menorValor = document.getElementById("menor-valor");
const maiorValor = document.getElementById("maior-valor");
const mostraNumero = document.getElementById("chute");
const dica = document.getElementById("seta");
const botaoReinicia = document.getElementById("reinicia");
var tentativas = 0;
const menor = 1;
const maior = 1000;
const sorteio = sorteiaNumero();

menorValor.innerHTML = menor;
maiorValor.innerHTML = maior;

document.body.addEventListener('click', (e) => {
	if(e.target.id == "reinicia")
		window.location.reload();
});

function sorteiaNumero(){
	let numeroSorteado = parseInt(Math.random()*maior + 1);
	return numeroSorteado;
}


