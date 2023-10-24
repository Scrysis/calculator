

var specialChars = ["@", "%", "+", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", "."];  //instructor code
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; //instructor code
var lowerCased = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; //instructor code
var upperCased = ["A", "B", "C","D", "E", "F", "G", "H", "I", "J", "K", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; //instructor code


function getPasswordChoices(){ //instructor code
  console.log("Got to start of getPasswordChoices");
    var hasSpecialChars = confirm("Click ok to confirm to include special characters in your password."); //instructor code
    var hasUpperChars = confirm("Click ok to confirm to include uppercase characters in your password."); //instructor code
    var hasLowerChars = confirm("Click ok to confirm to include lowercase characters in your password."); //instructor code
    var hasNumericChars = confirm("Click ok to confirm to include numeric characters in your password."); //instructor code

    if(hasSpecialChars === false && hasUpperChars === false && hasLowerChars === false && hasNumericChars === false){ //instructor code
      alert("Must select one option."); //instructor code
      return; //instructor code
    }

    /* Options Object with four variables: hasLowerChars, hasNumericChars, hasUpperChars, hasSpecialChars.
    Each variable stored here is a boolean variable that dictates type of character used in the password. 
     (Why not an array rather than an object??) */
    var options = {  //instructor code
      hasLowerChars: hasLowerChars,  //instructor code
      hasNumericChars: hasNumericChars,  //instructor code
      hasUpperChars: hasUpperChars,  //instructor code
      hasSpecialChars: hasSpecialChars,  //instructor code
    };  //instructor code
    return options;  //instructor code
} // bracket for getPasswordChoices()

/* Function gets input from the user, then converts it into a number.  If the  */
function getPasswordSize(){
  var passSize = prompt("Please enter a number between 8 and 128 to indicate the size of the desired password.");
  var refinedPassSize = Number(passSize);

  if(8 <= refinedPassSize && refinedPassSize <= 128){
    console.log("refinedPassSize: " + passSize);
    return refinedPassSize;
  }
  else{
    alert("You have not selected a valid number.");
    getPasswordSize; //experimental; force user to restart the process if they don't specify a valid number of characters.
  }

}

// need function to convert password array to an easy-to-display string
function passConvert(toBeConverted){
  console.log("Got to start of conversion");
  let tempString = "";
  for(var x=0; x<toBeConverted.length; x++){
    tempString = tempString + toBeConverted[x];
  }
  console.log(tempString);
  return tempString;
}

function generatePassword(){  //instructor code
  console.log("Got to the start of generatePassword function");
  var passwordOptions = getPasswordChoices(); // passwordOptions is an options Object  //instructor code
    // need function call for function that gets size of password here
  var passwordSize = getPasswordSize();
  let charSelect = "";
  var passArray = [];
  

  while(passArray.length < passwordSize){
    
    switch(Math.floor(Math.random()*4)){
      case 0: if(passwordOptions.hasLowerChars){
        charSelect = lowerCased[Math.floor(Math.random()*lowerCased.length)];
        passArray.push(charSelect);
        break;
      }
      else{
        break;
      }
      case 1: if(passwordOptions.hasUpperChars){
        charSelect = upperCased[Math.floor(Math.random()*upperCased.length)];
        passArray.push(charSelect);
        break;
      }
      else{
        break;
      }
      case 2: if(passwordOptions.hasNumericChars){
        charSelect = numbers[Math.floor(Math.random()*numbers.length)];
        passArray.push(charSelect);
        break;
      }
      else{
        break;
      }
      case 3: if(passwordOptions.hasSpecialChars){
        charSelect = specialChars[Math.floor(Math.random()*specialChars.length)];
        passArray.push(charSelect);
        break;
      }
      else{
        break;
      }

    }

  }
  // insert array-to-string conversion function call here
return passConvert(passArray);
} // bracket for genPass(); needs to return a string.


// instructor code comments added by student



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");  //instructor code

// Write password to the #password input
function writePassword() {  //instructor code
  console.log("Got to start of writePassword");
  var password = generatePassword(); // string variable //instructor code
  console.log("Got to after generatePassword");
  var passwordText = document.querySelector("#password");  //instructor code

  passwordText.value = password;  //instructor code

} // writePassword()

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);  //instructor code
