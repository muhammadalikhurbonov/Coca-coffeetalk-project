let error = document.querySelector(".error");
let passwordInput = document.querySelector("#Password");
let confirmPassword = document.querySelector("#confirmPassword");

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  let pass1 = e.target.Password.value.trim();
  let pass2 = e.target.confirmPassword.value.trim();
  let userName = e.target.userName.value.trim();
  if (
    pass1 === pass2 &&
    userName.length >= 6 &&
    pass1.length > 8 &&
    pass2.length > 8
  ) {
    localStorage.setItem(
      "DataUser",
      JSON.stringify({
        userName: userName,
        password: pass1,
      })
    );
    window.location.pathname = "/pages/login.html";
  } else if (
    pass1 === pass2 &&
    userName.length < 6 &&
    pass1.length > 8 &&
    pass2.length > 8
  ) {
    error.classList.add("showError");
    error.innerHTML =
      "Sorry, your username must between 6 and 15 characters long.";
    function ShowError() {
      error.innerHTML = "";
      error.classList.remove("showError");
    }
    setTimeout(ShowError, 3000);
  } else if (pass1 === pass2 && userName.length >= 6 && pass1.length < 8) {
    error.classList.add("showError");
    error.innerHTML =
      "Your password must to be at least 6 characters long. Please try another.";
    function ShowError() {
      error.innerHTML = "";
      error.classList.remove("showError");
    }
    setTimeout(ShowError, 3000);
  } else if (pass1 !== pass2 && userName.length >= 6 && pass1.length > 8) {
    error.classList.add("showError");
    error.innerHTML = "Those passwords didn't match. Try again.";
    function ShowError() {
      error.innerHTML = "";
      error.classList.remove("showError");
    }
    setTimeout(ShowError, 3000);
  } else if (pass1 !== pass2 && userName.length < 6 && pass1.length < 8) {
    error.classList.add("showError");
    error.innerHTML = "Fill in the information!";
    function ShowError() {
      error.innerHTML = "";
      error.classList.remove("showError");
    }
    setTimeout(ShowError, 3000);
  } else if (pass1 === pass2 && userName.length < 6 && pass1.length < 8) {
    error.classList.add("showError");
    error.innerHTML = "Fill in the information!";
    function ShowError() {
      error.innerHTML = "";
      error.classList.remove("showError");
    }
    setTimeout(ShowError, 3000);
  } else if (pass1 !== pass2 && userName.length > 6 && pass1.length < 8) {
    error.classList.add("showError");
    error.innerHTML = "Those passwords didn't match. Try again.";
    function ShowError() {
      error.innerHTML = "";
      error.classList.remove("showError");
    }
    setTimeout(ShowError, 3000);
  } else if (pass1 !== pass2 && userName.length < 6 && pass1.length < 8) {
    error.classList.add("showError");
    error.innerHTML =
      "Your password must to be at least 6 characters long. Please try another.";
    function ShowError() {
      error.innerHTML = "";
      error.classList.remove("showError");
    }
    setTimeout(ShowError, 3000);
  } else if (pass1 !== pass2 && userName.length >= 6 && pass1.length < 8) {
    error.classList.add("showError");
    error.innerHTML =
      "Your password must to be at least 6 characters long. Please try another.";
    function ShowError() {
      error.innerHTML = "";
      error.classList.remove("showError");
    }
    setTimeout(ShowError, 3000);
  } else {
    error.classList.add("showError");
    error.innerHTML = "Fill in the information!";
    function ShowError() {
      error.innerHTML = "";
      error.classList.remove("showError");
    }
    setTimeout(ShowError, 3000);
  }
});

document
  .querySelectorAll(".Eyepass")[0]
  .addEventListener("click", function (e) {
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
document
  .querySelectorAll(".Eyepass")[1]
  .addEventListener("click", function (e) {
    e.target.classList.forEach((element) => {
      if (element === "fa-eye-slash") {
        e.target.classList.add("fa-eye");
        e.target.classList.remove(e.target.classList[2]);
        confirmPassword.setAttribute("type", "text");
      } else if (element === "fa-eye"){
        e.target.classList.add("fa-eye-slash");
        e.target.classList.remove(e.target.classList[2]);
        confirmPassword.setAttribute("type", "password");
      }
    });
  });
