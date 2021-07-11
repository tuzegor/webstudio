let openModalBtn = document.querySelector('[data-modal-open]');
let closeModalBtn = document.querySelector('[data-modal-close]');
let modal = document.querySelector('[data-modal]');

function openModal() {
  modal.classList.remove('is-hidden');
}

function closeModal() {
  modal.classList.add('is-hidden');
}

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
