const bottomBar = document.querySelector('.bottom-bar');
const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', function() {
    // Toggle the 'hidden' class on the bottom bar
    bottomBar.classList.toggle('hidden');

    // Change the button text based on the bottom bar's visibility
    if (bottomBar.classList.contains('hidden')) {
        toggleButton.textContent = '↑'; // TODO: change to image
    } else {
        toggleButton.textContent = '↓';
    }
});