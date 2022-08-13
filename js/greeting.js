const loginForm = document.querySelector("#login-form");
const loginText = document.querySelector("#login-form input");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
const onLogin = document.querySelector("#onLogin")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function onLoginSubmit (event) {
    event.preventDefault();
    const userName = loginText.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, userName);
    sayHello(userName);
};

function sayHello(name) {
    greeting.innerText = `leave ${name}!`;
    onLogin.classList.remove(HIDDEN_CLASSNAME);
};

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
} else {
    sayHello(savedUserName);
    onLogin.classList.remove(HIDDEN_CLASSNAME);
};

loginForm.addEventListener("submit", onLoginSubmit);