function getInputData(inputData){
    const inputfield =document.getElementById(inputData);
    const inputTaka = parseFloat(inputfield.value);
    inputfield.value = '';
    return inputTaka;
}

function getPreviusData(previusData){
    const previousAmount = document.getElementById(previusData);
    const previousTaka = parseFloat(previousAmount.innerText);

    return previousTaka;
}

function setDepositeAmount(previousData , newTotal){
    const previousDepositeTaka = document.getElementById(previousData);
    previousDepositeTaka.innerText = newTotal;
}







document.getElementById('deposite-btn').addEventListener('click', function(){
    const depositeAmount = getInputData('deposite-field');
    const oldDepositeAmount = getPreviusData('deposite');
    const totalDepositeAmount = depositeAmount + oldDepositeAmount;
    const totalPreviaceBalance = getPreviusData('Total-Balance');
    const totalFinalBalance = totalPreviaceBalance + depositeAmount;


    setDepositeAmount('deposite',totalDepositeAmount)
    setDepositeAmount('Total-Balance',totalFinalBalance)
    setDepositeAmount('Last-Deposite',depositeAmount)

})