let session = new Session();
session = session.getSession();

let posts = new Post();
posts.getPosts();

let postBtn = document.querySelector('#post-btn');

if (session !== '') {

} else {
    window.location.href = '/';
}

document.querySelector('.create-post').addEventListener('submit', e => {
    e.preventDefault();
    let post = new Post();
    post.content = document.querySelector('#post-input').value;
    post.likes = 0;
    post.user_id = session;
    post.create();
});

const likePost = () => {
    
}