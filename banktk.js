function getInputData(inputData) {
    const inputfield = document.getElementById(inputData);
    const inputTaka = parseFloat(inputfield.value);
    inputfield.value = '';
    return inputTaka;

}

function getPreviusData(previusData) {
    const previousAmount = document.getElementById(previusData);
    const previousTaka = parseFloat(previousAmount.innerText);
    return previousTaka;

}

function setDepositeAmount(previousData, newTotal) {
    const previousDepositeTaka = document.getElementById(previousData);
    previousDepositeTaka.innerText = newTotal;

}


// ---------------Deposite section handler ---------------

document.getElementById('deposite-btn').addEventListener('click', function () {
    const depositeAmount = getInputData('deposite-field');
    if (isNaN(depositeAmount) || depositeAmount < 0) {
        alert('please input any positive amount')
    } else {
        const oldDepositeAmount = getPreviusData('deposite');
        const totalDepositeAmount = depositeAmount + oldDepositeAmount;
        const totalPreviaceBalance = getPreviusData('Total-Balance');
        const totalFinalBalance = totalPreviaceBalance + depositeAmount;


        setDepositeAmount('deposite', totalDepositeAmount)
        setDepositeAmount('Total-Balance', totalFinalBalance)
        setDepositeAmount('Last-Deposite', depositeAmount)
    }

})

// -----------withdraw section handler----------------

document.getElementById('Withdraw-btn').addEventListener('click', function () {
    const withdrawFild = getInputData('Withdraw-field');
    if (isNaN(withdrawFild) || withdrawFild < 0){
        alert('please input any positive amount')
    } else {
        const previousWithdraw = getPreviusData('Withdraw');
        const totalWithdraw = withdrawFild + previousWithdraw;
        const totalPreviaceBalance = getPreviusData('Total-Balance');
        const totalFinalBalance = totalPreviaceBalance - withdrawFild;

        
        if (withdrawFild > totalPreviaceBalance) {
            alert('You have no enough money')
        }else if(totalPreviaceBalance === 0){
            alert('You have no enough money')
        } else {
            setDepositeAmount('Total-Balance', totalFinalBalance);
            setDepositeAmount('Withdraw', totalWithdraw);
            setDepositeAmount('Last-Withdraw', withdrawFild);
        }

        
    }
})
// -------Safely logout button -----------------------
document.getElementById('logout-btn').addEventListener('click',function(){
    window.location.href = 'index.html'
})