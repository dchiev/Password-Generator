# Password-Generator
<img src = "./Assets/readme_assets/password_generator.png">

This Password Generator is designed to give you a password depending on your needs. Choose from the amount of characters and if you desire upper case, numeric, and special characters. 


# Logic and Process
1. To add to the existing code, I first added my arrays for lower case, upper case, special and numeric characters:

```
var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericChar = ["1", "2","3", "4","5","6","7","8","9"];
var specialChar = ["!","?","$","\&", "\\", "%"];
```


2. Then I have my prompts for each condition:
 
```
var confirmLength = prompt ("How many characters do you want?");
var confirmLower = confirm ("Do you want lower case characters?");
var confirmUpper= confirm("Do you want upper case characters?");
var confirmNumeric = confirm("Do you want numeric characters?");
var confirmSpecial = confirm("Do you want special characters?"); 
```


3. Inside the original function, I have my first if statement to confirm password length. If the request is less than 8 characters or more than 50, it will return "Not enough characters. This stops the entire process:

```
function generatePassword () {
  if (confirmLength < 8 || confirmLength >= 50 ){
    return "Not enough characters!"
  }
```


4. If lower case characters are desired, it runs through a for loop, with Math.floor and Math.random to choose those amount of random characters:

```
password=""
  if (confirmLower) {
    for (var i = 0; i <= confirmLength; i++) {

      password = password + lowerCaseChar[ (Math.floor(Math.random() * Math.floor(lowerCaseChar.length - 1))) ];
    }
```

5. If they accept the Upper case condition, this block of code will add one uppercase character. I also used substring and replace to add the character to the front. 

```
  if (confirmUpper) {

      password = password  
      var upperCaseMath = upperCaseChar[(Math.floor(Math.random() * Math.floor(upperCaseChar.length - 1)))];
      var charsToReplace1 = password.substring(0, 3);
      password = password.replace (charsToReplace1, upperCaseMath);
  }
```

6.  The same idea goes for the next two conditions - the numeric and special characters. This has similar code. 

7. Then finally, it returns the new string at the end. 




