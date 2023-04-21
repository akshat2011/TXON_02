let currentResult = '0';
let previousResult = null;
let currentOperator = null;
let resultDisplayed = false;

function updateResult(result) {
  document.getElementById('result').value = result;
}

function appendNumber(number) {
  if (currentResult === '0' || resultDisplayed) {
    currentResult = number;
    resultDisplayed = false;
  } else {
    currentResult += number;
  }
  updateResult(currentResult);
}

function operate(operator) {
  if (currentOperator === null) {
    previousResult = currentResult;
  } else {
    previousResult = eval(previousResult + currentOperator + currentResult);
  }
  currentOperator = operator;
  currentResult = '0';
  updateResult(currentResult);
}

function calculate() {
  if (currentOperator !== null) {
    currentResult = eval(previousResult + currentOperator + currentResult);
    previousResult = null;
    currentOperator = null;
    resultDisplayed = true;
    updateResult(currentResult);
  }
}

function clearResult() {
  currentResult = '0';
  previousResult = null;
  currentOperator = null;
  resultDisplayed = false;
  updateResult(currentResult);
}

function backspace() {
  if (currentResult.length === 1) {
    currentResult = '0';
  } else {
    currentResult = currentResult.slice(0, -1);
  }
  updateResult(currentResult);
}

document.addEventListener('keydown', function(event) {
  const keyCode = event.keyCode;
  if (keyCode >= 48 && keyCode <= 57) {
    const number = String.fromCharCode(keyCode);
    appendNumber(number);
  } else if (keyCode === 46 || keyCode === 8) {
    backspace();
  } else if (keyCode === 13) {
    calculate();
  } else if (keyCode === 27) {
    clearResult();
  } else if (keyCode === 106) {
    operate('*');
  } else if (keyCode === 107) {
    operate('+');
  } else if (keyCode === 109) {
    operate('-');
  } else if (keyCode === 111) {
    operate('/');
  }
});

