const blogWindow = document.querySelector('.window');
const windowMenu = document.querySelector('.window-menu');
const windowClose = document.querySelector('.window-close');
const windowCloseButton = document.getElementById('windowCloseButtonBlog');
const windowBlog = document.getElementById('windowBlog');
const windowMenuBlog = document.getElementById('windowMenuBlog');
const windowContentBlog = document.getElementById('windowContentBlog');

const openBlog = document.getElementById('openBlog');


windowCloseButton.addEventListener('click', function() {
    blogWindow.classList.toggle('hide');
    windowMenu.classList.toggle('hide');
    windowClose.classList.toggle('hide');
});

openBlog.addEventListener('click', function() {
    blogWindow.classList.toggle('hide');
    windowMenu.classList.toggle('hide');
    windowClose.classList.toggle('hide');
})