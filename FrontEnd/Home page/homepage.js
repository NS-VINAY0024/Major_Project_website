// Get elements for the hamburger menu and login status
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const loginStatus = document.getElementById('login-status');

// Toggle the dropdown menu
hamburger.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

// Simulated login status (In real-world scenarios, this would be dynamic)
const userLoggedIn = false; // Set to true if the user is logged in

// Update login status based on the user's authentication
if (userLoggedIn) {
    loginStatus.innerHTML = 'Logged in';
} else {
    loginStatus.innerHTML = '<a href="login_page.html">Login</a></p>';
}
