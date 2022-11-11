// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword (){
  var lowerArray=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperArray=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var numberArray=["0","1","2","3","4","5","6","7","8","9"];
  var specialArray=["!","#","$","%","&","'","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","`","{","|","}"];
  var emptyArray=[];
  var emptyPassword="";
  var passwordLength = prompt ("Please enter your desired password length:"); 

  if(passwordLength <8 || passwordLength >128) {
    window.alert("Please double check your password character lenght")
  }

  var lowerCase = (window.confirm("Would you like to include lowercase letters?"));
  var upperCase = (window.confirm("Would you like to include uppercase letters?"));
  var specialCharacters = (window.confirm("Would you like to include special characters?"));
  var numericNumber = (window.confirm("Would you like to include numbers letters?"));

  if (lowerCase === false && upperCase === false && specialCharacters === false && numericNumber === false){
    window.alert("Please select at least one character type")
  }

  if(lowerCase==true){
    emptyArray=emptyArray.concat(lowerArray);
  }
  if(upperCase==true){
    emptyArray=emptyArray.concat(upperArray);
  }
  if(specialCharacters==true){
    emptyArray=emptyArray.concat(specialArray);
  }
  if(numericNumber==true){
    emptyArray=emptyArray.concat(numberArray);
  }

  for (var i=0;i<passwordLength;i++){
  emptyPassword=emptyPassword+emptyArray[Math.floor(Math.random()*emptyArray.length)];
  }
  return emptyPassword;
}

var passwordText = document.querySelector("#password");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
