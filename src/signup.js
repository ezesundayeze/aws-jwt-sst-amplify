import { Auth } from 'aws-amplify';

(function () {
    const signupForm = document.getElementById('signup-form');
    require("./app");

    async function signUp(e) {
        e.preventDefault();

        const email = document.getElementById('email');
        const password = document.getElementById('password');

        try {
            const { user } = await Auth.signUp({
                username: email.value,
                password: password.value,
            });
            localStorage.setItem("username", email.value);
            location.replace("/confirm.html")
        } catch (error) {
            console.log('error signing up:', error);
        }
    }
    signupForm.addEventListener('submit', signUp);
})()
