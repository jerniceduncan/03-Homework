// Assignment Code
var generateBtn = document.querySelector("#generate");
// let lowerCaseChars = all the lowercase characters
var useLcase = "abcdefghijklmnopqrstuvwxyz";
// let upperCaseChars = all the uppercase characters
var useUcase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let numberChars = all the number characters
var useNums = "0123456789";
// let special = all the allowed special characters
var useSpecChars = "!@#$%^&*";
var passwordLength = parseInt(prompt('How many characters would you like your password to contain?'));
// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
    var newPassword = []
    console.log(passwordLength);
    if (passwordLength < 8 || passwordLength >= 129) {
        alert("Please enter vaule between 8 and 128 characters");
        return "";
    }
    // Variable to store boolean regarding the inclusion of special characters
    var hasSpecialCharacters = confirm('Click OK to confirm including special characters.');
    var hasLowerCase = confirm('Click OK to confirm including lower case characters.');
    var hasUpperCaseCharacters = confirm('Click OK to confirm including upper case characters.');
    var hasNumericCharacters = confirm('Click OK to confirm including numeric characters.');
    for (i = 0; i < passwordLength; i++) {
        var autoGen = ""
        if (hasSpecialCharacters === true) {
            newPassword.push(getRandomElement(useSpecChars))

        }
        if (hasLowerCase === true) {
            newPassword.push(getRandomElement(useLcase))
        }
        if (hasUpperCaseCharacters === true) {
            newPassword.push(getRandomElement(useUcase))

        }
        if (hasNumericCharacters === true) {
            newPassword.push(getRandomElement(useNums))
        }
        autoGen += newPassword.join("");
        autoGen = autoGen.substring(0, passwordLength)
    }
    return autoGen;
}

function getRandomElement(inputArr) {
    console.log(inputArr);
    var randomIndex = Math.floor(Math.random() * inputArr.length);
    var randomElement = inputArr[randomIndex];
    console.log(randomElement);
    return randomElement;

}