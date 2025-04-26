import loadHome from './home.js';
import loadMenu from './menu.js';
import loadAbout from './about.js';
import './css/style.css';

const content = document.getElementById('content');

const home_button = document.getElementById('home-button');
const menu_button = document.getElementById('menu-button');
const about_button = document.getElementById('about-button');

function init() {
    content.innerHTML = '';
    loadHome();
}

home_button.addEventListener('click', () => {
    content.innerHTML = '';
    loadHome();
});

menu_button.addEventListener('click', () => {
    content.innerHTML = '';
    loadMenu();
});

about_button.addEventListener('click', () => {
    content.innerHTML = '';
    loadAbout();
});

init();