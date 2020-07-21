//import styles
import './styles/resets.scss';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/menu.scss';
import './styles/gallery.scss';
import './styles/eduction.scss';
import './styles/contact.scss';

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

//disable scroll while gallery popup is enabled
function disableScrolling(){
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
}

//gallery images eventlistener
const gallerys = document.getElementById('projects')
gallerys.addEventListener('click', (e) => {
        e.preventDefault();
        const targetSlide = checkForParent(e.target);
        console.log(targetSlide)
        if(targetSlide != null){
            console.log('disable scroll')
            disableScrolling();
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



const footerBackground = document.getElementById('footer-background');
const mainbody = document.querySelector('body');
//scroll listener to remove from image when not at top of screen
window.addEventListener('scroll', (event) => {
    let scrollY = window.scrollY;
    mainbody.style.backgroundPositionY = `${scrollY/10}px`;
    if(footerBackground.style.height != '100vh'){
        removeGallery(scrollY)
    }
})



function enableScrolling(){
    window.onscroll=function(){};
}


//click listener for gallery cross
const galleryCross = document.getElementById('gallery-cross');
galleryCross.addEventListener('click', (event) => {
    let scrollY = window.scrollY;
    enableScrolling();
    removeGallery(scrollY)
})