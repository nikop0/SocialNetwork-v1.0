let session = new Session();
session = session.getSession();
let modal = document.querySelector('.custom-modal');

if(session != '') {
    window.location.href = 'main.html';
}

const openModal = () => {
    modal.style.display = 'block'; 
}

const closeModal = () => {
    modal.style.display = 'none';
}

document.querySelector('#registrationForm').addEventListener('submit', e => {
    e.preventDefault();
    let user = new User();
    user.username = document.querySelector('#registerUsername').value;
    user.email = document.querySelector('#registerEmail').value;
    user.password = document.querySelector('#registerPassword').value;
    user.create();
});

document.querySelector('#login-form').addEventListener('submit', e => {
    e.preventDefault();

    let email = document.querySelector('#loginEmail').value;
    let password = document.querySelector('#loginPassword').value;

    let user = new User();
    user.email = email;
    user.password = password;
    user.login();
});