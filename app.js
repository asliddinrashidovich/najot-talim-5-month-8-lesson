const sidebar = document.querySelector('.sidebar');
const menuBtn = document.querySelector('.menu');
const closeBtn = document.querySelector('.delete');
const moon = document.querySelector('.moon');
const sun = document.querySelector('.sun');
const body = document.querySelector('body');
const img1 = document.querySelector('.img_slider1');
const img2 = document.querySelector('.img_slider2');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const sliders = document.querySelector('.sliders');


menuBtn.addEventListener('click', () => {
    sidebar.classList.add('sidebar_hidden')
})
closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('sidebar_hidden')
})
sun.addEventListener('click', () => {
    body.classList.add('darkMode')
    sun.classList.add('hidden')
    moon.classList.remove('hidden')
})
moon.addEventListener('click', () => {
    body.classList.remove('darkMode')
    sun.classList.remove('hidden')
    moon.classList.add('hidden')
})

right.addEventListener('click', () => {
    img1.classList.add('hidden');
    img2.classList.remove('hidden');
})
left.addEventListener('click', () => {
    img1.classList.remove('hidden');
    img2.classList.add('hidden');
})