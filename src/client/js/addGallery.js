//load projectGalleryHTML
import gallery from '../views/projectGallery.html'

const loadGalleryFrag = () =>{
    const frag = document.createDocumentFragment();
    const div = document.createElement('div')
    div.innerHTML = gallery;
    frag.appendChild(div);
    return frag
}

const footerBackground = document.getElementById('footer-background');
const footerDiv = document.getElementById('footer-div')
const galleryDiv = document.getElementById('popup-gallery-container');
const footerContact = document.getElementById('footer-contact');

const addGallery = (target) => {
    const loadGallery = loadGalleryFrag();
    const targetGalleryElements = loadGallery.getElementById(`${target.id}-gallery`)
    
    //raise footer background
    footerBackground.style.height = '100vh'
    const newFrag = document.createDocumentFragment();
    newFrag.appendChild(targetGalleryElements);
    galleryDiv.appendChild(newFrag)
    footerContact.style.opacity = '1';
}

export {
    addGallery
}