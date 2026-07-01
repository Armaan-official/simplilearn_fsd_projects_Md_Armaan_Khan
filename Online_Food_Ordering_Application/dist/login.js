
document.querySelector('#login-form').addEventListener('submit', (e) => {
    e.preventDefault();

    let username = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;

    if(username === 'student@123' && String(password) === 'pass_456'){
    alert('Login successful!');
    window.location.href = 'index.html';
    } else {
    alert('Wrong Username or Password!');
    }
})

//  ===================== Toggle to show and hide password =================//
let eye = document.querySelector('#eye');
eye.innerHTML = '<i class="fa-solid fa-eye"></i>';

eye.addEventListener('click', () => {
    let password = document.querySelector('#password');
    
    let isHidden = password.type === 'password';
    password.type = isHidden ? 'text' : 'password';
    eye.innerHTML = isHidden ? '<i class="fa-solid fa-eye-slash"></i>' : '<i class="fa-solid fa-eye"></i>';
})

 