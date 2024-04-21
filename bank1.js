let balance = 0;

function updateBalance() {
    document.getElementById('balance').textContent = balance;
}

function deposit() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (!isNaN(amount) && amount > 0) {
        balance += amount;
        updateBalance();
    } else {
        alert('Please enter a valid amount.');
    }
}

function withdraw() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (!isNaN(amount) && amount > 0) {
        if (amount <= balance) {
            balance -= amount;
            updateBalance();
        } else {
            alert('Insufficient balance.');
        }
    } else {
        alert('Please enter a valid amount.');
    }
}
