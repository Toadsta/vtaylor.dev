const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('playPauseButton');

audio.volume = 0.2;

function toggleAudio() {
    if (audio.paused) {
        audio.play();
        playPauseButton.querySelector('img').src = 'images/audioOn.png';  // Change image to "pause"
    } else {
        audio.pause();
        playPauseButton.querySelector('img').src = 'images/audioOff.png';  // Change image to "play"
    }
}

playPauseButton.addEventListener('click', toggleAudio);