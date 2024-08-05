"use strict"
const form = document.getElementById("form");
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const password2 = document.getElementById("password2")

form.addEventListener("submit", e => {
    e.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success");
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error")

    errorDisplay.innerText = "";
    inputControl.classList.add("success");
    inputControl.classList.remove("error")
}

const isValidEmail = email => {
    return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === "") {
        setError(username, "Username is required")
    } else {
        setSuccess(username)
    }

    if (emailValue === "") {
        setError(email, "Email is required")
    } else if (!isValidEmail(emailValue)) {
        setError(email, "Please set a valid email address")
    } else {
        setSuccess(email)
    }

    // Number(passwordValue)

    if (passwordValue === "") {
        setError(password, "Password is required")
    } else if (passwordValue.length <= 8) {
        setError(password, "Password must be more than 8 characters")
    } else {
        setSuccess(password)
    }

    if (password2Value === "") {
        setError(password2, "Please confirm password")
    } else if (password2Value !== passwordValue) {
        setError(password2, "The passwords don't match")
    } else {
        setSuccess(password2)
    }
}


