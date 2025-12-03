// DOM Elements
const loginPage = document.getElementById('login-page');
const contentPage = document.getElementById('content-page');
const passwordInput = document.getElementById('password');
const backBtn = document.getElementById('back-btn');

// The Correct Password
const SECRET_KEY = "mayapapaya";

// Function to handle login attempt
function checkPassword() {
    const value = passwordInput.value;

    if (value === SECRET_KEY) {
        // Success: Switch screens
        loginPage.classList.add('hidden');
        contentPage.classList.remove('hidden');
    } else {
        // Failure: Shake animation and clear input
        passwordInput.classList.add('shake');
        
        // Remove shake class after animation ends so it can run again
        setTimeout(() => {
            passwordInput.classList.remove('shake');
            passwordInput.value = ''; 
        }, 500);
    }
}

// Listen for "Enter" key in the password box
passwordInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        checkPassword();
    }
});

// Back Button Logic
backBtn.addEventListener('click', () => {
    contentPage.classList.add('hidden');
    loginPage.classList.remove('hidden');
    passwordInput.value = ''; // Reset password field
    passwordInput.focus();
});
