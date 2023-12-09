const menu = document.getElementById("menu");
const close = document.getElementById("close");
const bar = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");

menu.addEventListener('click', () => {
    bar.style.display = 'block';
    overlay.style.display = 'block';
});

close.addEventListener('click', () => {
    bar.style.display = 'none';
    overlay.style.display = 'none';
});