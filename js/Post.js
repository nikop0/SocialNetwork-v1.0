class Post {
    post_id = '';
    user_id = '';
    content = '';
    likes = '';
    api_url = 'https://685feeb8c55df675589fac3a.mockapi.io/';
    create() {
        let data = {
            user_id: this.user_id,
            content: this.content,
            likes: this.likes
        }

        data = JSON.stringify(data);

        fetch(this.api_url + '/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: data
        }).then(response => response.json())
            .then(data => {
                let posts = document.querySelector('.posts');
                let newPost = document.createElement('div');
                newPost.innerHTML = `<p>${data.content}</p>`;
                newPost.classList.add('single-post');
                posts.prepend(newPost);
            });
    }

    getPosts() {
        fetch(this.api_url + '/posts', {
        }).then(response => response.json())
            .then(data => {
                data.forEach(db_data => {
                    let posts = document.querySelector('.posts');
                    let newPost = document.createElement('div');
                    newPost.innerHTML = `<p>${db_data.content}</p>`;
                    newPost.classList.add('single-post');
                    posts.prepend(newPost);
                });
            });
    }
    likePost() {
        fetch(this.api_url + `/posts/${this.post_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                user_id: this.user_id,
                content: this.content,
                likes: this.likes++,
            })
        }).then(response => response.json())
            .then(data => {
                console.log('lajkovan post' + data);
            });
    }
}