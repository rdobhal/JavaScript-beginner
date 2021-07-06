'use strict';
let fullName = document.getElementById('name');
let email = document.getElementById('email');
let mobile = document.getElementById('mobile');
let btnSubmit = document.getElementById('submit');
let error = document.getElementById('error');
var table = document.getElementById('summaryTable');

btnSubmit.addEventListener('click', function () {
  if (checkValidation(fullName, mobile, email)) {
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = fullName.value;
    cell2.innerHTML = mobile.value;
    cell3.innerHTML = email.value;
    error.style.display = 'none';
  } else {
    error.style.display = 'block';
    error.style.color = 'red';
  }
});

const checkValidation = function (fullName, mobile, email) {
  var nameRegex = new RegExp('^[a-zA-Z ]{1,20}$');
  var mobileRegex = new RegExp('^[0-9]{10}$');
  var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (
    fullName.value.length == 0 ||
    mobile.value.length == 0 ||
    email.value.length == 0
  ) {
    return false;
  } else if (
    String(nameRegex.test(fullName)) &&
    String(mobileRegex.test(mobile)) &&
    String(emailRegex.test(email))
  ) {
    return true;
  } else {
    return false;
  }
};
