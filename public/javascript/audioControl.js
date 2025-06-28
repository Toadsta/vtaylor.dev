// Get the audio and button elements
const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('playPauseButton');

// Set audio volume
audio.volume = 0.2;

// Function to toggle audio play/pause
function toggleAudio() {
    if (audio.paused) {
        audio.play();
        playPauseButton.querySelector('img').src = 'images/audioOn.png';  // Change image to "pause"
    } else {
        audio.pause();
        playPauseButton.querySelector('img').src = 'images/audioOff.png';  // Change image to "play"
    }
}

// Add an event listener to the button to toggle play/pause
playPauseButton.addEventListener('click', toggleAudio);