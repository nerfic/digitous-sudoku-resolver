charset = "abcde";

function generatePassword() {
    var length = 3;
    var retVal = "";
    for (var i = 0; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return retVal;
}

var password = generatePassword();

var guessed = "";
function crack() {
    if (guessed.length === password.length) {
        return guessed === password;
    }

    for (var i = 0; i < charset.length; i++) {
        var copy = `${guessed}`;
        guessed += charset.charAt(i);
        if (crack()) {
            return true;
        } else {
            guessed = copy;
        }
    }

    return false;
}

crack();
console.log(password)
console.log(guessed);