// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];
  
  // Array of numeric characters to be included in password
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  // Array of lowercase characters to be included in password
  var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  
  // Array of uppercase characters to be included in password
  var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];
  
// User input options: 
var enter;
var confirmnumericCharacters;
var confirmspecialCharacters;
var confirmupperCasedCharacters;
var confirmlowerCasedCharacters;
var choices;
var password = [];

  // Function to prompt user for password options
  function getPasswordOptions() {
  
  }
  
  // Function for getting a random element from an array
  function getRandom(arr) {
  
  }
  
  // Function to generate password with user input
  function generatePassword() {
    // Asks for user input
    enter = parseInt(prompt("Choose between 10 and 64 characters to create your password."));
    if (!enter) {
        alert("This needs a value");
    } else if (enter < 10 || enter > 64) {
     
        enter = parseInt(prompt("Choose between 10 and 64"));

      } else {
        
        confirmnumericCharacters = confirm("Do you want numbers?");
        confirmspecialCharacters = confirm("Do you want special characters?");
        confirmupperCasedCharacters = confirm("Do you want capital letters?");
        confirmlowerCasedCharacters = confirm("Do you want lowercase letters?");
    };

    if (!confirmspecialCharacters && !confirmnumericCharacters && !confirmupperCasedCharacters && !confirmlowerCasedCharacters) {
      choices = alert("Choose criteria");

  }
  // 4 positive choices
  else if (confirmspecialCharacters && confirmnumericCharacters && confirmupperCasedCharacters && confirmlowerCasedCharacters) {

      choices = chars.concat(integer, letter, caps);
  }
  else if (confirmspecialCharacters && confirmnumericCharacters && confirmupperCasedCharacters) {
        choices = chars.concat(integer, caps);
    }
    else if (confirmspecialCharacters && confirmnumericCharacters && confirmlowerCasedCharacters) {
        choices = chars.concat(integer, letter);
    }
    else if (confirmspecialCharacters && confirmlowerCasedCharacters && confirmupperCasedCharacters) {
        choices = chars.concat(letter, caps);
    }
    else if (confirmnumericCharacters && confirmlowerCasedCharacters && confirmupperCasedCharacters) {
        choices = integer.concat(letter, caps);
    }
    else if (confirmspecialCharacters && confirmnumericCharacters) {
      choices = chars.concat(integer);

  } else if (confirmspecialCharacters && confirmlowerCasedCharacters) {
      choices = chars.concat(letter);

  } else if (confirmspecialCharacters && confirmupperCasedCharacters) {
      choices = chars.concat(caps);
  }
  else if (confirmlowerCasedCharacters && confirmnumericCharacters) {
      choices = letter.concat(integer);

  } else if (confirmlowerCasedCharacters && confirmupperCasedCharacters) {
      choices = letter.concat(caps);

  } else if (confirmnumericCharacters && confirmupperCasedCharacters) {
      choices = integer.concat(caps);
  }
}
  
  // Get references to the #generate element
  var generateBtn = document.querySelector('#generate');
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
  
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener('click', writePassword);
  