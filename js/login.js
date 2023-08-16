document.getElementById('submit-btn').addEventListener('click', function () {
    const email = document.getElementById('user-email').value;
    const password = document.getElementById('user-password').value;
    if (email === 'fahim@mail.com' && password === '909090') {
        window.location.href = 'bank.html'
    }
    else {
        alert('invalid user')
    }
})