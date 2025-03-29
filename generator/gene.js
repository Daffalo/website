const passwordField = document.getElementById("password");
const lengthSlider = document.getElementById("length");
const lengthDisplay = document.getElementById("length-display");

const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");

const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?/";

lengthSlider.addEventListener("input", () => {
    lengthDisplay.textContent = lengthSlider.value;
});

function generatePassword() {
    let length = lengthSlider.value;
    let chars = "";

    if (uppercaseCheckbox.checked) chars += uppercaseChars;
    if (lowercaseCheckbox.checked) chars += lowercaseChars;
    if (numbersCheckbox.checked) chars += numberChars;
    if (symbolsCheckbox.checked) chars += symbolChars;

    if (chars.length === 0) {
        alert("Please select at least one character type!");
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    passwordField.value = password;
}

function copyPassword() {
    passwordField.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
}
