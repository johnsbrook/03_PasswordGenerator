// Created variables with lowercase, uppercase, numbers and special characters.
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";

var medley;
var desiredLength;



//This block creates alert and prompt variables with function alerts()
var lengthRequest = "How long would you like the password to be?";
var lowerCaseRequest = "Would you like your password to have lowercase letters?";
var upperCaseRequest = "Would you like your password to have uppercase letters";
var numbersRequest = "Would you like your password to have numbers?";
var specialRequest = "Would you like your password to have special characters?";
var lengthError = "Password either too short or too long. Please, try again!"


//Create alert text variables
var genericOutput = "Thank you! Let's generate your password with ";
var lowerCaseOutput = "lowercase letters";
var upperCaseOutput = "uppercase letters"
var numbersOutput = "numbers";
var specialOutput = "special characters";
var andString = " and ";
var endPeriod = ".";
var separatingComma = ", ";



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


// Generates true or false statements for each password character option and calls medleyFunction()
function trueOrFalse() {

    var confirmLC = confirm(lowerCaseRequest);
    var confirmUC = confirm(upperCaseRequest);
    var confirmNumbers = confirm(numbersRequest)
    var confirmSC = confirm(specialRequest);


    // Creates if/else loops around possible password character options and calls medleyFunction()
    if (confirmLC && confirmUC && confirmNumbers && confirmSC) {
        medley = lowerCase + upperCase + numbers + specialCharacters;
        medleyFunction ();
    } else 
    if (confirmLC && confirmUC && confirmNumbers) {
        medley = lowerCase + upperCase + numbers;
        medleyFunction ();
    } else
    if (confirmLC && confirmUC && confirmSC) {
        medley = lowerCase + upperCase + specialCharacters;
        medleyFunction ();
    } else
    if (confirmLC && confirmNumbers && confirmSC) {
        medley = lowerCase + numbers + specialCharacters;
        medleyFunction ();
    } else
    if (confirmUC && confirmNumbers && confirmSC) {
        medley = upperCase + numbers + specialCharacters;
        medleyFunction ();
    } else
    if (confirmLC && confirmUC) {
        medley = lowerCase + upperCase;
        medleyFunction ();
    } else
    if (confirmLC && confirmNumbers) {
        medley = lowerCase + numbers;
        medleyFunction ();
    } else
    if (confirmLC && confirmSC) {
        medley = lowerCase + specialCharacters;
        medleyFunction ();
    } else
    if (confirmUC && confirmNumbers) {
        medley = upperCase + numbers;
        medleyFunction ();
    } else
    if (confirmUC && confirmSC) {
        medley = upperCase + specialCharacters;
        medleyFunction ();
    } else 
    if (confirmLC) {
        medley = lowerCase;
        medleyFunction();
    } else
    if (confirmUC) {
        medley = upperCase;
        medleyFunction();
    } else
    if (confirmNumbers) {
        medley = numbers;
        medleyFunction();
    } else
    if (confirmSC) {
        medley = specialCharacters;
        medleyFunction();
    } 
    
    // Returns error and restarts password generator confirms 
    else {alert("Invalid criteria, please try again"); trueOrFalse();}    
}


// Creates an array to store password values, establishes items and pushes them inside the array; generates and prints password into ID
function medleyFunction() {

    var medleyItemsArray = [];

    for (i = 0; i < desiredLength; i++) {

         // Establishes and pushes medley's items into empty array
        var medleyItems = medley[Math.floor(Math.random() * medley.length)];
            medleyItemsArray.push(medleyItems);
        
        // Generates and prints password into password HTML's index.html <div>
        var passwordResult = medleyItemsArray.join("");
            passwordEl.innerHTML = passwordResult;
            // document.getElementById("password").innerHTML = passwordResult;
    }
}