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
  var pickChoices = ""

  for (var i = 0; i < enter; i++) {
    pickChoices += arr[Math.floor(Math.random() * arr.length)];
  }
  return (pickChoices)
}
// Function to generate password with user input

var enter;

function generatePassword() {
  let choices = [];
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
    alert("Choose criteria");
    return
  }

  if (confirmupperCasedCharacters) {
    choices = choices.concat(upperCasedCharacters);
  }
  if (confirmspecialCharacters) {
    choices = choices.concat(specialCharacters);
  }
  if (confirmnumericCharacters) {
    choices = choices.concat(numericCharacters)
  }
  if (confirmlowerCasedCharacters) {
    choices = choices.concat(lowerCasedCharacters)
  };
  return getRandom(choices);
}
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.textContent = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
