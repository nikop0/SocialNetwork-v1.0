let modal = document.querySelector('.custom-modal');

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