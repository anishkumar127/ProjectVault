while (true) {
  const operation = prompt(
    "which operation do you want perform? \n Option Available \n + , - , * , / \n For exit press x"
  );
  const add = "+";
  const minus = "-";
  const multi = "*";
  const divide = "/";

  if (operation === "x") {
    alert("break");
    break;
  }
  function input() {
    const firstInput = Number(prompt("Enter First Input"));
    const secondInput = Number(prompt("Enter Second Input"));
  }
  /*
  let firstInput = 0;
  while (true) {
    firstInput = prompt("firstInput");
    if (firstInput === "=") {
      break;
    }
  }
  */

  let result = 0;

  if (operation === add) {
    input();
    result = firstInput + secondInput;
  } else if (operation === minus) {
    result = firstInput - secondInput;
  } else if (operation === multi) {
    result = firstInput * secondInput;
  } else if (operation === divide) {
    result = firstInput / secondInput;
  } else {
    alert("Please provide right operation");
  }
  alert(
    `Answer is Operation ${operation} is ${firstInput} ${operation} ${secondInput} = ${result}`
  );
}
