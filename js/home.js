document.getElementById('btn-show-cash-out').addEventListener('click',function(){
    document.getElementById('cash-out-form').classList.remove('hidden');
    document.getElementById('cash-in-form').classList.add('hidden')
})
document.getElementById('btn-show-cash-in').addEventListener('click',function(){
    document.getElementById('cash-in-form').classList.remove('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
})













document.getElementById('btn-add-money').addEventListener('click',function(event){
    // console.log('home.js is connected');
    event.preventDefault();
    const addMoneyUInput = document.getElementById('add-money-input').value;
    const pinNumber =document.getElementById('pin-number').value;
    if(pinNumber==='1234'){
        const balance= document.getElementById('balance').innerText;
        const addMoneyNumber =parseFloat(addMoneyUInput);
        const balanceMoneyNumber = parseFloat(balance);
        const newBalance = addMoneyNumber + balanceMoneyNumber;
        console.log(newBalance);
        document.getElementById('balance').innerText = newBalance;
    }
    else{
        alert('Failed to add money!Please try again.')
    }
   

})
document.getElementById('btn-cash-out').addEventListener('click', function(event) {
    event.preventDefault();
    
    const cashOutInput = document.getElementById('cash-out-input').value;
    const pinNumber2 = document.getElementById('cash-out-pin').value;
    
    if (pinNumber2 !== "1234") {
        alert("Incorrect PIN. Please try again.");
        return;
    }

    const cashOutNumber = parseFloat(cashOutInput);
    const balanceMoneyNumber = parseFloat(document.getElementById('balance').innerText);

    if (isNaN(cashOutNumber) || cashOutNumber <= 0) {
        alert("Please enter a valid amount to withdraw.");
        return;
    }

    if (cashOutNumber > balanceMoneyNumber) {
        alert("Insufficient balance.");
        return;
    }

    const newBalance = balanceMoneyNumber - cashOutNumber;
    document.getElementById('balance').innerText = newBalance;
    alert(`Withdrawal successful! Your new balance is ${newBalance}`);
});
