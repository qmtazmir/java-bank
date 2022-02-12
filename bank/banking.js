//handle deposit button event
document.getElementById('deposit-button').addEventListener
('click', function(){
// get the amount deposited


//update deposit

    const depositAmount = document.getElementById('deposit-input');

    const newDepositInputText = depositAmount.value;
    const newDepositInput = parseFloat(newDepositInputText);

    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText)
    const newDepositTotal = previousDepositAmount + newDepositInput;
  
    depositTotal.innerText = newDepositTotal;
    
    


    // updat-blance-----
    const blanceTotal = document.getElementById('updat-blance');
    const blanceTotalText = blanceTotal.innerText;
    const previousBlanceTotal= parseFloat(blanceTotalText);
    const newBlanceTotal = previousBlanceTotal + newDepositInput;
    blanceTotal.innerText = newBlanceTotal;


    depositAmount.value = '';
})