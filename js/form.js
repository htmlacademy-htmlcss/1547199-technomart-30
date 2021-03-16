const formLink = document.querySelector('.button-write');
const formPopup = document.querySelector('.modal-window');
const formClose = formPopup.querySelector('.modal-close');

formLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  formPopup.classList.add('modal-show');
});

formClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  formPopup.classList.remove('modal-show');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (formPopup.classList.contains('modal-show')) {
      evt.preventDefault();
      formPopup.classList.remove('modal-show');
    }
  }
});


