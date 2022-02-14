let btn = document.querySelectorAll(".btn");
let outputField = document.querySelector(".output__field");
let a = 0,
  b = 0;
let operator;

btn.forEach((el) => {
  switch (el.id) {
    case "clear":
      el.addEventListener("click", clearOutput);
      break;
    case "remove":
      el.addEventListener("click", removeNum);
      break;
    case "divide":
    case "multiply":
    case "minus":
    case "plus":
      el.addEventListener("click", () => {
        doMath(el.id);
      });
      break;
    case "dot":
      el.addEventListener("click", () => {
        if (!outputField.innerHTML.includes(".")) {
          addNum(el);
        }
      });
      break;
    case "equals":
      el.addEventListener("click", doOutput);
      break;
    default:
      el.addEventListener("click", () => {
        addNum(el);
      });
  }
});

function clearOutput() {
  outputField.innerHTML = "0";
  a = 0;
  b = 0;
}

function addNum(num) {
  let line = outputField.innerHTML + num.innerHTML;
  if (line[0] === "0" && !line.includes(".")) {
    line = line.slice(1);
  }
  outputField.innerHTML = line;
}

function removeNum() {
  if (outputField.innerHTML.length > 1) {
    outputField.innerHTML = outputField.innerHTML.substring(
      0,
      outputField.innerHTML.length - 1
    );
  } else {
    outputField.innerHTML = "0";
  }
}

function doMath(op) {
  a = +outputField.innerHTML;
  operator = op;
  outputField.innerHTML = 0;
}

function doOutput() {
  let result = 0;
  b = +outputField.innerHTML;
  switch (operator) {
    case "divide":
      result = a / b;
      break;
    case "multiply":
      result = a * b;
      break;
    case "plus":
      result = a + b;
      break;
    case "minus":
      result = a - b;
      break;
  }
  outputField.innerHTML = result;
  a = b;
}
