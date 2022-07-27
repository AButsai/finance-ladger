import { refs } from '../refs/refs.js';
import { modalCloseEsc } from '../modal/modal.js';

const { callbackForm, callbackWorning, emailInput, overlay, body } = refs;

const handleSubmit = e => {
  e.preventDefault();
  const value = emailInput.value;
  if (value.trim() === '') {
    callbackWorning.classList.remove('visually-hidden');
  } else {
    callbackWorning.classList.add('visually-hidden');
    window.addEventListener('keydown', modalCloseEsc);
    overlay.classList.remove('visually-hidden');
    body.classList.add('isOpenModal');
  }

  callbackForm.reset();
};

callbackForm.addEventListener('submit', handleSubmit);
