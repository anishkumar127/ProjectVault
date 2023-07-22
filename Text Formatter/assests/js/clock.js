function clockTimer(secs, hours, minutes) {
  hr_rotation = 30 * hours + minutes / 2; //converting current time
  min_rotation = 6 * minutes;
  sec_rotation = 6 * secs;

  //   console.log(min);
  let s_clock = document.getElementById("seconds");
  let h_clock = document.getElementById("hours");
  let m_clock = document.getElementById("minutes");

  s_clock.style.rotate = sec_rotation + "deg";
  m_clock.style.rotate = min_rotation + "deg";
  h_clock.style.rotate = hr_rotation + "deg";
}

function setTimer() {
  const date = new Date();
  let seconds = date.getSeconds();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  clockTimer(seconds, hours, minutes);
}

setInterval(setTimer, 1000);
