// Assignment Code
// Query button press 
var generateBtn = document.querySelector("#generate");
var passwordLength;
var confirmArr = [false, false, false, false];
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = "\"\\!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

console.log(specialCharacters);

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
  }
  console.log(passwordLength);
}

function userInputConfirm() {
  confirmArr[0] = window.confirm("Would you like to include lowercase letters?")
  confirmArr[1] = window.confirm("Would you like to include uppercase letters?")
  confirmArr[2] = window.confirm("Would you like to include numbers?")
  confirmArr[3] = window.confirm("Would you like to include special characters?")

  console.log(confirmArr);

}

// Write password to the #password input
function writePassword() {

  userInputLength();

  userInputConfirm();




  // function generatePassword() {


  // }

  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

}







// Add event listener to generate button
// Listens for the click on generateBtn (generate password button) and runs the function writePassword.
generateBtn.addEventListener("click", writePassword);

// 