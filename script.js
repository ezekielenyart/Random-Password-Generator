// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {

  // Set password length based on input from user
}
// prompt for length, letters, numbers, and special characters
// var promptLength= prompt("How many characters do you want your password to be?")
// var confirmUpper = confirm ( "Do you want to use Uppercase letters?")
// var confirmNum = confirm("Do you want to use numbers")
// var confirmSpecial = confirm("Do you want to use Special Characters?(!@#$%^&*)")
// // possible password values
var lower = "abcdefghijklmnopqrstuvwxyz"
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var num = "1234567890"
var special = "!@#$%^&*"
// length
// uppercase
// lowercase
// special and numbers

// Write password to the #password input


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function writePassword() {
  // generate random characters
    // Create storage variable for random characters
    

    // utilize Math.Floor(Math.Random) * lower.length)

    // Add Upper, numbers, and symbols
      var promptLength= prompt("How many characters do you want your password to be?")
      var confirmUpper = confirm ( "Do you want to use Uppercase letters?")
      var confirmNum = confirm("Do you want to use numbers?")
      var confirmSpecial = confirm("Do you want to use Special Characters?(!@#$%^&*?)")
    
    

    charElements = []


    for (let i = 0; i < promptLength; i++) {
      var randoChar = Math.floor(Math.random() * 4)
      
    if (confirmUpper = true && randoChar == 0) {
      var addUpper = upper[Math.floor(Math.random() * upper.length)];
      // randomly select a character from the upper set
      charElements.push(addUpper)
    }
    else if (confirmNum = true && randoChar == 1) {
      var addNum = num[Math.floor(Math.random() * num.length)];
      // randomly select a character from the number set
      charElements.push(addNum)
    }
    else if (confirmSpecial = true && randoChar == 2){
      var addSpecial = special[Math.floor(Math.random() * special.length)];
      // randomly select a character from the special set
      charElements.push(addSpecial)
    }
    else if (randoChar == 3){
      var addLower = lower[Math.floor(Math.random() * lower.length)];
      // randomly select a character from the lower set
      charElements.push(addLower)
    }


  
}
var passChar = charElements.join("")
  


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = passChar;

}
// create for loop to choose password characters

