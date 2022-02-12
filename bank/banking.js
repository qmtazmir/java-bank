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

  //handel Withdraw button

  depositInput.value = "";
}

depositButton.addEventListener("click", handleDeposit);

document.getElementById("Withdraw-button").addEventListener("click", function () {
  const WithdrawInput = document.getElementById("Withdraw-Input");
  const WithdrawAmountText = WithdrawInput.value;
  const newWithdrawAmount = parseFloat(WithdrawAmountText);

  // set withdraw total
  const withdrawTotal = document.getElementById("updat-Withdraw");
  const previousWithdrawText = withdrawTotal.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawText);

  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

  withdrawTotal.innerText = newWithdrawTotal;

  WithdrawInput.value = "";
});
