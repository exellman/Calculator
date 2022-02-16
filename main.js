let btn = document.querySelectorAll(".btn");
let btnTheme = document.querySelector("#changetheme");
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
  el.addEventListener("click", changeFontSize);
});

btnTheme.addEventListener("click", () => {
  console.log("clicked");
  if (btnTheme.classList.contains("black")) {
    document.documentElement.style.setProperty("--white", "#000");
    document.documentElement.style.setProperty("--container-bg", "#F1F2F3");
    document.documentElement.style.setProperty("--switcher-bg", "#FFFFFF");
    document.documentElement.style.setProperty("--clear-btn", "#D2D3DA");
    btnTheme.classList.toggle("black");
  } else if (!btnTheme.classList.contains("black")) {
    document.documentElement.style.setProperty("--white", "#fff");
    document.documentElement.style.setProperty("--container-bg", "#17171c");
    document.documentElement.style.setProperty("--switcher-bg", "#2e2f38");
    document.documentElement.style.setProperty("--clear-btn", "#4e505f");
    btnTheme.classList.toggle("black");
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

function changeFontSize() {
  let line = outputField.innerHTML;
  if (line.length <= 6) {
    outputField.style.fontSize = "96px";
  } else if (line.length > 6 && line.length <= 10) {
    outputField.style.fontSize = 90 - (line.length - 6) * 10 + "px";
  } else if (line.length > 10) {
    outputField.style.fontSize = "50px";
  }
}
