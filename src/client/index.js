//import styles
import './styles/resets.scss';
import './styles/base.scss';
import './styles/footer.scss';

//import images
import tornPaperImg from './images/torn-paper.png';
import emailImg from './images/emailImg.png';
import gitHubImg from './images/githubImg.png';
import linkedInImg from './images/linkedIn.png';
import profileImg from './images/profile.png';


//set footer images
document.getElementById('linkedin').setAttribute('src', linkedInImg);
document.getElementById('email').setAttribute('src', emailImg);
document.getElementById('github').setAttribute('src', gitHubImg);
document.getElementById('footer-paper').setAttribute('src', tornPaperImg);
