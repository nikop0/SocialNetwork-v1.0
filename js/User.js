class User {
    user_id = '';
    username = '';
    email = '';
    password = '';
    api_url = 'https://685feeb8c55df675589fac3a.mockapi.io/';

    create() {
        let data = {
            username: this.username,
            email: this.email,
            password: this.password
        }

        data = JSON.stringify(data);
        fetch(this.api_url + '/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        }).then(response => response.json())
            .then(data => {
                let session = new Session();
                session.user_id = data.id;
                session.startSession();
                window.location.href = 'main.html';
            });
    }

    login() {
        fetch(this.api_url + '/users', {
        }).then(response => response.json())
            .then(data => {
                let loginSuccessful = false;
                data.forEach(db_user => {
                    if (db_user.email === this.email && db_user.password === this.password) {
                        let session = new Session();
                        session.user_id = db_user.id;
                        session.startSession();
                        loginSuccessful = true;
                        window.location.href = '/main.html';
                    }
                });

                if (!loginSuccessful) {
                    alert('Pogresan email ili lozinka');
                }
            });
    }
}