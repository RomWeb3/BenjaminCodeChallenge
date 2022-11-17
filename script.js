const body = document.querySelector('body');
const circle = document.getElementById('circle');
const img = document.getElementById('img');
const lilCircle = document.getElementById('lil-circle');

body.addEventListener('mousemove', (e) => {
    let x = e.clientX / 2;

    circle.style.transform = `translate(${x / 20}px)`;
    img.style.transform = `translate(${-x / 40}px)`;
    lilCircle.style.transform = `translate(${-x / 5}px)`;
});