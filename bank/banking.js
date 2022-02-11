//handle deposit button event
document.getElementById('deposit-button').addEventListener
('click', function(){
// get the amount deposited

    const depositAmount = document.getElementById('deposit-amount');
    const depositInput = depositAmount.value;
    console.log(depositInput);

    const depositTotal = document.getElementById('deposit-total');
    depositTotal.innerText = depositInput;
})