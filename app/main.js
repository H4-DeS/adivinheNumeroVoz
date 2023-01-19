const menorValor = document.getElementById("menor-valor");
const maiorValor = document.getElementById("maior-valor");
const mostraNumero = document.getElementById("chute");
const dica = document.getElementById("seta");
var tentativas = 0;
const menor = 1;
const maior = 1000;
const sorteio = sorteiaNumero();

menorValor.innerHTML = menor;
maiorValor.innerHTML = maior;


function sorteiaNumero(){
	let numeroSorteado = parseInt(Math.random()*maior + 1);
	return numeroSorteado;
}

