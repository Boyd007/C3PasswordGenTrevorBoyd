// Assignment code here
function generatePassword() {
  debugger
  var passwordLength = prompt("How many characters should your password be?")
  var lowercaseRequest = confirm("Press OK if you require lower case letters")
  var uppercaseRequest = confirm("Press OK if you require upper case letters")
  var numericRequest = confirm("Press Ok if you wish to add numbers")
  var specialcharRequest = confirm("Press OK if you require any special characters")
  var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  var alphabetUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  var numbers = ['0','1','2','3','4','5','6','7','8','9']
  var specialcharacters = ['!','#','$','%','&','*','+',',','-','.','/',':',';','<=>','?','@','[\]','^','_',]
  var passwordPool = [];
if (lowercaseRequest) {
  passwordPool=passwordPool.concat(alphabet)
}
if (uppercaseRequest) {
  passwordPool=passwordPool.concat(alphabetUpper)
} 
if (numericRequest) {
  passwordPool=passwordPool.concat(numericRequest)
}
if (specialcharRequest) {
  passwordPool=passwordPool.concat(specialcharRequest)
}
for (var i = 0; i <= numOfChar; i++) {
  passwordArray.push(characterArray[Math.floor(Math.random() * characterArray.length)]);
  newPassword = passwordString.push(passwordPool[randomChar]) console.log(newPassword)
}

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
