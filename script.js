"use strict";

const img = document.querySelector("img");

const button = document.querySelector("#startStopButton");
const reset = document.querySelector("#resetButton");
let idInterval;
let count = 0;
let forward = true;
let active = false;

const move = () => {
  if (active) {
    if (forward && count < 300) {
      count++;
      if (count == 170) {
        forward = false;
      }
    } else if (!forward && count > 0) {
      count--;
      if (count == 0) {
        forward = true;
      }
    }
    requestAnimationFrame(move);
    img.style.left = count * 5 + "px";
  }
};

button.addEventListener("click", () => {
  active = !active;
  if (active) {
    idInterval = requestAnimationFrame(move);
  } else {
    cancelAnimationFrame(idInterval);
  }
});
reset.addEventListener("click", () => {
  cancelAnimationFrame(idInterval);
  active = false;
  forward = true;
  count = 0;
  img.style.left = 0;
});
