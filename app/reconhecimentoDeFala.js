const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

var recognition = new SpeechRecognition();

recognition.lang = 'pt-Br';
recognition.start();


recognition.addEventListener('result', onSpeak);

function onSpeak (e) {
    const chute = e.results[0][0].transcript;
    exibeChuteNaTela(chute);
}





function exibeChuteNaTela(chute) {
    mostraNumero.innerHTML = `
    <p>Você disse:</p>
		<div><span class="numero">${chute}</span></div>
        `;
}

