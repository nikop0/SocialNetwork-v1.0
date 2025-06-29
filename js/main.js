let session = new Session();
session = session.getSession();

let postBtn = document.querySelector('#post-btn');

if(session !== '') {

} else {
    window.location.href = '/';
}

postBtn.addEventListener('click', e => {
    console.log(session.user_id);
});