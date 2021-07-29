import Amplify, { Auth, API, a } from 'aws-amplify';
import awsexport from "./aws-exports";
Amplify.configure(awsexport);

const token = (async () => {
    return ((await Auth
        .currentSession()).accessToken.jwtToken)
})();


Promise.all([token]).then(async (values) => {
    
    const result = await API.get("private", "/private", {
        headers: { Authorization: `Bearer ${values[0]}` }
    });
    
    let message = document.getElementById("message");
    message.innerHTML = result;
});


