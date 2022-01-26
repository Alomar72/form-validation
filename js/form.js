function validateForm() {
  const fname = document.getElementById('fname');
  const sname = document.getElementById('sname');
  const mobileNumber = document.getElementById('mobileNumber');
  const homeNumber = document.getElementById('homeNumber');
  const comment = document.getElementById('comment');
  const rating = document.getElementById('rating');
  const errorsDiv = document.getElementById('errors');

  console.log(fname);
  let errorMessage = '';
  if (fname.value == "") {
    errorMessage += 'fname needs filling' + '<br>';
  }
  if (sname.value == "") {
    errorMessage += 'sname needs filling' + '<br>';
  }
  errorsDiv.innerHTML = errorMessage;
}

function submitHandler(e){
  console.log('Form submitted');

  validateForm();
  e.preventDefault();
}

const form = document.getElementsByClassName('rating-form')[0];

form.addEventListener('submit', submitHandler);
