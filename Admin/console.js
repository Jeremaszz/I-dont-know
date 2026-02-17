// Sistema de login com validação
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const Acesso = document.getElementById('loginBtn');

const ADMIN_USER = 'admin';
const ADMIN_PASSWORD = 'admin';

// Validar inputs em tempo real
function validateInputs() {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    
    const isValid = username === ADMIN_USER && password === ADMIN_PASSWORD;
    loginButton.disabled = !isValid;
}

// Listeners para validação contínua
usernameInput.addEventListener('input', validateInputs);
passwordInput.addEventListener('input', validateInputs);

// Handle do formulário
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    
    if (username === ADMIN_USER && password === ADMIN_PASSWORD) {
        console.log('Login realizado com sucesso!');
        alert('Bem-vindo Admin!');
        // Redirecionar ou fazer algo após login
    } else {
        alert('Usuário ou senha incorretos!');
        Acesso.disabled = true;
    }
});

// Desabilitar botão inicialmente
loginButton.disabled = true;