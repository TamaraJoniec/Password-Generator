// Array of special characters to be included in password
const specialCharacters = [
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
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
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
const upperCasedCharacters = [
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


let confirmnumericCharacters;
let confirmspecialCharacters;
let confirmupperCasedCharacters;
let confirmlowerCasedCharacters;


// Function to prompt user for password options
function generatePassword() {
  let choices = [];

  return new Promise((mainResolve, mainReject) => {
      Swal.fire({
          title: 'Enter Password Length',
          input: 'text',
          inputPlaceholder: 'Choose between 10 and 64 characters'
      }).then((result) => {
          if (result.isConfirmed) {
              enter = parseInt(result.value);

              return Swal.fire({
                  title: 'Do you want numbers?',
                  showDenyButton: true,
                  confirmButtonText: 'Yes',
                  denyButtonText: 'No',
              });
          }
      }).then((result) => {
          confirmnumericCharacters = result.isConfirmed;

          return Swal.fire({
              title: 'Do you want special characters?',
              showDenyButton: true,
              confirmButtonText: 'Yes',
              denyButtonText: 'No',
          });
      }).then((result) => {
          confirmspecialCharacters = result.isConfirmed;

          return Swal.fire({
              title: 'Do you want capital letters?',
              showDenyButton: true,
              confirmButtonText: 'Yes',
              denyButtonText: 'No',
          });
      }).then((result) => {
          confirmupperCasedCharacters = result.isConfirmed;

          return Swal.fire({
              title: 'Do you want lowercase letters?',
              showDenyButton: true,
              confirmButtonText: 'Yes',
              denyButtonText: 'No',
          });
      }).then((result) => {
          confirmlowerCasedCharacters = result.isConfirmed;

          if (!confirmspecialCharacters && !confirmnumericCharacters && !confirmupperCasedCharacters && !confirmlowerCasedCharacters) {
              alert("Choose criteria");
              return;
          }

          if (confirmupperCasedCharacters) {
              choices = choices.concat(upperCasedCharacters);
          }
          if (confirmspecialCharacters) {
              choices = choices.concat(specialCharacters);
          }
          if (confirmnumericCharacters) {
              choices = choices.concat(numericCharacters);
          }
          if (confirmlowerCasedCharacters) {
              choices = choices.concat(lowerCasedCharacters);
          }

          const password = getRandom(choices);
          mainResolve(password); // Resolved the main promise with the generated password
      });
  });
}
function getRandom(choices) {
    let password = '';

    for (let i = 0; i < enter; i++) {
        const randomIndex = Math.floor(Math.random() * choices.length);
        password += choices[randomIndex];
    }

    return password;
}
// Get references to the #generate element
let generateBtn = document.querySelector('#generate');

// Adjusted the writePassword function to handle the asynchronous behavior
function writePassword() {
  generatePassword().then(password => {
      let passwordText = document.querySelector('#password');
      passwordText.textContent = password;
  });
}


// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);