const menuButton = document.querySelector('.burger'),
    header = document.querySelector('.header');
let menu = document.querySelector('.navbar--mobile'),
    mobileMenuLink = menu.querySelectorAll('.navbar__link');

closeMobileMenu = () => {
    menu.classList.add('navbar--mobile-close');
    menu.style.transform = menu.style.transform = 'translateY(-100vh)';
}

openMobileMenu = () => {
    let height = header.offsetHeight + 15;
    menu.classList.remove('navbar--mobile-close');
    menu.style.transform = 'translateY(' + height + 'px)';
}

menuButton.addEventListener('click', () => {
    if (menu.classList.contains('navbar--mobile-close')){
        openMobileMenu();
    } else {
        closeMobileMenu();
    }
});

mobileMenuLink.forEach( (item) => {
    item.addEventListener('click', () =>{
        closeMobileMenu();
    });
});
