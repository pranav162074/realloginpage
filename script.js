const loginForm = document.getElementById('loginForm');
const formTitle = document.getElementById('formTitle');
const submitBtn = document.getElementById('submitBtn');
const switchMode = document.getElementById('switchMode');
const toggleText = document.getElementById('toggleText');

let isLoginMode = false; // Start in Register mode

// Toggle between Login and Register
switchMode.addEventListener('click', (e) => {
    e.preventDefault();
    isLoginMode = !isLoginMode;

    if (isLoginMode) {
        formTitle.textContent = "Login";
        submitBtn.textContent = "Login";
        toggleText.textContent = "Don't have an account?";
        switchMode.textContent = "Sign Up";
    } else {
        formTitle.textContent = "Register";
        submitBtn.textContent = "Create Account";
        toggleText.textContent = "Already have an account?";
        switchMode.textContent = "Login";
    }
});

// Handle Form Submission
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Decide which URL to hit based on the mode
    const endpoint = isLoginMode ? '/api/login' : '/api/register';
    
    try {
        const response = await fetch(`https://realloginpage-production.up.railway.app${endpoint}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (response.ok) {
            alert(data.message);
            if (isLoginMode && data.token) {
                localStorage.setItem('token', data.token);
                // Redirect logic would go here
            } else if (!isLoginMode) {
                // If they just registered, flip them back to login
                switchMode.click(); 
            }
        } else {
            alert("Error: " + data.message);
        }
    } catch (error) {
        console.error("Connection error:", error);
        alert("Server is offline. Did you run 'node backend/server.js'?");
    }
});

function togglePassword(el) {
    const password = document.getElementById("password");
    if (password.type === "password") {
        password.type = "text";
        el.textContent = "🙈";
    } else {
        password.type = "password";
        el.textContent = "👁️";
    }
}

switchMode.click(); // Initialize to Register mode on page load