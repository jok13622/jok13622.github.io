document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const data = {
        username: username,
        password: password
    };

    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = '/dashboard'; // Redirect to dashboard or another page
        } else {
            document.getElementById('message').textContent = data.message;
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('message').textContent = 'An error occurred. Please try again.';
    });
});
