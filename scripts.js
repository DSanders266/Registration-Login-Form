// JavaScript source code
document.getElementById('register').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('registeredEmail').value.trim();
    const password = document.getElementById('registeredPassword').value.trim();

    if (!email || !password) {
        alert('All fields are required.');
        return;
    }

    localStorage.setItem('registeredUsername', username);
    localStorage.setItem('registeredPassword', password);
    alert('Registration successful!');
});

document.getElementById('login').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('emailLogin').value.trim();
    const password = document.getElementById('passwordLogin').value.trim();

    if (!email || !password) {
        alert('All fields are required.');
        return;
    }

    if (email === registeredEmail && password === registeredPassword) {
        alert('Login Successful');
    }
    else {
        alert('Incorrect email or password.')
    }
});