let isOpend = false;

const burgerButtons = document.getElementsByClassName('burger');
const burger = document.getElementById('burger');
const body = document.getElementById('body');
const burgerBtn = burger.querySelectorAll('a');

burger.style.cssText = 'transition: 0.3s; opacity: 0; display: none;';

for (const btn of burgerBtn) {
  btn.addEventListener('click', () => {
    document
      .querySelector(btn.dataset.destination)
      .scrollIntoView({ behavior: 'smooth', block: 'start' });

    CloseMeny();
  });
}

for (const burgerBtn of burgerButtons) {
  burgerBtn.addEventListener('click', () => {
    if (isOpend) {
      CloseMeny();

      return;
    }

    OpenMeny();
  });
}

function CloseMeny() {
  burger.style.cssText = 'transition: 0.3s; opacity: 0; z-index: -1;';
  body.classList = '';

  isOpend = !isOpend;
}

function OpenMeny() {
  isOpend = !isOpend;

  body.classList = 'opened';
  burger.style.cssText = 'transition: 0.3s; opacity: 1; z-index: 1;';
}
