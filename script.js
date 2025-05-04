const password = document.getElementById('password');
const passwordNumbers = document.getElementById('passwordNumbers');
const passwordSymbols = document.getElementById('passwordSymbols');
const passwordSymbols1 = document.getElementById('passwordSymbols1');
const createPasswordButton = document.getElementById('createPasswordButton');

const numbers = "0123456789";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const basicSymbols = "!#$%&*+-=?@^_()";
const commonSymbols = numbers + lowerCaseLetters + upperCaseLetters + basicSymbols;

function generatePassword() {
    var length = 30;
    var password = "";
    for (var i = 0; i < length; ++i) {
        password += getRandomCharacter(commonSymbols);
    }
    return password;
}

function generateNumber() {
    var length = 30;
    var password = "";
    for (var i = 0; i < length; ++i) {
        password += getRandomCharacter(numbers);
    }
    return password;
}

function generateInt() {
    let array = new Int32Array(3);
    crypto.getRandomValues(array);
    return array.map(element => Math.abs(element)).join('');
}

function generateSymbols() {
    var password = "";
    for (var i = 0; i < 30; ++i) {
        password += getRandomSymbol();
    }
    return password;
}

function getRandomCharacter(characters) {
    const randomIndex = crypto.getRandomValues(new Uint32Array(1))[0] % characters.length;
    return characters[randomIndex];
}

function getRandomSymbol() {
    const symbol = crypto.getRandomValues(new Uint32Array(1))[0] % 100000 + 1000;
    return "&#" + symbol + ";";
}

function generatePasswordToClipboard(element) {
    navigator.clipboard.writeText(element.innerHTML);
    element.innerHTML = generateSymbols();
}

function generate() {
    password.innerHTML = generatePassword();
    passwordNumbers.innerHTML = generateNumber();
    passwordSymbols.innerHTML = generateSymbols();
    passwordSymbols1.innerHTML = generateSymbols();
}

createPasswordButton.onclick = () => generatePasswordToClipboard(passwordSymbols1);
generate();

setInterval(generate, 500);