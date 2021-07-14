"use strict";

let fullName = document.getElementById("name");
let email = document.getElementById("email");
let mobile = document.getElementById("mobile");
let btnSubmit = document.getElementById("submit");
let error = document.getElementById("error");
var table = document.getElementById("summaryTable");
let nameColumn = document.getElementById("nameColumn");
let inputs = document.getElementsByTagName('input');
let rows = document.getElementsByTagName('tr');


btnSubmit.addEventListener("click", function () {
  if (checkValidation(fullName, mobile, email)) {
    error.style.display = "none";
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = fullName.value;
    cell2.innerHTML = mobile.value;
    cell3.innerHTML = email.value;
  } else {
    error.style.display = "block";
    error.style.color = "red";
  }
});
btnSubmit.addEventListener("click", () => {
  for (let i = 0; i < inputs.length - 1; i++) {
    inputs[i].value = "";
  }
});

const checkValidation = function (fullName, mobile, email) {
  if (checkname(fullName) && checkmobile(mobile) && checkemail(email)) {
    return true;
  } else return false;
};
function checkname(fullName) {
  var nameRegex = /^[a-zA-Z ]+$/;
  var nameFlag = false;
  if (fullName.value.length > 0 && fullName.value.length <= 20) {
    nameFlag = nameRegex.test(fullName.value);
  }
  return nameFlag;
}
function checkmobile(mobile) {
  var mobileFlag = false;
  if (mobile.value.length == 10) {
    mobileFlag = true;
  }
  return mobileFlag;
}
function checkemail(email) {
   var emailRegex =
  /^(([^<>_#!()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var emailFlag = false;
  if (email.value.length > 0 && email.value.length <= 40) {
    emailFlag = emailRegex.test(String(email.value).toLowerCase());
  }
  return emailFlag;
}
nameColumn.addEventListener("click", function () {
  var switching,
  i,
  x,
  y,
  shouldSwitch,
  dir,
  switchcount = 0;
switching = true;
dir = "asc";
while (switching) {
  switching = false;

  for (i = 1; i < rows.length - 1; i++) {
    shouldSwitch = false;
    x = rows[i].getElementsByTagName("td")[0];
    y = rows[i + 1].getElementsByTagName("td")[0];
    if (dir == "asc") {
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }

    }
  }
  for (i = 1; i < rows.length - 1; i++) {
    shouldSwitch = false;
    x = rows[i].getElementsByTagName("td")[0];
    y = rows[i + 1].getElementsByTagName("td")[0];
    if (dir == "asc") {
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    } else if (dir == "desc") {
      if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
  }
  if (shouldSwitch) {
    rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
    switching = true;
    switchcount++;
  } else {
    if (switchcount == 0 && dir == "asc") {
      dir = "desc";
      switching = true;
    }
  }
}
});
nameColumn.addEventListener("click", function () {
  for (let i = 1; i < rows.length; i++) {
    if (i % 2 != 0) {
      rows[i].style.background = "#f2f2f2";
    } else {
      rows[i].style.background = "white";
    }
  }
});

