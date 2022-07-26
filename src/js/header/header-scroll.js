import { refs } from '../refs/refs.js';

const { header } = refs;

const headerHide = () => header.classList.contains('header__show');
const screenWidth = window.screen.width;

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;

let startHadeShow = 0;
let lastScroll = 0;

if (screenWidth <= 320) {
  startHadeShow = 120;
} else {
  startHadeShow = 70;
}

window.addEventListener('scroll', () => {
  if (scrollPosition() > lastScroll && !headerHide() && scrollPosition() > startHadeShow) {
    header.classList.add('header__show');
  } else if (scrollPosition() < startHadeShow && headerHide()) {
    header.classList.remove('header__show');
  }

  lastScroll = scrollPosition();
});
