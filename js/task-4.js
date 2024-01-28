const form = document.querySelector('.login-form');
const email = document.querySelector('[name="email"]');
const password = document.querySelector('[name="password"]');
const data = {};

function registration(event) {
  event.preventDefault();
  const emailText = event.target.elements.email.value.trim();
  const passwordText = event.target.elements.password.value.trim();
  if (emailText == '' || passwordText == '') {
    return alert('All form fields must be filled in.');
  }
  data.email = emailText;
  data.password = passwordText;
  console.log(data);
  form.reset();
}

form.addEventListener('submit', registration);
