
import home from './homepage.js';
import menu from './menu.js';
import contact from './contact.js';
import "./style.css"

const mainContainer = document.querySelector('#content-container');

const homeBtn = document.querySelector('#home-button');
const menuBtn = document.querySelector('#menu-button');
const contactBtn = document.querySelector('#contact-button');
const homeLogo = document.querySelector('#home-logo');


const loadHomePage = function (){
    mainContainer.innerHTML = home;
};
const loadMenuPage = function (){
    mainContainer.innerHTML = menu;
};
const loadContactPage = function (){
    mainContainer.innerHTML = contact;
};

document.addEventListener('DOMContentLoaded', loadHomePage);
homeBtn.addEventListener('click', loadHomePage);
menuBtn.addEventListener('click', loadMenuPage);
contactBtn.addEventListener('click', loadContactPage);
homeLogo.addEventListener('click', loadHomePage);

