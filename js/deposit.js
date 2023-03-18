document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field')
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    const depositTotal = document.getElementById('deposit-total')
    const previousDepositAmountString = depositTotal.innerText
    const previousDepositAmount = parseFloat(previousDepositAmountString);
    const depositTotalAmount = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = depositTotalAmount;

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceString =balanceTotal.innerText;
    const previousBalance = parseFloat(previousBalanceString);
    const currentBalance= previousBalance + newDepositAmount;
    balanceTotal.innerText = currentBalance;
    
    depositField.value = '';
})