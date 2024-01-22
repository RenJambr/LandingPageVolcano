let customBtn = document.querySelector('.center');
let menuEl = document.querySelectorAll('.menu li');
let navbar = document.querySelector('header');
let explore = document.querySelector('.explore');
let heroContent = document.querySelector('.hero-content');
let hero = document.querySelector('.hero');
let ashImage = document.querySelector('.ash');

//listener for opening nav menu
customBtn.addEventListener('click', () => {
    customBtn.classList.toggle('active');

    for(let i = 0; i < menuEl.length; i++){
        if(customBtn.classList.contains('active')){
            menuEl[i].style.visibility = "visible";
            menuEl[i].style.opacity = 1;
            menuEl[i].style.transform = "translateX(0px)";
        } else{
            menuEl[i].style.visibility = "hidden";
            menuEl[i].style.opacity = 0;
            menuEl[0].style.transform = "translateX(5px)";
            menuEl[1].style.transform = "translateX(10px)";
            menuEl[2].style.transform = "translateX(15px)";
        }
    }
})

//animation onload
window.addEventListener('load', () => {
    navbar.style.transform = 'translateY(0px)';
    navbar.style.opacity = 1;
    explore.style.opacity = 1;
    heroContent.style.transform = 'translateX(0px)';
    heroContent.style.opacity = 1;
})

//event listener on scroll
window.addEventListener('scroll', () => {
    animateHeadingUnderline();
    fadeInImages();
    showFooterItems();
})

//animation for underline heading
const animateHeadingUnderline = () => {
    let underlines = document.querySelectorAll('.underline');

    underlines.forEach(underline => {
        let underlineTop = underline.getBoundingClientRect().top;
        let triggerBottom = window.innerHeight / 5*4;

        if(underlineTop < triggerBottom){
            underline.style.width = "100%";
        }
    })
}

//animation for fadeIn images
const fadeInImages = () => {
    let images = document.querySelectorAll('.item .contentImage');

    images.forEach(img => {
        let imageTop = img.getBoundingClientRect().top;
        let triggerBottom = window.innerHeight / 5*4;

        if(imageTop < triggerBottom){
            if(img.classList.contains('right')){
                img.style.animation = 'fadeInRightImage 0.8s ease-in-out';
                img.style.opacity = 1;
                img.style.transform = "translateX(0px)";
            } else{
                img.style.animation = 'fadeInLeftImage 0.8s ease-in-out';
                img.style.opacity = 1;
                img.style.transform = "translateX(0px)";
            }
        }
    })
}

//animation for show footer items
const showFooterItems = () => {
    let items = document.querySelectorAll('.footer-item');
    let footer = document.querySelector('.footer');

    for(let i = 0; i < items.length; i++){
        let delay = (i/items.length-1) + 1.7;

        let footerTop = footer.getBoundingClientRect().top;
        let triggerBottom = window.innerHeight / 5*4;

        if(footerTop < triggerBottom){
            items[i].style.animation = `${delay}s ease-in-out moveFooterItems`;
            
            setTimeout(() => {
                items[i].style.opacity = 1;
                items[i].style.transform = "translateY(0px)";
            }, 5);
        }
    }
}