const circle = "O";
const cross = "X";
let times = 0;
function getValue(e) {
  console.log(e.target);
  //   console.log(e.currentTarget);

  if (e.target.innerText === "") {
    if (times === 0) {
      e.target.innerText = circle;

      times += 1;
    } else {
      e.target.innerText = cross;
      times -= 1;
    }
  }
}
