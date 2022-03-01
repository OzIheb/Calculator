const display = document.getElementById("display");
let number;
let operator;
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

          number= parseInt(display.innerText);
          display.innerText = "";
        }
        break;
      case "-":
        if (display.innerText) {
          operator = "+";
          number= parseInt(display.innerText);
          display.innerText = "";
        }
      case "=":

          number2= parseInt(display.innerText);
          display.innerText = operate(number,number2,operator);
          
          break;
          
      default:
        display.innerText += e.target.innerText;
    }
  });
});

function add(a, b) {
  return a+b;
}
function substract(a, b) {
  return a-b;
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
      return add(a, b);
      break;
    case "-":
      return substract(a, b);
      break;
    case "*":
      return multiply(a, b);
      break;
    case "/":
      return divide(a, b);
      break;
  };
}
