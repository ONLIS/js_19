"use strict";
//=====================================================
const inputField = document.getElementById("input");
const outputField = document.getElementById("output");
let lastCall = 0;
let execTimer;
//=====================================================
const enterTextFunction = () => {
  lastCall = 0;
  outputField.textContent = inputField.value;
};
const exec = () => {
  const execTime = 300;
  let nowCall = new Date().getTime();
  if (lastCall === 0) {
    lastCall = new Date().getTime();
    execTimer = setTimeout(enterTextFunction, execTime);
  } else {
    let timeDif = nowCall - lastCall;
    if (timeDif < execTime) {
      lastCall = nowCall;
      clearTimeout(execTimer);
      execTimer = setTimeout(enterTextFunction, execTime);
    }
  }
};

//=====================================================
inputField.addEventListener("keyup", exec);
