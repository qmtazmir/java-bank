//handle deposit button event
const depositButton = document.getElementById("deposit-button");

function handleDeposit() {
  const depositInput = document.getElementById("deposit-input");

  const newDepositAmount = parseFloat(depositInput.value);

  const depositTotal = document.getElementById("deposit-total");

  const previousDepositAmount = parseFloat(depositTotal.innerText);

  const newDepositTotal = previousDepositAmount + newDepositAmount;

  depositTotal.innerText = newDepositTotal;

  // updat-blance-----
  const blanceTotal = document.getElementById("updat-blance");
  const previousBlanceTotal = parseFloat(blanceTotal.innerText);

  const newBlanceTotal = previousBlanceTotal + newDepositAmount;

  blanceTotal.innerText = newBlanceTotal;

  depositInput.value = "";
}

depositButton.addEventListener("click", handleDeposit);
