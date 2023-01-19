const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

var recognition = new SpeechRecognition();

recognition.lang = 'pt-Br';
recognition.start();


recognition.addEventListener('result', onSpeak);
recognition.addEventListener('end', () => recognition.start())

function onSpeak (e) {
    const chute = e.results[0][0].transcript;
    tentativas++;
    dica.innerHTML = "";
    exibeChuteNaTela(chute);
    testaSeAcertou(chute);
    atualizaDica(chute);
        
}

