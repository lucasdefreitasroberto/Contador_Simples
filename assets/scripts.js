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

function adjustcolors() {
  if (currentNumber > 5) {
    IDcurrentNumber.style.color = "Blue";
  } else {
    IDcurrentNumber.style.color = "Black";
  }
  if (currentNumber < -0) {
    IDcurrentNumber.style.color = "Red";
  } else {
    IDcurrentNumber.style.color = "Black";
  }
}

function stopcontador() {
  if (currentNumber >= 10) {
    document.getElementById("adicionar").disabled = true;
  } else {
    document.getElementById("adicionar").disabled = false;
  }
  if (currentNumber <= -10) {
    document.getElementById("subtrair").disabled=true;
  } else {
    document.getElementById("subtrair").disabled = false;
  }
}
