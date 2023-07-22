const extract_text = document.getElementById("extract_text");
const text_display = document.getElementById("text_display");

function upper() {
  let value = extract_text.value;
  value = value.toUpperCase();
  console.log(value);
  text_display.innerHTML = value;
  // extract_text.innerHTML = value;
  // extract_text.innerText = value;
}
function lower() {
  let value = extract_text.value;
  value = value.toLowerCase();
  text_display.innerHTML = value;
}

function word() {
  let value = extract_text.value;
  let arr = value.split(" ");
  text_display.innerHTML = arr.length;
}

function character() {
  let value = extract_text.value;
  let arr = value.split("");
  console.log(arr);
  text_display.innerHTML = arr.length;
}

function clearBtn() {
  extract_text.value = "";
}

// DARK THEME

themeChange();
function themeChange() {
  let dark = document.getElementById("dark");
  dark.classList.toggle("hidden");
  let light = document.getElementById("light");
  light.classList.toggle("hidden");
  let body = document.getElementById("body");
  body.classList.toggle("dark");
}

// GAME TIMER

let timeDuration = 0;
let leftDuration = timeDuration;

let timer = null;
let timeElapsed = 0;

function onGame() {
  console.log("timer", timer);
  clearInterval(timer);
  console.log("timer", timer);
  timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
  if (leftDuration >= 0) {
    leftDuration++;
    timeElapsed++;
    const text = document.getElementById("text");
    // text.textContent = leftDuration + "s";
    text.textContent = secondsToTime(leftDuration);
  } else {
    finishGame();
  }
}
function secondsToTime(secs) {
  var h = Math.floor(secs / (60 * 60));

  var divisor_for_minutes = secs % (60 * 60);
  var m = Math.floor(divisor_for_minutes / 60);

  var divisor_for_seconds = divisor_for_minutes % 60;
  var s = Math.ceil(divisor_for_seconds);
  // let clock = document.getElementById("seconds");
  // let deg = Number(Math.floor(360 / 60));
  // deg = Number(deg) * Number(s);
  // let rot = `rotate-[${deg}deg]`;
  // clock.classList.add(rot);
  // setInterval(() => clock.classList.remove(rot), 1000);
  return ` ${h ? h + "h" : "00"}: ${m ? m + "m" : "00"}:${s ? s + "s" : "00"} `;
}

function finishGame() {
  console.log(timer);
  clearInterval(timer);
}
