//import styles
import './styles/resets.scss';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/menu.scss';

//import images
import tornPaperImg from './images/torn-paper.png';
import emailImg from './images/emailImg.png';
import gitHubImg from './images/githubImg.png';
import linkedInImg from './images/linkedIn.png';
import backgroundImg from './images/background.png';
import profileImg from './images/profile.png';

//import js
const { addMenu, removeChild } = require('./js/addMenu');
const { removeMenu } = require('./js/addMenu');



//set footer images
document.getElementById('linkedin').setAttribute('src', linkedInImg);
document.getElementById('email').setAttribute('src', emailImg);
document.getElementById('github').setAttribute('src', gitHubImg);
document.getElementById('footer-paper').setAttribute('src', tornPaperImg);
document.getElementById('front-img').setAttribute('src', profileImg);




//footer menu click animation
const menuLink = document.getElementById('menu-link');
const menuLines = document.getElementById('menu-lines');
const frontImg = document.getElementById('front-img-div');
const footerBackground = document.getElementById('footer-background');
const menuTarget = document.getElementById('menu');

menuLink.addEventListener('click', (event) => {
    event.preventDefault();
    footerBackground.style.transitionDuration = '1s';
    if(footerBackground.style.height == '75vh') {
        removeMenu(menuTarget);
        footerBackground.style.height = '10vh';
        menuLines.style.transform = ('rotate(0deg)');
        frontImg.style.right = '5vw'
    } else {
        footerBackground.style.height = '75vh'
        frontImg.style.right = '-50vw'
        menuLines.style.transform = ('rotate(180deg)');
        addMenu(menuTarget);
    }
})


