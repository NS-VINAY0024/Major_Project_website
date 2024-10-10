// Simulated OTP sending and verification process

document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const phoneNumber = document.getElementById('phone-number').value;
    if (phoneNumber) {
        // Simulate OTP sending (In real scenarios, make an AJAX call to backend to send OTP)
        console.log('OTP sent to:', phoneNumber);

        // Show the OTP pop-up
        document.getElementById('popup').style.display = 'flex';

        // Generate a random OTP (simulated)
        const generatedOtp = Math.floor(100000 + Math.random() * 900000);
        console.log('Generated OTP (for testing):', generatedOtp);

        // Store OTP in session for comparison (for simulation purposes)
        sessionStorage.setItem('otp', generatedOtp);
    }
});

// OTP verification
document.getElementById('verify-btn').addEventListener('click', function () {
    const enteredOtp = document.getElementById('otp-input').value;
    const storedOtp = sessionStorage.getItem('otp');

    if (enteredOtp == storedOtp) {
        alert('OTP Verified! Redirecting to login page...');

        // Redirect to the login page after successful OTP verification
        window.location.href = 'login.html';
    } else {
        alert('Invalid OTP. Please try again.');
    }
});

// Close pop-up when 'X' is clicked
document.querySelector('.close-btn').addEventListener('click', function () {
    document.getElementById('popup').style.display = 'none';
});

// Close pop-up when clicking outside the box
window.addEventListener('click', function (event) {
    const popup = document.getElementById('popup');
    if (event.target == popup) {
        popup.style.display = 'none';
    }
});
