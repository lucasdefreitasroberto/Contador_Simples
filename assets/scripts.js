var IDcurrentNumber = document.getElementById("IDcurrentNumber");
var currentNumber = 0;

function increment() {
  currentNumber = currentNumber + 1;
  IDcurrentNumber.innerHTML = currentNumber;
}

function decrement() {
  currentNumber = currentNumber - 1;
  IDcurrentNumber.innerHTML = currentNumber;
}
