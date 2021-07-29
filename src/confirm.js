import { Auth } from 'aws-amplify';
require("./app");

const confirmationForm = document.getElementById("confirmation-form")

async function confirmSignUp(e) {
    e.preventDefault();

    const code = document.getElementById("code");
    const username = localStorage.getItem("username")

    try {
        await Auth.confirmSignUp(username, code.value);
        console.log("Logged in susccessfully");
        location.replace("/signin.html")
    } catch (error) {
        console.log('error confirming sign up', error);
    }
}

confirmationForm.addEventListener("submit", confirmSignUp)