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
document.getElementById('hamburgerMenu').addEventListener('click', function () {
    const dropdown = document.getElementById('dropdownMenu');

    // Toggle the dropdown menu
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
});

// Optional: Close the dropdown when clicking outside
document.addEventListener('click', function (event) {
    const dropdown = document.getElementById('dropdownMenu');
    const menu = document.getElementById('hamburgerMenu');

    if (!menu.contains(event.target)) {
        dropdown.style.display = 'none';
    }
});
