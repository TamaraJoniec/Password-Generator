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


var confirmnumericCharacters;
var confirmspecialCharacters;
var confirmupperCasedCharacters;
var confirmlowerCasedCharacters;


// Function to prompt user for password options
function getPasswordOptions() {
confirmnumericCharacters;
confirmspecialCharacters;
confirmupperCasedCharacters;
confirmlowerCasedCharacters;
}

// Function for getting a random element from an array
function getRandom(arr) { 
  for (var i = 0; i < enter; i++) {
      var pickChoices = choices[Math.floor(Math.random() * choices.length)];
      password.concat(pickChoices);
  }
}

// Function to generate password with user input

var choices;
var enter;
var password = "";

function generatePassword() {
  password = "";
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
  else if (confirmspecialCharacters && confirmnumericCharacters && confirmupperCasedCharacters && confirmlowerCasedCharacters) {
    choices = specialCharacters.concat(numericCharacters, lowerCasedCharacters, upperCasedCharacters);
  }
  else if (confirmspecialCharacters && confirmnumericCharacters && confirmupperCasedCharacters) {
    choices = specialCharacters.concat(numericCharacters, upperCasedCharacters);
  }
  else if (confirmspecialCharacters && confirmnumericCharacters && confirmlowerCasedCharacters) {
    choices = specialCharacters.concat(numericCharacters, lowerCasedCharacters);
  }
  else if (confirmspecialCharacters && confirmlowerCasedCharacters && confirmupperCasedCharacters) {
    choices = specialCharacters.concat(lowerCasedCharacters, upperCasedCharacters);
  }
  else if (confirmnumericCharacters && confirmlowerCasedCharacters && confirmupperCasedCharacters) {
    choices = integer.concat(lowerCasedCharacters, upperCasedCharacters);
  }
  else if (confirmspecialCharacters && confirmnumericCharacters) {
    choices = specialCharacters.concat(numericCharacters);

  } else if (confirmspecialCharacters && confirmlowerCasedCharacters) {
    choices = specialCharacters.concat(lowerCasedCharacters);
  } else if (confirmspecialCharacters && confirmupperCasedCharacters) {
    choices = specialCharacters.concat(upperCasedCharacters);
  }
  else if (confirmlowerCasedCharacters && confirmnumericCharacters) {
    choices = lowerCasedCharacters.concat(numericCharacters);
  } else if (confirmlowerCasedCharacters && confirmupperCasedCharacters) {
    choices = lowerCasedCharacters.concat(upperCasedCharacters);
  } else if (confirmnumericCharacters && confirmupperCasedCharacters) {
    choices = numericCharacters.concat(upperCasedCharacters);
  }
  else if (confirmspecialCharacters) {
    choices = specialCharacters;
  }
  else if (confirmnumericCharacters) {
    choices = numericCharacters;
  }
  else if (confirmlowerCasedCharacters) {
    choices = lowerCasedCharacters;
  }
  return password;
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
