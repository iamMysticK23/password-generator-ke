//global variables
const letters = [
  "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
  "U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n",
  "o","p","q","r","s","t","u","v","w","x","y","z"
];

const numbers = [
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];

const specialCharacters = [
  "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
  "/"
];



// declare password button and the password elements
const passwordButton = document.getElementById("password-button")
const password1Element = document.getElementById("password-1")
const password2Element = document.getElementById("password-2")
const passwordLengthSelect = document.getElementById("password-length")
const specialCharToggle = document.getElementById("special-char-toggle")
const numbersToggle = document.getElementById("numbers-toggle")

// random password function
function generatePassword(length, useSpecialCharacters, useNumbers) {
  let password = '';
  let charSet = [...letters];  

  if (useSpecialCharacters) {
      charSet = [...charSet, ...specialCharacters];
  }
  
  if (useNumbers) {
      charSet = [...charSet, ...numbers];
  }

  for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      password += charSet[randomIndex];
  }
  return password;
}


// update password 1 and password 2 elements with the generated passwords
function updatePasswords() {
    const passwordLength = parseInt(passwordLengthSelect.value)
    const useSpecialCharacters = specialCharToggle.checked
    const useNumbers = numbersToggle.checked

    const password1 = generatePassword(passwordLength, useSpecialCharacters, useNumbers)
    const password2 = generatePassword(passwordLength, useSpecialCharacters, useNumbers)

    password1Element.textContent = password1
    password2Element.textContent = password2

}

// click event listener for password button
passwordButton.addEventListener("click", updatePasswords)

//function to copy text to clipboard using clipboard API
function clipboardCopy(text) {
    navigator.clipboard.writeText(text)
    .then(() => {
      alert('Password copied to clipboard!');
    })
    .catch(err => {
      console.error('Unable to copy text: ', err);
    });
}

// click event listeners for password elements
password1Element.addEventListener('click', function() {
    console.log("password1 clicked")
    const password1Text = password1Element.textContent
    clipboardCopy(password1Text)
  })

password2Element.addEventListener('click', function() {
    const password2Text = password2Element.textContent
    clipboardCopy(password2Text)
})

// Dark mode toggle
document.querySelector('#darkmode-toggle').addEventListener('change', function() {
  const darkModeText = document.querySelector('.dark-mode-text');
  const lightModeText = document.querySelector('.light-mode-text');

  if (this.checked) {
    darkModeText.classList.add('active');
    lightModeText.classList.remove('active');
  } else {
    lightModeText.classList.add('active');
    darkModeText.classList.remove('active');
  }

  document.body.classList.toggle('dark-mode');
});


  
