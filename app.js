// ambil element
const form = document.getElementById('form');
const inputEl = document.querySelector('.input');
const message = document.querySelector('.message');
const feedback = document.querySelector('.feedback');

// event form
form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (inputEl.value === '') {
    feedback.style.opacity = '1';
    setTimeout(() => {
      feedback.style.opacity = '0'
    }, 2000);
  } else {
    message.textContent = inputEl.value;
  }
})