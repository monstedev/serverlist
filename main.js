// CHANGE NAVBAR ON SCROLL

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 100)
})

// SHOW/HIDE FAQ ANSWER ON CLICK

const faqs = document.querySelectorAll('.faq')

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //change icon

        const icon = faq.querySelector('.faq__icon i')
        if(icon.className === 'uil uil-plus') {
            icon.className = 'uil uil-minus';
        } else {
            icon.className = 'uil uil-plus';
        }
    })
})

//SHOW/HIDE NAV MENU

const menu = document.querySelector('.nav__menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

const menuLi1 = document.querySelector('.menu-1');
const menuLi2 = document.querySelector('.menu-2');
const menuLi3 = document.querySelector('.menu-3');


menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";

    menuLi1.style.display = "inline-block";
    menuLi2.style.display = "inline-block";
    menuLi3.style.display = "inline-block";
}) 

// CLOSE NAV MENU

const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)

// FILTER SERVER

function filterObjects(c){
    var x, i;
    x = document.getElementsByClassName('box');
    if(c == 'all') c == '';
    
    for(i = 0; i < x.lenght; i++) {
        removeClass(x[i], "show")
    }

}