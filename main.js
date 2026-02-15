const app = document.querySelector('.app');
const nums = [...document.querySelectorAll('.num')];
const oprs = [...document.querySelectorAll('.operator')];
const input = document.querySelector('.input-disp');

nums.map((num) => {
  num.addEventListener('click', getData);
});

oprs.map((opr) => {
  opr.addEventListener('click', getData);
});

let numOne = '';
let numTwo = '';
let operator = '';
let isOperatorPresent = false;
let isClearEnabled = false;
const regex = /[-+*\/=CD]/;
let total = 0;
function getData(e) {
  const data = e.target.textContent;
  if (regex.test(data)) {
    isOperatorPresent = true;
  } else {
    isOperatorPresent = false;
  }
  displayData(data);
  storeData(data);
}

function storeData(data) {
  const currentVal = input.value;

  if (numOne !== '' && !isOperatorPresent && operator !== '') {
    const [num1, num2] = currentVal.split(/[-+*\/=CD]/);
    numTwo = num2;
  } else if (numOne !== '' && operator === '' && isOperatorPresent) {
    operator = data;
  } else if (
    (numOne === '' && !isOperatorPresent) ||
    (numOne !== '' && operator === '')
  ) {
    numOne = currentVal;
  } else if (
    numOne !== '' &&
    operator !== '' &&
    numTwo !== '' &&
    regex.test(data)
  ) {
    calculate(Number(numOne), Number(numTwo), operator, data);
  }
  console.log(numOne);
  console.log(numTwo);
  console.log(operator);
}

function displayData(data) {
  const currentVal = input.value;
  input.value = currentVal + data;
}

function calculate(a, b, oprSign, data) {
  switch (oprSign) {
    case '+':
      total = a + b;
      break;
    case '-':
      total = a - b;
      break;
    case '*':
      total = a * b;
      break;
    case '/':
      total = a / b;
      break;
  }

  const oprRegex = /[-+*\/]/;
  if (oprRegex.test(data)) {
    operator = data;
  } else {
    operator = '';
  }
  displayTotal(total);
}
function displayTotal(total) {
  input.value = total + operator;
  numOne = total;
  numTwo = '';
}
function clearData() {}
function deleteData() {}
