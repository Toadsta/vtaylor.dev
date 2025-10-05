const bottomBar = document.querySelector('.bottom-bar');
const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', function() {
    bottomBar.classList.toggle('hidden');

    if (bottomBar.classList.contains('hidden')) {
        toggleButton.textContent = '↑';
    } else {
        toggleButton.textContent = '↓';
    }
});