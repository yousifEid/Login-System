function signUp() {
  var name = document.getElementById("signupName").value;
  var email = document.getElementById("signupEmail").value;
  var password = document.getElementById("signupPassword").value;

  if (name === "" || email === "" || password === "") {
    document.getElementById("inexact").innerHTML =
      "Please enter all the required fields.";
    return;
  }

  var users = JSON.parse(localStorage.getItem("users")) || [];

  var existingUser = users.find(function (user) {// التاكد من الايميل
    return user.email === email;
  });

  if (existingUser) {
    document.getElementById("inexact").innerHTML =
      "Email already exists. Please choose a different email.";
    return;
  }

  var newUser = {
    name: name,
    email: email,
    password: password,
  };

  users.push(newUser); //اضافة مستخدم جديد

  localStorage.setItem("users", JSON.stringify(users)); //اضافة وتخزين اسم المستخدم

  window.location.href = "index.html";
}

function login() {
  var email = document.getElementById("signinEmail").value;
  var password = document.getElementById("signinPassword").value;

  if (email === "" || password === "") {
    document.getElementById("failed").innerHTML =
      "Please enter both email and password.";
    return;
  }

  var users = JSON.parse(localStorage.getItem("users")) || [];

  var user = users.find(function (user) { //التاكد من الاميل والرقم 
    return user.email === email && user.password === password;
  });

  if (!user) {
    document.getElementById("failed").innerHTML =
      "Incorrect email or password.";
    return;
  }

  document.getElementById("username").innerHTML = user.name;
  window.location.href = "Welcome.html";
}

function displayUserName() {
  var userName = document.getElementById("username").innerHTML;
  if (userName) {
    var userName = "";
    userName.innerText = "Welcome " + userName;
  } else {
    window.location.href = "index.html";
  }
}

function call() {
  displayUserName();
}
