const menuButton = document.querySelector('.burger'),
    header = document.querySelector('.header');
let menu = document.querySelector('.navbar--mobile');

menuButton.addEventListener('click', () => {
    console.log(menu.classList.contains('navbar--mobile-close'))
    if (menu.classList.contains('navbar--mobile-close')){
        menu.classList.remove('navbar--mobile-close');
    } 
    else {
        menu.classList.add('navbar--mobile-close');  
    }
    
})