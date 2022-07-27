import { refs } from '../refs/refs';

const { body, overlay, modalClose } = refs;

export function modalCloseEsc(e) {
  if (e.key === 'Escape') {
    body.classList.remove('isOpenModal');
    overlay.classList.add('visually-hidden');
    window.removeEventListener('keydown', modalCloseEsc);
  }
}

const modalClosed = () => {
  body.classList.remove('isOpenModal');
  overlay.classList.add('visually-hidden');
  window.removeEventListener('keydown', modalCloseEsc);
};

modalClose.addEventListener('click', modalClosed);

overlay.addEventListener('click', e => {
  if (e.target === e.currentTarget) {
    modalClosed();
  }
});
