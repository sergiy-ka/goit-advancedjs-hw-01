import throttle from 'lodash/throttle';

const form = document.querySelector('.feedback-form');
const email = form.querySelector('.feedback-form-email');
const message = form.querySelector('.feedback-form-message');
const feedbackFormStateKey = 'feedback-form-state';

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

setFormData();

function onFormInput(event) {
  const formData = {
    email: email.value,
    message: message.value,
  };

  localStorage.setItem(feedbackFormStateKey, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();

  const formData = {
    email: email.value,
    message: message.value,
  };

  console.log(formData);

  localStorage.removeItem(feedbackFormStateKey);
  form.reset();
}

function setFormData() {
  const savedData = localStorage.getItem(feedbackFormStateKey);

  if (savedData) {
    const parsedData = JSON.parse(savedData);
    email.value = parsedData.email;
    message.value = parsedData.message;
  }
}
