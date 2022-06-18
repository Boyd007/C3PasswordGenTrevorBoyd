// Assignment code here
function generatePassword() {
  debugger
  var passwordLength = prompt("How many characters should your password be?")
  var lowercaseRequest = confirm("Press OK if you require lower case letters")
  var uppercaseRequest = confirm("Press OK if you require upper case letters")
  var numericRequest = confirm("Press Ok if you wish to add numbers")
  var specialcharRequest = confirm("Press OK if you require any special characters")
  var alphabet = "abcdefghijklmnopqrstuvwxyz"
  var alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numbers = "0123456789"
  var specialcharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  var passwordPool = ""
if (lowercaseRequest) {
  passwordPool+=alphabet
}
if (uppercaseRequest) {
  passwordPool+=alphabetUpper
} 
if (numericRequest) {
  passwordPool+=numericRequest
}
if (specialcharRequest) {
  passwordPool+=specialcharRequest
}
for(var i=0;i<passwordLength; i++){
var decimal=Math.random()
var num=decimal*passwordPool.length
var rounded=Math.ceil(num)
var char=passwordPool.charAt(rounded)
}



  return "swdkjhewrjkherw9fd"
}

// Connecting Button to JS
var generateBtn = document.querySelector("#generate");

// Write password to the #password input HTML
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
