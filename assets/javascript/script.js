// Assignment Code
// Query button press 
var generateBtn = document.querySelector("#generate");
var passwordLength;

var confirmArr = [false, false, false, false];
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = "\"\\!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var confirmedCharacters;
var confirmedCharactersLength;
var generatedPassword;

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
}

//confirms with user if they would like to add lowercase, uppercase, numbers, and/or special characters.
function userInputConfirm() {
  confirmArr[0] = window.confirm("Would you like to include lowercase letters?");
  confirmArr[1] = window.confirm("Would you like to include uppercase letters?");
  confirmArr[2] = window.confirm("Would you like to include numbers?");
  confirmArr[3] = window.confirm("Would you like to include special characters?");
};

//turns all confirmed options into a single string.
function confirmedChar() {
  for (let i = 0; i < 4; i++) {
    if (confirmArr[0] == true) {
      confirmArr[0] = lowercaseLetters;
    }
    if (confirmArr[1] == true) {
      confirmArr[1] = uppercaseLetters;
    }
    if (confirmArr[2] == true) {
      confirmArr[2] = numbers;
    }
    if (confirmArr[3] == true) {
      confirmArr[3] = specialCharacters;
    }
    function filterArr(arr) {
      return arr.filter(Boolean);
    };
    var filteredArr = filterArr(confirmArr);
    confirmedCharacters = filteredArr.join("");
    return confirmedCharacters;
  };
};



function generatePassword() {
  for (let i = 0; i < userInputLength; i++) {
    var rng = (Math.floor(Math.random() * confirmedCharactersLength))
    generatedPassword += confirmedCharacters.substring(rng, rng + 1);
  };
  return generatedPassword;
};

// Write password to the #password input
function writePassword() {

  userInputLength();
  userInputConfirm();
  confirmedChar();
  generatePassword();

  confirmedCharactersLength = confirmedCharacters.length;

  console.log(passwordLength);
  console.log(confirmArr);
  console.log(confirmedCharacters);
  console.log(confirmedCharactersLength);
  console.log(generatedPassword);


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};



// const str = "abcdefg";
// const strlength = 7;
// result = "";
// function randompass(passwordLength) {
//   for (let i = 0; i < passwordLength; i++) {
//     var rng = (Math.floor(Math.random() * strlength))
//     console.log(rng);
//     result += str.substring(rng, rng + 1);
//   }
//   console.log(result);
//   return result;
// };

// randompass(10)

// Add event listener to generate button
// Listens for the click on generateBtn (generate password button) and runs the function writePassword.
generateBtn.addEventListener("click", writePassword);

// 