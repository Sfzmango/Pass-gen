// Assignment Code
// Query button press 
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  //records user input for length of password and declines if it is not a number between 8-128
  function userInputLength() {
    var passwordLength = prompt("How many characters would you like your password to be? Please choose a number between 8 and 128.")
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Please input a value between 8 and 128.")
      userInput();
      return userInput;
    }
    if (!passwordLength) {
      return;
    }
    console.log(passwordLength);
  }

  userInputLength();






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