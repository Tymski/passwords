function generatePassword() {
    var length = 30;
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&*+-=?@^_()";
    var password = "";
    for (var i = 0; i < length; ++i) {
        password += getRandomCharacter(charset);
    }
    return password;
}

function generateNumber() {
    var length = 30;
    var charset = "0123456789";
    var password = "";
    for (var i = 0; i < length; ++i) {
        password += getRandomCharacter(charset);
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

function generatePasswordToClipboard() {
    navigator.clipboard.writeText(document.getElementById('passwordSymbols1').innerHTML);
    document.getElementById('passwordSymbols1').innerHTML = generateSymbols();
}

function generate() {
    document.getElementById('password').innerHTML = generatePassword();
    document.getElementById('passwordNumbers').innerHTML = generateNumber();
    document.getElementById('passwordSymbols').innerHTML = generateSymbols();
    document.getElementById('passwordSymbols1').innerHTML = generateSymbols();
}
document.getElementById('createPasswordButton').onclick = generatePasswordToClipboard;
generate();

setInterval(generate, 500);