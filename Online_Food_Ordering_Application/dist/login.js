
document.querySelector('#login-form').addEventListener('submit', (e) => {
    e.preventDefault();

    let usernameVal = document.querySelector('#username').value;
    let passwordVal = document.querySelector('#password').value;

    if(usernameVal === 'student@123' && String(passwordVal) === 'pass_456'){
    showPopup('Login successful!');
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 3500);
    
    } else {
    showPopup('Wrong Username or Password!');
    }
})

//  ===================== Toggle to show and hide password =================//
let eye = document.querySelector('#eye');
eye.innerHTML = '<i class="fa-solid fa-eye"></i>';

eye.addEventListener('click', () => {
    let password = document.querySelector('#password');

    if(!password.value) return;
    
    let isHidden = password.type === 'password';
    password.type = isHidden ? 'text' : 'password';
    eye.innerHTML = isHidden ? '<i class="fa-solid fa-eye-slash"></i>' : '<i class="fa-solid fa-eye"></i>';
})

// click button
const clickSound = new Audio('./sound_effects/click2.mp3');
// clickSound.preload = 'none';


function commonButtonSound(){
  clickSound.currentTime = 0;
  clickSound.play();
}

 
// ===================================== popup =========================== // 
function showPopup(message, duration = 3000) {
    const popup = document.querySelector('#popup');
    popup.textContent = message;
    popup.classList.remove('opacity-0');
    popup.classList.add('opacity-100');

    setTimeout(() => {
        popup.classList.remove('opacity-100');
        popup.classList.add('opacity-0');
    }, duration);
}