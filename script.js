// Created variables with lowercase, uppercase, numbers and special characters.
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";

// Global variables to store value from inside functions
var medley;
var desiredLength;

//This block creates alert and prompt variables with function alerts()
var lengthRequest = "How long would you like the password to be? Please, choose a value between 8 and 128 characters.";
var lowerCaseRequest = "Would you like your password to have lowercase letters?";
var upperCaseRequest = "Would you like your password to have uppercase letters";
var numbersRequest = "Would you like your password to have numbers?";
var specialRequest = "Would you like your password to have special characters?";
var lengthError = "Password either too short or too long. Please, try again!";
var noValidOptionsError = "You have not selected any valid options. Please, try again!";


// Create event listener for when the user clicks on button "Generate Password" and calls function lengthTrue()
var generateEl = document.querySelector("#generate");
    generateEl.addEventListener("click", function() {    
        lengthTrue();    
    });

// Captures password output box and stores it inside passwordEL variable
var passwordEl = document.querySelector("#password");


// Asks the user how long the length of the password should be and stores it inside desiredLength; returns error if it's outside of parameters and restarts
function lengthTrue() {

    desiredLength = prompt(lengthRequest);
                    if (desiredLength > 7 && desiredLength < 129) {
                        trueOrFalse();        
                    } else {
                        alert(lengthError);
                        lengthTrue();
                    }

} 


// Compiles true or false statements for each password character option and calls medleyFunction()
function trueOrFalse() {

    var confirmLC = confirm(lowerCaseRequest);
    var confirmUC = confirm(upperCaseRequest);
    var confirmNumbers = confirm(numbersRequest)
    var confirmSC = confirm(specialRequest);

    if (confirmLC){
        medley = medley + lowerCase;
    }    
    if (confirmUC){
        medley = medley + upperCase;
    }
    if (confirmNumbers){
        medley = medley + numbers;
    }
    if (confirmSC){
        medley = medley + specialCharacters;
    }
    
    medleyFunction();
}

// Creates an empty HTML element and an empty array to store password values. Then, generates random items and pushes them inside the empty array; generates and prints password into ID
function medleyFunction() {
    passwordEl.innerHTML = ""
    var medleyItemsArray = [];

    for (i = 0; i < desiredLength; i++) {

         // Establishes and pushes medley's items into empty array
        var medleyItems = medley[Math.floor(Math.random() * medley.length)];        
            medleyItemsArray.push(medleyItems);    
    }
    
    // Generates and prints password into password HTML's index.html <div>
    var passwordResult = medleyItemsArray.join("");
        passwordEl.innerHTML = passwordResult;
        medleyItemsArray = [];
        medley = "";
}