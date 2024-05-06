const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;
const localStorageKey = 'feedback-form-state';

function saveFormData() {
  const formData = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

function populateFormFields() {
  const savedData = JSON.parse(localStorage.getItem(localStorageKey));
  if (savedData) {
    emailInput.value = savedData.email;
    messageInput.value = savedData.message;
  }
}

populateFormFields();

form.addEventListener('input', saveFormData);

form.addEventListener('submit', event => {
  event.preventDefault();

  const emailValue = emailInput.value.trim();
  const messageValue = messageInput.value.trim();

  if (emailValue && messageValue) {
    const formData = {
      email: emailValue,
      message: messageValue,
    };
    console.log(formData);
    localStorage.removeItem(localStorageKey);
    form.reset();
  } else {
    alert('Fill all fields!');
  }
});