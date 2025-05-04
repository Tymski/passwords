const password = document.getElementById('password');
const passwordNumbers = document.getElementById('passwordNumbers');
const passwordSymbols = document.getElementById('passwordSymbols');
const passwordSymbols1 = document.getElementById('passwordSymbols1');
const passwordSymbolsAdd = document.getElementById('passwordSymbolsAdd');
const createPasswordButton = document.getElementById('createPasswordButton');

const numbers = "0123456789";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const basicSymbols = "!#$%&*+-=?@^_()";
const commonSymbols = numbers + lowerCaseLetters + upperCaseLetters + basicSymbols;

const randomUintBuffer = new Uint32Array(1);

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

function generateSymbols() {
    var password = "";
    for (var i = 0; i < 30; ++i) {
        password += getRandomSymbol();
    }
    return password;
}

function getRandomCharacter(characters) {
    const randomIndex = crypto.getRandomValues(randomUintBuffer)[0] % characters.length;
    return characters[randomIndex];
}

function getRandomSymbol() {
    const symbol = crypto.getRandomValues(randomUintBuffer)[0] % 100000 + 1000;
    return "&#" + symbol + ";";
}

function generatePasswordToClipboard(element) {
    navigator.clipboard.writeText(element.innerHTML);
    element.innerHTML = generateSymbols();
}

function copyToClipboard(element) {
    navigator.clipboard.writeText(element.innerHTML);
}

function addWebisteChecks(password) {
    var prefix = getRandomCharacter(numbers);
    prefix += getRandomCharacter(lowerCaseLetters);
    prefix += getRandomCharacter(upperCaseLetters);
    prefix += getRandomCharacter(basicSymbols);
    return prefix + password;
}

function generate() {
    password.innerHTML = generatePassword();
    passwordNumbers.innerHTML = generateNumber();
    passwordSymbols.innerHTML = generateSymbols();
    passwordSymbols1.innerHTML = addWebisteChecks(generateSymbols());
    passwordSymbolsAdd.innerHTML = addWebisteChecks(generateSymbols());
}

createPasswordButton.onclick = () => generatePasswordToClipboard(passwordSymbols1);
password.onclick = () => copyToClipboard(password);
passwordNumbers.onclick = () => copyToClipboard(passwordNumbers);
passwordSymbols.onclick = () => copyToClipboard(passwordSymbols);
passwordSymbols1.onclick = () => copyToClipboard(passwordSymbols1);
passwordSymbolsAdd.onclick = () => copyToClipboard(passwordSymbolsAdd);
generate();

setInterval(generate, 500);
