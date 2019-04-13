const openPopupButton = document.querySelector('.content__button'),
    buttonFormSubmit = document.querySelector('.form__button-submit');
let popup = document.querySelector('.popup'),
    body = document.querySelector('body'),
    popupCardForm = document.querySelector('.popup-card-form'),
    popupSuccesPost = document.querySelector('.popup-succes')

//Функция открытия popup
popupOpen = () => {
    popup.style.display = 'block' 
    setTimeout(function() { popup.style.opacity = 100 }, 200);
    body.style.overflow = 'hidden';
};

//Функция плавного закрытия всего popup
popupClose = () => {
    popup.style.opacity = 0 
    setTimeout(function() { popup.style.display = 'none' }, 200); //делает блок невидимым чтобы на него нельзя было нажать
    body.style.overflow = '';
}

//При отправке формы открвыается блок оповещением об удачном выполнении операции
popupSuccesPostOpen = () => {
    popupCardForm.style.display = 'none';
    popupSuccesPost.style.display = 'block';
};

//событие открытия popup
openPopupButton.addEventListener('click', () => {
    popupOpen();
});

//событие закрытия popup
popup.addEventListener('click', (evt) => {
    if ( (evt.target.closest('.popup-card') == null) || (evt.target.closest('.button__close') ) || (evt.target.closest('.popup-succes__button') ) )
        popupClose();
});

//обнуление работы кнопки submit для демонстрации работы при отправке формы
buttonFormSubmit.addEventListener('click', (evt) => {
    evt.preventDefault();
    popupSuccesPostOpen();
});