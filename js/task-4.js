const form = document.querySelector('.login-form');
const email = document.querySelector('[name="email"]');
const password = document.querySelector('[name="password"]');
const data = [];
const emailType = email.type;
const passwordType = password.type;

function registration(event) {
  event.preventDefault();
  const emailText = email.value;
  const passwordText = password.value;
  if (emailText == '' || passwordText == '') {
    return alert('All form fields must be filled in.');
  }
  data.emailType = emailText;
  data.passwordType =  passwordText;
  console.log(data);
  form.reset();
}

form.addEventListener('submit', registration);
