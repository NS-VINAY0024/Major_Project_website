// Get the login status element
const loginStatus = document.getElementById('login-status');

// Simulated login status (In real-world scenarios, this would be dynamic)
const userLoggedIn = false; // Set to true if the user is logged in

// Update login status based on the user's authentication
if (userLoggedIn) {
    loginStatus.innerHTML = 'Logged in';
} else {
    loginStatus.innerHTML = '<a href="login_page.html">Login</a>';
}
