const cookieCloseButton = document.querySelector('.cookie__button');
let cookieAlert = document.querySelector('.cookie');

cookieCloseButton.addEventListener('click', () =>{
    cookieAlert.style.display = 'none';
});