const openPopup = document.querySelector('.content__button'),
    closePopup = document.querySelector('.button__close');
let popup = document.querySelector('.popup'),
    body = document.querySelector('body');

openPopup.addEventListener('click', () => {
    popup.style.display = 'block' 
    setTimeout(function() { popup.style.opacity = 100 }, 200);
    body.style.overflow = 'hidden';
});

popup.addEventListener('click', (evt) => {
    if ((evt.target.closest('.popup-card') == null) || (evt.target.closest('.button__close'))){
        popup.style.opacity = 0 
        setTimeout(function() { popup.style.display = 'none' }, 200);
        body.style.overflow = '';
    }
})