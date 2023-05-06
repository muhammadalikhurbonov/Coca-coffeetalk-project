let passwordInput = document.querySelector("#Password");
let usernameInput = document.querySelector("#userName");
let error = document.querySelector(".error");

document.querySelector(".Eyepass").addEventListener("click", function (e) {
  e.target.classList.forEach((element) => {
    if (element === "fa-eye-slash") {
      e.target.classList.add("fa-eye");
      e.target.classList.remove(e.target.classList[2]);
      passwordInput.setAttribute("type", "text");
    } else if (element === "fa-eye") {
      e.target.classList.add("fa-eye-slash");
      e.target.classList.remove(e.target.classList[2]);
      passwordInput.setAttribute("type", "password");
    }
  });
});

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  let username = e.target.userName.value.trim();
  let password = e.target.Password.value.trim();

  let userNameLocal = JSON.parse(localStorage.getItem("DataUser")).userName;
  let passwordLocal = JSON.parse(localStorage.getItem("DataUser")).password;

  if (username === userNameLocal && password === passwordLocal) {
    window.location.pathname = "/pages/main.html";
    e.target.reset();
  } else {
    error.classList.add("showError");
    error.innerHTML = "Wrong Credentials! Invalid username or password";
    e.target.Password.value = null;
    function ShowError() {
      error.innerHTML = "";
      error.classList.remove("showError");
    }
    setTimeout(ShowError, 3000);
  }
});
