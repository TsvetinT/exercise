(function () {
  "use strict";
  var registerForm, loginForm, registerBtn, loginBtn, registerInputs, loginInputs;

  function init() {
    // Get elements reference for register form
    registerForm = document.querySelector('#register-form');
    registerBtn = registerForm.querySelector('button');
    registerInputs = registerForm.querySelectorAll('input');
    // Get elements reference for login form
    loginForm = document.querySelector('#login-form');
    loginBtn = loginForm.querySelector('button');
    loginInputs = loginForm.querySelectorAll('input');
    attachListeners();
  }

  function sendRegisterData() {
    // Capture the click on register button
    event.preventDefault();
    // Object to store the information from the form
    var registerData = {};
    // Iterator to get the value from each input
    for (var i = 0; i < registerInputs.length; i++) {
      // Extracting the value from each input and storing it into variable value
      var value = registerInputs[i].value;
      // Extracting the name for each input and storing it into variable name
      var name = registerInputs[i].getAttribute('name');
      // Populating registerData object, setting the name as key and the value as value
      registerData[name] = value;
    }
    // Transform object to string(JSON)
    registerData = JSON.stringify(registerData);
    // Store the JSON string into local storage
    localStorage.setItem('user', registerData);
    console.table(registerData)
  }
  function sendLoginData() {
    // Capture the click on login button
    event.preventDefault();
    // Object to store the information from the form
    var loginData = {};
    // Iterator to get the value from each input
    for (var i = 0; i < loginInputs.length; i++) {
      // Extracting the value from each input and storing it into variable value
      var value = loginInputs[i].value;
      // Extracting the name for each input and storing it into variable name
      var name = loginInputs[i].getAttribute('name');
      // Populating loginData object, setting the name as key and the value as value
      loginData[name] = value;
    }
    console.table(loginData)
  }

  function attachListeners() {
    registerBtn.addEventListener('click', sendRegisterData.bind(this), false)
    loginBtn.addEventListener('click', sendLoginData.bind(this), false)
  }

  window.addEventListener("load", function () {
    init();
  }, false);

})();