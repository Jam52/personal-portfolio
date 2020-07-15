//import styles
import './styles/resets.scss';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/menu.scss';
import './styles/gallery.scss';

//import js
const { addMenu, removeChild } = require('./js/addMenu');
const { animateMenu } = require('./js/addMenu');
const { addGallery } = require('./js/addGallery');


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
const frontImg = document.getElementById('front-img-div');
const footerBackground = document.getElementById('footer-background');
const footerContact = document.getElementById('footer-contact');
let viewHeight = window.innerHeight;


window.addEventListener('scroll', (event) => {
    let scrollY = window.scrollY;
    let galleryDiv = document.getElementById('popup-gallery-container');
    if(galleryDiv.hasChildNodes()) {
        galleryDiv.removeChild(galleryDiv.childNodes[0]);
    }
    if(scrollY > viewHeight * 0.5) {
        frontImg.style.right = '-100vw';
        footerBackground.style.height = '0vh';
        footerContact.style.opacity = 0;
    } else {
        frontImg.style.right = '5vw';
        footerBackground.style.height = '20vh';
        footerContact.style.opacity = 1;
        
    }
})