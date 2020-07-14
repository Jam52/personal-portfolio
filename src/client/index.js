//import styles
import './styles/resets.scss';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/menu.scss';
import './styles/gallery.scss';

//import js
const { addMenu, removeChild } = require('./js/addMenu');
const { animateMenu } = require('./js/addMenu.js');

//footer menu click animation
const menuLink = document.getElementById('menu-link');;

menuLink.addEventListener('click', (event) => {
    event.preventDefault();
    animateMenu();
})




//scroll listener to remove from image when not at top of screen
const frontImg = document.getElementById('front-img-div');
let viewHeight = window.innerHeight;
window.addEventListener('scroll', (event) => {
    let scrollY = window.scrollY;
    console.log(scrollY)
    if(scrollY > viewHeight * 0.65) {
        console.log(scrollY)
        frontImg.style.right = '-50vw';
    } else {
        frontImg.style.right = '5vw';
    }
})