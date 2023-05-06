// Screen page functions

let Fullhour = document.querySelector(".first_screen_page_time_hour");
let FullDate = document.querySelector(".first_screen_page_time_date");

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
  Fullhour.innerHTML = `${hour < 10 ? "0" + hour : hour}:${
    minute < 10 ? "0" + minute : minute
  } <span>${ampm}</span>`;
  FullDate.innerHTML = `${weeks[week]}, ${day < 10 ? "0" + day : day} ${
    months[month]
  } ${year}`;
}
setInterval(GetDate, 1000);
