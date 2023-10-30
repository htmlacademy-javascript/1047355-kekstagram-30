import {renderPopup} from './popup.js';

const popup = document.querySelector('.big-picture');
const closeButton = document.querySelector('.big-picture__cancel');
const commentCounter = document.querySelector('.social__comment-count');
const commentLoader = document.querySelector('.comments-loader');
const body = document.body;

const closePopup = () => {
  popup.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeyDown);
  closeButton.removeEventListener('click', onCancelButtonClick);
};

function onEscKeyDown (evt) {
  if (evt.key === 'Escape'){
    evt.preventDefault();
    closePopup();
  }
}


function onCancelButtonClick () {
  closePopup();
}

const openPopup = () => {
  popup.classList.remove('hidden');
  body.classList.add('modal-open');
  commentCounter.classList.add('hidden');
  commentLoader.classList.add('hidden');
  document.addEventListener('keydown', onEscKeyDown);
  closeButton.addEventListener('click', onCancelButtonClick);

};

const onThumbnailClick = () => {
  document.addEventListener('thumbnailSelect', (evt) => {
    evt.preventDefault();
    renderPopup(evt.detail);
    openPopup();
  });
};
export {onThumbnailClick};
