
let errors;

let validate = function() {

  errors = '';

  const fname = document.getElementById('fname');
  const sname = document.getElementById('sname');
  const mobileNumber = document.getElementById('mobileNumber');
  const homeNumber = document.getElementById('homeNumber');
  const comment = document.getElementById('comment');
  const rating = document.getElementById('rating');

  const notLettersOrSpaces = /[^a-zA-Z ]/g;
  const notNumbersOrSpaces = /[^\d ]/g;

  if (fname.value.match(notLettersOrSpaces)) {
    // console.log('Please only use letters or spaces');
    fname.classList.add('error');
    // console.log(fname.value);
    errors += 'Please only use letters or spaces' + '<br>';
  }
  if (fname.value == "") {
    fname.classList.add('error');
    errors += 'Please enter a first name' + '<br>';
  }
  if (sname.value == "") {
    sname.classList.add('error');
    errors += 'Please enter a surname' + '<br>';
  }
  if (mobileNumber.value.match(notNumbersOrSpaces)) {
    mobileNumber.classList.add('error');
    errors += 'Mobile number: Please only use 11 digits and no spaces' + '<br>';
  }
  if (mobileNumber.value == "") {
    mobileNumber.classList.add('error');
    errors += 'Please enter a mobile number' + '<br>';
  }
  if (homeNumber.value.match(notNumbersOrSpaces)) {
    homeNumber.classList.add('error');
    errors += 'Mobile number: Please only use 11 digits and no spaces' + '<br>';
  }
  if (homeNumber.value == "") {
    homeNumber.classList.add('error');
    errors += 'Please enter a home number' + '<br>';
  }

}
