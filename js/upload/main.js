import { openPopup } from './popup.js';
import { checkValidity, resetValidity } from './validation.js';
import { getScale, resetScale } from './scale.js';

const form = document.querySelector('.img-upload__form');
const preview = document.querySelector('.img-upload__preview img');


form.addEventListener('change', (event) => {
  switch (event.target.name) {
    case 'filename':
      openPopup();
      break;
    case 'scale':
      preview.style.transform = `scale(${getScale() / 100})`;
      break;
  }
});

form.addEventListener('submit', (event) => {
  if (!checkValidity()) {
    event.preventDefault();
  }
});

form.addEventListener('reset', () => {
  resetValidity();
  resetScale();
});

