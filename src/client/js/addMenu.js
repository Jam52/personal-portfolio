import { removeGallery } from "./addGallery";

const addMenu = (targetDiv) => {
    const sections = document.querySelectorAll('.section');
    const menuList = targetDiv.childNodes;
    const footerBackground = document.getElementById('footer-background');

    setTimeout(function() {
        sections.forEach((item, index) => {
            const name = item.getAttribute('name');
            const value = item.getAttribute('value');
            let div = document.createElement('div');
            let a = document.createElement('a');
            a.setAttribute('href', '#'+'section-'+name)
            let p = document.createElement('p');
            let p2 = document.createElement('p');
            p.innerHTML = name;
            p2.textContent = value;
            a.appendChild(p);
            a.appendChild(p2);
            div.appendChild(a);
            div.classList.add('menu-item');
            targetDiv.appendChild(div);  
            
            //add event listener
            a.addEventListener('click', (event) => {
                event.preventDefault();
                const targetSection = document.getElementById('section-' + name);
                if(targetSection.id == 'section-return') {
                    window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: 'smooth'
                      });
                    animateMenu();

                } else {
                    targetSection.scrollIntoView({behavior: 'smooth'});
                    animateMenu();
                }
    
            })

            menuList.forEach(item => {
                setTimeout(function(){
                    item.classList.add('load');
                }, 100 * (index + 3));  
            });     
        })
    },400)

}

const menuLines = document.getElementById('menu-lines');
const frontImg = document.getElementById('front-img-div');
const footerBackground = document.getElementById('footer-background');
const menuTarget = document.getElementById('menu');
const footerContact = document.getElementById('footer-contact');

const animateMenu = () => {
    if(footerBackground.style.height >= "80vh") {
        const scrollY = window.scrollY;
        removeMenu(menuTarget);
        removeGallery(scrollY);
        menuLines.style.transform = ('rotate(0deg)');
    } else {
        footerBackground.style.height = '80vh'
        footerContact.style.opacity = 1;
        frontImg.style.right = '-100vw'
        menuLines.style.transform = ('rotate(180deg)');
        addMenu(menuTarget);
    }
}


const removeMenu = (targetDiv) => {
    const childNodes = targetDiv.childNodes;
    console.log(childNodes)

    while(childNodes.length > 0) {
        targetDiv.removeChild(targetDiv.childNodes[0])
    }
}

export {
    addMenu,
    removeMenu,
    animateMenu
}