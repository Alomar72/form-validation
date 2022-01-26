
function submitHandler(e){

  const errorsDiv = document.getElementById('errors');
  let errors = '';

  let validate = function() {
    const fname = document.getElementById('fname');
    const sname = document.getElementById('sname');
    const mobileNumber = document.getElementById('mobileNumber');
    const homeNumber = document.getElementById('homeNumber');
    const comment = document.getElementById('comment');
    const rating = document.getElementById('rating');


    const specialChars = /[^a-zA-Z ]/g;

    if (fname.value.match(specialChars)) {
      // console.log('Please only use letters or spaces');
      fname.classList.add('error');
      // console.log(fname.value);
      errors += 'Please only use letters or spaces' + '<br>';
    }
    if (fname.value == "") {
      fname.classList.add('error');
      errors += 'fname needs filling' + '<br>';
    }
    if (sname.value == "") {
      sname.classList.add('error');
      errors += 'sname needs filling' + '<br>';
    }

  }

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
