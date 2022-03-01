const display = document.getElementById("display");
let number;
let number2;
let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        display.innerText = "";
        break;
      case "←":
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;
      case "+":
        if (display.innerText) {
          operator = "+";
          number = display.innerText;
          display.innerText = "";
        }
        break;
      case "-":
        if (display.innerText) {
          operator = "+";
          number = display.innerText;
          display.innerText = "";
        }
      case "=":
          number2 = display.innerText;
          display.innerText = operate(number,number2,operator);
          
      default:
        display.innerText += e.target.innerText;
    }
  });
});

function add(a, b) {
  return a + b;
}
function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(a, b, operator) {
  switch (operator) {
    case "+":
      add(a, b);
      break;
    case "-":
      substract(a, b);
      break;
    case "*":
      multiply(a, b);
      break;
    case "/":
      divide(a, b);
      break;
  }
}
