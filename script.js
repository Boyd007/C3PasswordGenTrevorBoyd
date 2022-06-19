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
  var specialcharacters = ['!','#','$','%','&','*','+',',','-','.','/',':',';','?','@',',']
  var passwordPool = [];
  var passwordArray = [];
if (lowercaseRequest) {
  passwordPool=passwordPool.concat(alphabet)
}
if (uppercaseRequest) {
  passwordPool=passwordPool.concat(alphabetUpper)
} 
if (numericRequest) {
  passwordPool=passwordPool.concat(numbers)
}
if (specialcharRequest) {
  passwordPool=passwordPool.concat(specialcharacters)
}
for (var i = 0; i <= passwordlength; i++) {
  var characterIndex = Math.floor(Math.random() * passwordPool.length)
  var chosenCharacter = passwordPool[characterIndex]
  passwordArray.push(chosenCharacter);
}

  console.log(passwordArray.join(''))

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
