
const errorsDiv = document.getElementById('errors');

function submitHandler(e){

  validate();

  if (errors) {
    errorsDiv.innerHTML = errors;
  } else {
    errorsDiv.innerHTML = 'Form submitted';
  }

  // if (errors == null || errors == '') {
  //   console.log('form submitted');
  // }


  e.preventDefault();
}

const form = document.getElementsByClassName('rating-form')[0];

form.addEventListener('submit', submitHandler);
