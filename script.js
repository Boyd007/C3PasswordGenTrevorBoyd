// Assignment code here
function generatePassword() {
  var passwordLength = prompt("How long should your password be?")
  var lowercaseRequest = confirm("Press OK if you require lower case letters")
  var uppercaseRequest = confirm("Press OK if you require upper case letters")
  var numericRequest = confirm("Press Ok if you wish to add numbers")
  var specialcharRequest = confirm("Press ok if you require any special characters")
  var alphabet = "abcdefghijklmnopqrstuvwxyz"
  var alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numbers = "0123456789"
  var specialcharacters = "!@#$%^&*"
  var passwordPool = ""
if (lowercaseRequest) {
  passwordPool+=alphabet
}
  
  return "swdkjhewrjkherw9fd"
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
