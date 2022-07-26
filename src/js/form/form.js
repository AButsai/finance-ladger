import { refs } from '../refs/refs.js';

const { callbackForm, callbackWorning, emailInput } = refs;

const handleSubmit = e => {
  e.preventDefault();
  const value = emailInput.value;
  if (value.trim() === '') {
    callbackWorning.classList.remove('visually-hidden');
  } else {
    callbackWorning.classList.add('visually-hidden');
  }

  callbackForm.reset();
};

callbackForm.addEventListener('submit', handleSubmit);
