const modal = document.querySelector(".modal");
const productName = document.querySelector("#productName");
const productPrice = document.querySelector("#productPrice");
const form = document.querySelector("#form1");
const clock = document.querySelector(".hour");

function clickFunction() {
  modal.classList.add("opacity");
}
function removeFunction() {
  modal.classList.remove("opacity");
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(productName.value);
  console.log(productPrice.value);
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
