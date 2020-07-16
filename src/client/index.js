//import styles
import './styles/resets.scss';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/menu.scss';
import './styles/gallery.scss';

//import js
const { addMenu, removeChild } = require('./js/addMenu');
const { animateMenu } = require('./js/addMenu');
const { addGallery, removeGallery } = require('./js/addGallery');


//footer menu click animation
const menuLink = document.getElementById('menu-link');;

menuLink.addEventListener('click', (event) => {
    event.preventDefault();
    animateMenu();
})


//gallery images eventlistener
const gallerys = document.getElementById('projects')
gallerys.addEventListener('click', (e) => {
        e.preventDefault();
        const targetSlide = checkForParent(e.target);
        console.log(targetSlide)
        if(targetSlide != null){
            addGallery(targetSlide);
        }
    })


//find if partent matches slide
const checkForParent = (target) => {
    let node = target;

    while(node != null) {
        if(node.classList.contains('slide')){
            return node;
        } else {
            node = node.parentElement;
        }
    }

    return null;
}




//scroll listener to remove from image when not at top of screen
window.addEventListener('scroll', (event) => {
    let scrollY = window.scrollY;
    removeGallery(scrollY)
})

//scroll listener for gallery cross
const galleryCross = document.getElementById('gallery-cross');
galleryCross.addEventListener('click', (event) => {
    let scrollY = window.scrollY;
    removeGallery(scrollY)
})