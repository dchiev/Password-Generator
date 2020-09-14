// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Arrays for characters
var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericChar = ["1", "2","3", "4","5","6","7","8","9"];
var specialChar = ["!","?","$","\&", "\\", "%"];

var confirmUpper= confirm("Do you want upper case characters?");
var confirmNumeric = confirm("Do you want numeric characters?");
var confirmSpecial = confirm("Do you want special characters?"); 

// for loop for lower case characters
function generatePassword () {
  password=""
  for (var i = 0; i <= 10; i++) {

    password = password + lowerCaseChar[ (Math.floor(Math.random() * Math.floor(lowerCaseChar.length - 1))) ];
  }
  return password
}

// If they want upper case characters
if (confirmUpper) {
  for (var u = 0; u <= 10; u++ ) {

  }
  password = password + upperCaseChar[(Math.floor(Math.random() * Math.floor(upperCaseChar.length - 1)))];
  return password
}

// If they want numeric characters
if (confirmNumeric) {
  for (var n = 0; n <= 10; n++ ) {

  }
  password = password + numericChar[(Math.floor(Math.random() * Math.floor(numericChar.length - 1)))];
  return password
}

// If they want special characters
if (confirmSpecial) {
  for (var s = 0; s <= 10; s++ ) {

  }
  password = password + upperCaseChar[(Math.floor(Math.random() * Math.floor(upperCaseChar.length - 1)))];
  return password
}




