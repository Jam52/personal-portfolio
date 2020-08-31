//load projectGalleryHTML
import gallery from "../views/projectGallery.html";
import { removeMenu } from "./addMenu";

const loadGalleryFrag = () => {
    const frag = document.createDocumentFragment();
    const div = document.createElement("div");
    div.innerHTML = gallery;
    frag.appendChild(div);
    return frag;
};

const footerBackground = document.getElementById("footer-background");
const galleryDiv = document.getElementById("popup-gallery-container");
const footerContact = document.getElementById("footer-contact");
const galleryCross = document.getElementById("gallery-cross");

const addGallery = (target) => {
    //load gallery content
    const loadGallery = loadGalleryFrag();
    const targetGalleryElements = loadGallery.getElementById(
        `${target.id}-gallery`
    );

    //raise footer background
    footerBackground.style.height = "100vh";
    galleryCross.style.opacity = 1;

    //create gallery fragment
    const newFrag = document.createDocumentFragment();
    newFrag.appendChild(targetGalleryElements);
    galleryDiv.appendChild(newFrag);
    footerContact.style.opacity = "1";
    const thumbImgs = document.getElementById("thumb-imgs");
    setMainImg(thumbImgs.firstElementChild.firstElementChild.src);

    //add event listener to thumb imgs
    thumbImgs.addEventListener("click", (e) => {
        const target = e.target;
        if (target && target.matches(".thumb-img")) {
            setMainImg(target.src);
            const siblings = target.parentElement.parentElement.children;
            [...siblings].forEach((element) => {
                element.classList.remove("selected-thumb");
            });
            target.parentElement.classList.add("selected-thumb");
        }
    });
};

//remove gallery function
const removeGallery = (scrollY) => {
    let viewHeight = window.innerHeight;
    const frontImg = document.getElementById("front-img-div");
    console.log(document.body.offsetHeight);
    console.log(window.innerHeight + scrollY);
    galleryCross.style.opacity = 0;

    //remove menu elements
    const menuTarget = document.getElementById("menu");
    removeMenu(menuTarget);

    //remove gallery div elements
    if (galleryDiv.hasChildNodes()) {
        galleryDiv.removeChild(galleryDiv.childNodes[0]);
    }
    if (
        scrollY < viewHeight * 0.5 ||
        window.innerHeight + scrollY >= document.body.offsetHeight - 100
    ) {
        frontImg.style.right = "5vw";
        footerBackground.style.height = "20vh";
        footerContact.style.opacity = 1;
    } else {
        frontImg.style.right = "-100vw";
        footerBackground.style.height = "0vh";
        footerContact.style.opacity = 0;
    }
};

//set main image function
const setMainImg = (targetSrc) => {
    const mainImg = document.querySelector(".main-img");
    mainImg.src = targetSrc;
};

export { addGallery, removeGallery };
