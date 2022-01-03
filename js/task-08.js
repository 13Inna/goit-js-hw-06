const formEl = document.querySelector('.login-form');

const onFormSubmit = event => {
event.preventDefault();
const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;
  
  if (email == '' || password == '') {
    alert("All fields must be filled!");
  } 
  const formData = {
    email,
    password,
  };
  console.log(formData);
  formEl.reset();    
};

formEl.addEventListener('submit', onFormSubmit);
