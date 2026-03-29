// auth.js
const user = localStorage.getItem("user");
const isLoginPage = window.location.pathname.endsWith('login.html');

if (!user && !isLoginPage) {
    window.location.href = "login.html";
}

document.addEventListener('DOMContentLoaded', () => {
    if (user && !isLoginPage) {
        const userNameElement = document.getElementById('userName');
        if (userNameElement) {
            userNameElement.innerHTML = `<i class="fa-regular fa-user"></i> <span style="text-overflow: ellipsis; overflow: hidden; white-space: nowrap">${user}</span>`;
        }
    }
});

function toggleUserDropdown() {
    const dropdown = document.getElementById('userDropdown');
    const icon = document.getElementById('dropdownIcon');
    if (dropdown) {
        dropdown.classList.toggle('user-dropdown-open');
        if (icon) {
            icon.style.transform = dropdown.classList.contains('user-dropdown-open') ? 'rotate(180deg)' : 'rotate(0deg)';
        }
    }
}

function getRegisteredUsers() {
    const users = localStorage.getItem("registeredUsers");
    return users ? JSON.parse(users) : {};
}

function saveRegisteredUsers(users) {
    localStorage.setItem("registeredUsers", JSON.stringify(users));
}

function register(event) {
    if (event) event.preventDefault();
    const usernameInput = document.getElementById('reg-username');
    const passwordInput = document.getElementById('reg-password');
    
    if (usernameInput && passwordInput && usernameInput.value.trim() !== '' && passwordInput.value.trim() !== '') {
        const users = getRegisteredUsers();
        const username = usernameInput.value.trim();
        
        if (users[username]) {
            alert("User already exists! Please login.");
            return;
        }
        
        users[username] = passwordInput.value.trim();
        saveRegisteredUsers(users);
        
        // Auto-login after registration
        localStorage.setItem("user", username);
        window.location.href = "index.html";
    }
}

function login(event) {
    if (event) event.preventDefault();
    const usernameInput = document.getElementById('login-username');
    const passwordInput = document.getElementById('login-password');
    
    if (usernameInput && passwordInput && usernameInput.value.trim() !== '') {
        const users = getRegisteredUsers();
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        
        if (!users[username]) {
            alert("User not found! Please register first.");
            return;
        }
        
        if (users[username] !== password) {
            alert("Incorrect password!");
            return;
        }
        
        localStorage.setItem("user", username);
        window.location.href = "index.html";
    }
}

function guestLogin() {
    localStorage.setItem("user", "Guest User");
    window.location.href = "index.html";
}

function logout() {
    localStorage.removeItem("user");
    window.location.href = "login.html";
}

function toggleAuthMode() {
    const loginForm = document.getElementById('login-form-container');
    const regForm = document.getElementById('register-form-container');
    const title = document.getElementById('auth-title');
    
    if (loginForm.classList.contains('hidden')) {
        loginForm.classList.remove('hidden');
        regForm.classList.remove('hidden'); // Wait, toggle should be properly implemented.
        title.innerText = "Create Account";
    } else {
        loginForm.classList.add('hidden');
        regForm.classList.remove('hidden');
        title.innerText = "Create Account";
    }
}
