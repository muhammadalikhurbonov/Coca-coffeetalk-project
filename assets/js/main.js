("use strict");

const modal = document.querySelector(".modal");
const productName = document.querySelector("#productName");
const productPrice = document.querySelector("#productPrice");
const form = document.querySelector("#form1");
const clock = document.querySelector(".hour");
const sectionMain = document.querySelector(".section_row_main");
const error = document.querySelector(".error");
const scale = document.querySelector(".scale");
let inp = document.querySelector("input[type=file]");

function clickFunction() {
  modal.classList.add("scale");
}
function removeFunction() {
  modal.classList.remove("scale");
}

let todos = JSON.parse(localStorage.getItem("todos"))
  ? JSON.parse(localStorage.getItem("todos"))
  : [];

if (todos.length) {
  GetValue();
}

function setTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

inp.addEventListener("change", () => {
  let inputImage = document.querySelector("input[type=file]").files[0];
  const filereader = new FileReader();
  filereader.readAsDataURL(inputImage);

  filereader.addEventListener("load", function () {
    let filevalue = this.result;
    const form = document.querySelector("form");
    fileDocument = filevalue;
  });
});

function ShowError(e) {
  return (error.innerHTML = e);
}

function GetValue() {
  sectionMain.innerHTML = "";
  todos.forEach((element, index) => {
    sectionMain.innerHTML += ` <div class="section_row" key="${index}">
    <div class="section_row_col">
      <div class="section_row_col_img">
        <img src="${element.productImg}" alt="" />
      </div>
    </div>
    <div class="section_row_col_title">
      <h3>${element.productName}</h3>
      <p>${element.productPrice}</p>
      <button onclick="DeleteItems(${index})">
      <span>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 8V18C5 20.2091 6.79086 22 9 22H15C17.2091 22 19 20.2091 19 18V8M14 11V17M10 11L10 17M16 5L14.5937 2.8906C14.2228 2.3342 13.5983 2 12.9296 2H11.0704C10.4017 2 9.7772 2.3342 9.40627 2.8906L8 5M16 5H8M16 5H21M8 5H3" stroke="url(#paint0_linear_1850_5838)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear_1850_5838" x1="21.9" y1="0.399999" x2="-3.85791" y2="29.4716" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFAB18"/>
<stop offset="1" stop-color="#FF2197"/>
</linearGradient>
</defs>
</svg>
      </span>
      </button>
    </div>
  </div>`;
  });
}

function DeleteItems(id) {
  let DeletedItems = todos.filter((element, index) => {
    return id !== index;
  });
  todos = DeletedItems;
  GetValue();
  setTodos();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let value = e.target.productPrice.value.trim();
  let value2 = e.target.productName.value.trim();
  if ((value.length <= 0 && value2.length <= 0) || fileDocument == undefined) {
    ShowError("Please, fill in the information!");
    e.target.reset();
    setTimeout(() => {
      ShowError("");
    }, 3000);
  } else if (value.length && value2.length <= 0) {
    ShowError("Please, fill in the information!");
    e.target.reset();
    setTimeout(() => {
      ShowError("");
    }, 3000);
  } else if (value.length <= 0 && value2.length) {
    ShowError("Please, fill in the information!");
    e.target.reset();
    setTimeout(() => {
      ShowError("");
    }, 3000);
  } else if (value.length >= 400 && value2.length >= 400) {
    ShowError("Please, Your information must not exceed 400!");
    setTimeout(() => {
      ShowError("");
    }, 3000);
  } else if (value2.length >= 400 && value.length <= 0) {
    ShowError("Please, Your information must not exceed 400!");
    setTimeout(() => {
      ShowError("");
    }, 3000);
  } else if (value.length >= 400 && value2.length <= 0) {
    ShowError("Please, Your information must not exceed 400!");
    setTimeout(() => {
      ShowError("");
    }, 3000);
  } else if (
    value2.length >= 0 &&
    value.length >= 0 &&
    fileDocument !== undefined
  ) {
    todos.push({
      productName: value2,
      productPrice: value,
      productImg: fileDocument,
    });
    localStorage.setItem("todos", JSON.stringify(todos));
    GetValue();
    e.target.reset();
  }
});

let weeks = [
  "Monday",
  "Thuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function GetDate() {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth();
  let week = date.getDay();
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  var ampm = hour >= 12 ? "pm" : "am";
  hour = hour % 12;
  hour = hour ? hour : 12;
  clock.innerHTML = `${hour < 10 ? "0" + hour : hour}:${
    minute < 10 ? "0" + minute : minute
  } <span>${ampm}</span> ${"  "}  ${day < 10 ? "0" + day : day}/${
    months[month]
  }/${year} `;
}
setInterval(GetDate, 1000);
