// Assignment Code
// Query button press 
var generateBtn = document.querySelector("#generate");
var passwordBoxText = document.querySelector("#password");

// Add event listener to generate button
// Listens for the click on generateBtn (generate password button) and runs the function writePassword.
generateBtn.addEventListener("click", writePassword);

var passwordLength;
var confirmArr = [false, false, false, false];
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = "\"\\!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var confirmedCharacters;
var confirmedCharactersLength;
var generatedPassword = "";

//records user input for length of password and declines if it is not a number between 8-128
function userInputLength() {
  passwordLength = window.prompt("How many characters would you like your password to be? Please choose a number between 8 and 128.")
  if (!passwordLength) {
    return;
  }
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please input a value between 8 and 128.")
    userInputLength();
    return userInputLength;
  };
};

//confirms with user if they would like to add lowercase, uppercase, numbers, and/or special characters.
function userInputConfirm() {
  confirmArr[0] = window.confirm("Would you like to include lowercase letters?");
  confirmArr[1] = window.confirm("Would you like to include uppercase letters?");
  confirmArr[2] = window.confirm("Would you like to include numbers?");
  confirmArr[3] = window.confirm("Would you like to include special characters?");
};

// filters out any falsy vaulues
function filterX(x) {
  return x.filter(Boolean);
};

//turns all confirmed options into a single string.
function confirmedChar() {
  for (let i = 0; i < 4; i++) {
    if (confirmArr[0] == true) {
      confirmArr[0] = lowercaseLetters;
    };
    if (confirmArr[1] == true) {
      confirmArr[1] = uppercaseLetters;
    };
    if (confirmArr[2] == true) {
      confirmArr[2] = numbers;
    };
    if (confirmArr[3] == true) {
      confirmArr[3] = specialCharacters;
    };

    // filters out all falsy values from array.
    var filteredArr = filterX(confirmArr);

    // joins all index values from the filtered array together into one big string.
    confirmedCharacters = filteredArr.join("");

    // updates confirmedCharactersLength to the number of the length of the string.
    confirmedCharactersLength = confirmedCharacters.length;
  };
};

// generates random password based on confirmed characters and length requested.
function generatePassword() {
  for (let i = 0; i < passwordLength; i++) {
    var rng = (Math.floor(Math.random() * confirmedCharactersLength))
    generatedPassword += confirmedCharacters.substring(rng, rng + 1);
  };
};

// Write password to the #password input
function writePassword() {

  userInputLength();

  // checks if the prompt gave back a truthy value (user hit cancel on the first prompt.)
  // if truthy value exist, continue on with the code.
  if (passwordLength) {
    userInputConfirm();
    confirmedChar();
    generatePassword();

    // sets the box text on the html id for #password to the randomly generated password.
    passwordBoxText.textContent = generatedPassword;

    // resets the generated password for multiple reuse without refreshing the page.
    generatedPassword = "";
  }
  else {
    return;
  };
};