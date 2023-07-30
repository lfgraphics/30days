let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.getElementById('voiceSelect');

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => {
        voiceSelect.options[i] = new Option(voice.name, i);
    });
}

voiceSelect.addEventListener('change', () => {
    speech.voice = voices[voiceSelect.value];
});

document.querySelector('button').addEventListener('click', () => {
    speech.text = document.querySelector('textarea').value;
    window.speechSynthesis.speak(speech);
    let alrt = document.getElementById('phone');
    let computedStyle = window.getComputedStyle(alrt);

    if (computedStyle.display === 'block') {
        alrt.style.display = 'none';
    }
});