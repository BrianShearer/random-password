// Assignment code here



// variables list
var passwordLength = "";
var charArrey = [];

var lowerArrey = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperArrey = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numArrey = ['0','1','2','3'];
var symbolArrey = ['!','@','#','%','*','?'];

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword,);
  

//Arrey function and button link
function writePassword() {

  charArrey = [];
  passwordLength = parseInt(prompt("choose password length 8-128 characters USE NUMBER PAD"));
    if(confirm("would you like lower case letters")){

    }
      charArrey = charArrey.concat(lowerArrey);
    if(confirm("would you like uppercase letters")){

    }
      charArrey = charArrey.concat(upperArrey);{

      }
     if(confirm("would you like numbers"))
      charArrey = charArrey.concat(numArrey);{

      }
     if(confirm("would you like symbols"))
      charArrey = charArrey.concat(symbolArrey);{

      }

     var password = generatePassword()
     



  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// for loop function

function generatePassword() {
  var password = "";  
 for (var i = 0; i < passwordLength; i++){ 
  var index = Math.floor(Math.random() * charArrey.length);
  password = password + charArrey[index];   
}
return password;
}
