const menuShelf = document.querySelector('.menuShelf');
const menuButton = document.getElementById('menuButton');


menuButton.addEventListener('click', function() {
    menuShelf.classList.toggle('show');
});