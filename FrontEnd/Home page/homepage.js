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

document.addEventListener('DOMContentLoaded', function () {
    // Add event listener to the Map link
    document.getElementById('mapButton').addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the link from navigating away

        // Get the main content area by its ID
        const mainContent = document.getElementById('mainContent');

        // Replace the content inside the main section with the map image
        mainContent.innerHTML = `
            <h1 style ="color:silver">Smart Mart Map</h1>
            <div class="map-container">
                <img src="image/Mart map.png" alt="Smart Mart Map" style="width: 100%; height: auto;">
            </div>
        `;
    });
});

const cardsWrapper = document.getElementById('cardsWrapper');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
const totalCards = 8; // Number of cards

// Update dots
function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

// Move to the next card
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalCards;
    cardsWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();
});

// Move to the previous card
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalCards) % totalCards;
    cardsWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();
});

// Add click events to dots for direct navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        cardsWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateDots();
    });
});

// Initialize dots on load
updateDots();


