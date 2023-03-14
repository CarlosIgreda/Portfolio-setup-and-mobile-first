const $ham = document.getElementById('hamburger');
const $container = document.querySelector('.mobilemenu-container');
const $x = document.getElementById('x');
const $portfolio = document.getElementById('a1');
const $about = document.getElementById('a2');
const $contact = document.getElementById('a3');

$ham.addEventListener('click',() => {
    $container.classList.toggle('activated');
});

$x.addEventListener('click',() => {
    $container.classList.remove('activated');
});

$portfolio.addEventListener('click',() => {
    $container.classList.remove('activated');
});

$about.addEventListener('click',() => {
    $container.classList.remove('activated');
});

$contact.addEventListener('click',() => {
    $container.classList.remove('activated');
});
