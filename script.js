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

// Prompts and Confirms for length, lowercase, upper case, numeric, and special characters

var confirmLength = prompt ("How many characters do you want?");
var confirmLower = confirm ("Do you want lower case characters?");
var confirmUpper= confirm("Do you want upper case characters?");
var confirmNumeric = confirm("Do you want numeric characters?");
var confirmSpecial = confirm("Do you want special characters?"); 

// for loop for lower case characters
function generatePassword () {
  if (confirmLength < 8 || confirmLength >=128 ){
    return "Too many characters!"
  }
  password=""
  if (confirmLower) {
    for (var i = 0; i <= confirmLength; i++) {

      password = password + lowerCaseChar[ (Math.floor(Math.random() * Math.floor(lowerCaseChar.length - 1))) ];
    }
  }
  if (confirmUpper) {
    // password = get first letter of password string and replace it with everything after + sign below. 
      password = password + upperCaseChar[(Math.floor(Math.random() * Math.floor(upperCaseChar.length - 1)))];

    
  }
  
  // If they want numeric characters, this adds 2 to the password. 
  if (confirmNumeric) {
    // replace the second letter

      password = password + numericChar[(Math.floor(Math.random() * Math.floor(numericChar.length - 1)))];
    
    
    
  }
  
  // If they want special characters, this adds 2 to the password. 
  if (confirmSpecial) {
    // replace the third letter 
 
      password = password + specialChar[(Math.floor(Math.random() * Math.floor(specialChar.length - 1)))];
    
    
    
  }
  return password
}




