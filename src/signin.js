import { Auth } from 'aws-amplify';
require("./app");
const signinForm = document.getElementById('signin-form');

async function signIn(e) {
    e.preventDefault();
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    try {
        const user = await Auth.signIn(email.value, password.value);
        console.log("Logged in successfully", user)
    } catch (error) {
        console.log('error signing in', error);
    }
}

signinForm.addEventListener("submit", signIn)