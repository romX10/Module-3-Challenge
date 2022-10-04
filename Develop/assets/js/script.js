// Assignment code here
var lowercaseLetter = ["a","b","c","d","e","f",
"g","h","i","j","k","l","m","n","o","p","q","r"
,"s","t","u","v","w","x","y","z"];
var uppercaseLetter = ["A","B","C","D","E","F",
"G","H","I","J","K","L","M","N","O","P","Q","R"
,"S","T","U","V","W","X","Y","Z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharacters = ["!","'","#","$","%","&","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","{","}","|","~"];
var finalPassword = []
var currentArray = [];

generatePassword = function() {
  var genPassword = window.confirm("Would you like to generate a new password now?");
  if (!genPassword){
    return;
  }

  var genLower = window.confirm("Would you like to add lower-case letters to your password?")
  if (!genLower){
    console.log("No lowercase in password");
  } else {
    currentArray = currentArray.concat(lowercaseLetter);
  }

  var genUpper = window.confirm("Would you like to add upper-case letters to your password?")
  if (!genUpper){
    console.log("No uppercase in password");
  } else {
    currentArray = currentArray.concat(uppercaseLetter);
  }

  var genNumbers = window.confirm("Would you like to add numbers to your password?")
  if (!genNumbers){
    console.log("No numbers in password");
  } else {
    currentArray = currentArray.concat(numbers);
  }

  var genSpecial = window.confirm("Would you like to add special characters to your password?")
  if (!genSpecial){
    console.log("No special characters in password");
  } else {
    
    currentArray = currentArray.concat(specialCharacters);
  }

  if (!genLower && !genUpper && !genNumbers && !genSpecial){
    window.alert("You must select one character type, please refresh and try again.");
    return;
  }

  var passwordLength = window.prompt("How many characters would you like your password to be? It must be between 8 and 128 characters.");
  if (passwordLength < 8 || passwordLength > 128){
    window.alert("Password MUST be between 8 and 128 characters. Please enter again.");
    passwordLength = window.prompt("How many characters would you like your password to be? It must be between 8 and 128 characters.");
  }

  var passwordLength = (+passwordLength);

  for (var i = 0; i < passwordLength; i++){
    var randNumber = Math.floor(Math.random() * currentArray.length);
    finalPassword.push(currentArray[randNumber]);
  }

  finalPassword = finalPassword.join("");
  window.alert("Password successfully generated!")
  return(finalPassword);
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
