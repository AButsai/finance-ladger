import { refs } from '../refs/refs.js';
import { modalCloseEsc } from '../modal/modal.js';

const { callbackForm, callbackWorning, emailInput, overlay, body } = refs;

const handleSubmit = e => {
  e.preventDefault();

  const formData = new FormData(callbackForm);
  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => {
      window.addEventListener('keydown', modalCloseEsc);
      overlay.classList.remove('visually-hidden');
      body.classList.add('isOpenModal');
    })
    .catch(error => alert(error));

  const value = emailInput.value;
  if (value.trim() === '') {
    callbackWorning.classList.remove('visually-hidden');
  } else {
    callbackWorning.classList.add('visually-hidden');
  }

  callbackForm.reset();
};

callbackForm.addEventListener('submit', handleSubmit);
