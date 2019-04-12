const menuButton = document.querySelector('.burger'),
    header = document.querySelector('.header');
let menu = document.querySelector('.navbar--mobile');

menuButton.addEventListener('click', () => {
    let height = header.offsetHeight;
    if (menu.classList.contains('navbar--mobile-close')){
        menu.classList.remove('navbar--mobile-close');
        menu.style.transform = 'translateY(' + height + 'px)';
    } else {
        menu.classList.add('navbar--mobile-close');
        menu.style.transform = menu.style.transform = 'translateY(-100vh)';
    }
})