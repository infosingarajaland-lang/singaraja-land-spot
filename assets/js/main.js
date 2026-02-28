const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav-links');
const overlay = document.getElementById('overlay');

toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
    nav.classList.remove('active');
    overlay.classList.remove('active');
});