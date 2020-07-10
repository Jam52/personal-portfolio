const addMenu = (targetDiv) => {
    const sections = document.querySelectorAll('.section');
    const menuList = targetDiv.childNodes;

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
            menuList.forEach(item => {
                setTimeout(function(){
                    item.classList.add('load');
                }, 100 * (index + 3));  
            });     
        })
    },300)
    

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
    removeMenu
}