// Deposit part
// const depositTotalElement = document.getElementById('deposit-total');
// depositTotalElement.innerText = 
document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');
    const depositValue = depositInput.value;
    const depositTotalElement = document.getElementById('deposit-total');
    let depositTotal = parseFloat(depositTotalElement.innerText);
    const balanceTotalElement = document.getElementById('balance-total');
    // depositTotal = depositTotal + depositValue
    depositInput.value = ''
    if(isNaN(depositValue) || depositValue < 0){
        alert("Please give a valid number")
        return;
    }
    depositTotalElement.innerText = parseFloat(depositValue) + depositTotal;
    balanceTotalElement.innerText = parseFloat(depositValue) + parseFloat(balanceTotalElement.innerText);
});


// withdraw part
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawValue = withdrawInput.value;
    const withdrawTotalElement  = document.getElementById('withdraw-total');
    let withdrawTotal = withdrawTotalElement.innerText;
    const balanceTotalElement = document.getElementById('balance-total');
    withdrawInput.value = ''
    if(isNaN(withdrawValue) || withdrawValue < 0){
        alert("Please give a valid number")
        return
    }
    if(parseFloat(withdrawValue) > parseFloat(balanceTotalElement.innerText)){
        alert('you have not enough money')
        return;
    }
    withdrawTotalElement.innerText = parseFloat(withdrawTotal) + parseFloat(withdrawValue);
    // console.log(parseFloat(balanceTotalElement.innerText));
    balanceTotalElement.innerText =parseFloat(balanceTotalElement.innerText) - parseFloat(withdrawValue);
    
    
})
