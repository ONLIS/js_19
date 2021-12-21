"use strict";
//=======================================================================
const greetingP = document.getElementById("greeting");
const todaySpan = document.getElementById("today");
const nowTimeSpan = document.getElementById("nowTime");
const newYearLeftSpan = document.getElementById("newYearLeft");
//=======================================================================
let timer = () => {
  let dateNow = new Date();

  let year = dateNow.getFullYear();
  let nextYear = year + 1;
  let nextYearDate = new Date(`01 january ${nextYear}`);

  let dateDif = nextYearDate.getTime() - dateNow.getTime();
  let newYearDaysLeft = Math.floor(dateDif / 86400000);

  let dayOfWeek = [
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
    "воскресенье",
  ];

  let hours = dateNow.getHours();
  let greeting = "";
  if (hours < 6) {
    greeting = "Доброй ночи!";
  } else if (hours >= 6 && hours < 11) {
    greeting = "Доброе утро!";
  } else if (hours >= 11 && hours < 18) {
    greeting = "Добрый день!";
  } else {
    greeting = "Добрый вечер!";
  }
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  let minutes = dateNow.getMinutes();
  let seconds = dateNow.getSeconds();

  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;

  return {
    greeting,
    hours,
    minutes,
    seconds,
    ampm,
    newYearDaysLeft,
    dayOfWeek: dayOfWeek[dateNow.getDay() - 1],
  };
};
let render = () => {
  let nowTime = timer();
  greetingP.textContent = nowTime.greeting;
  nowTimeSpan.textContent =
    nowTime.hours +
    ":" +
    nowTime.minutes +
    ":" +
    nowTime.seconds +
    " " +
    nowTime.ampm;
  newYearLeftSpan.textContent = nowTime.newYearDaysLeft;
  todaySpan.textContent = nowTime.dayOfWeek;
};
//=======================================================================
setInterval(render, 1000);
