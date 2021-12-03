let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
 function setUserName() {
    ChangeUser = prompt('Please enter your name.');
    localStorage.setItem('name', ChangeUser);
    myHeading.textContent = 'Mozilla is cool, ' + ChangeUser;
  }
  if(!localStorage.getItem('ChangeUser')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }