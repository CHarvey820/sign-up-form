const createAccountBtn = document.querySelector(".btnCreateAccount");
let msgVisible = false;

createAccountBtn.addEventListener("click", () => {
    const password = document.querySelector("#password").value;
    const passwordConfirm = document.querySelector("#password_confirm").value;

    if(password !== passwordConfirm && msgVisible === false){
        const passwordElement = document.querySelector(".passwordElement");
        const passwordMsg = document.createElement("p");
        passwordMsg.classList.add("passwordMsg");
        passwordMsg.innerText += `*Passwords do not match`;
        passwordElement.appendChild(passwordMsg);
        msgVisible = true;
    } else{
        //code here to submit/parse form info
    }

});