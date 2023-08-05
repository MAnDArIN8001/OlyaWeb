const buttons = document.querySelectorAll('.scroll_to');
const navigationBtns = document.querySelector('.menu').querySelectorAll('a');

for (let button of buttons) {
  button.addEventListener('click', () => {
    document
      .querySelector(button.dataset.destination)
      .scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}

for (const btn of navigationBtns) {
  btn.addEventListener('click', () => {
    document
      .querySelector(btn.dataset.destination)
      .scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}
