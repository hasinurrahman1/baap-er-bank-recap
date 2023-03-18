document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawAmountString = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountString);
    const withdrawTotalAmount = previousWithdrawAmount + newWithdrawAmount;
    withdrawTotal.innerText = withdrawTotalAmount;

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceString = balanceTotal.innerText;
    const previousBalance = parseFloat(previousBalanceString);
    const currentBalance = previousBalance - newWithdrawAmount;
    balanceTotal.innerText = currentBalance;

    withdrawField.value = '';

})