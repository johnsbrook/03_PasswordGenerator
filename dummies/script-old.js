
// These variables will place requests to User
var passwordRequest = "Would you like to generate a secured password?";
var lowerCaseRequest = "Would you like your password to have lowercase letters?";
var upperCaseRequest = "Would you like your password to have uppercase letters";
var numbersRequest = "Would you like your password to have numbers?";
var specialRequest = "Would you like your password to have special characters?";

// These variables are possible password generation options

var genericOutput = "Thank you! Let's generate your password with ";
var lowerCaseOutput = "lowercase letters";
var upperCaseOutput = "uppercase letters"
var numbersOutput = "numbers";
var specialOutput = "special characters";
var andString = " and ";
var endPeriod = ".";
var separatingComma = ", ";

// These variables are possible dead end outputs to User
var restartRequest = "You have not selected any possible options. Would you like to try again?";
var restartOutput = "Let's try again! Please, click or tab on \"Generate Password\" button";
var errorRequestOutput = "You have not selected any possible options and a password has not been generated.";
var thankYou = "Thank you, see you soon!";


// These varible are possible outputs with valid responses to generate password
// var output1 = genericOutput + lowerCaseOutput + separatingComma + upperCaseOutput + separatingComma + numbersOutput + andString + specialOutput + endPeriod;
// var output2 = genericOutput + lowerCaseOutput + separatingComma + upperCaseOutput + andString + numbersOutput + endPeriod;
// var output3 = genericOutput + lowerCaseOutput + separatingComma + upperCaseOutput + andString + specialOutput + endPeriod;
// var output4 = genericOutput + lowerCaseOutput + andString + upperCaseOutput + endPeriod;
// var output5 = genericOutput + upperCaseOutput + separatingComma  + numbersOutput + andString + specialOutput + endPeriod;
// var output6 = genericOutput + numbersOutput + andString + upperCaseOutput + endPeriod;
// var output7 = genericOutput + upperCaseOutput + andString + specialOutput + endPeriod;
// var output8 = genericOutput + lowerCaseOutput + separatingComma + numbersOutput + andString + specialOutput + endPeriod;
// var output9 = genericOutput + lowerCaseOutput + andString + numbersOutput + endPeriod;
// var output10 = genericOutput + lowerCaseOutput + andString + specialOutput + endPeriod;
// var output11 = genericOutput + lowerCaseOutput + endPeriod;
// var output12 = genericOutput + upperCaseOutput + endPeriod;
// var output13 = genericOutput + numbersOutput + andString + specialOutput + endPeriod;
// var output14 = genericOutput + numbersOutput + endPeriod;
// var output15 = genericOutput + specialOutput + endPeriod; 


// This section is the conditional statement area


function dialog() {

        if (confirm(passwordRequest)) {       
            if (confirm(lowerCaseRequest)) {
                if(confirm(upperCaseRequest)) {

                    
                    // Tree created if upperCase request is true
                    if (confirm(numbersRequest)) {
                        if (confirm(specialRequest)) {

                            // This part of the code will run if user wants to generate a password that contains all elements

                            // Builds confirmation string
                            let output1 = genericOutput + lowerCaseOutput + separatingComma + upperCaseOutput + separatingComma + numbersOutput + andString + specialOutput + endPeriod;
                            // Creates a confirmation alert
                            alert(output1);

                            // Calls for password's length                     
                            let desiredLength = prompt("How long would you like the password to be? Note: The password will generate if it is between 8 and 128 characters long.");        
                            // Sets of lowerCase letters, upperCase letters, numbers and specialCharacters 
                            let medley = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&()*+,-./:;<=>?@[]^_`{|}~";
                                                                                                        
                            // Sets empty medleyItemsArray 
                            let medleyItemsArray = [];
                        
                            if (desiredLength > 7 && desiredLength < 129) {

                            // Loop around medley's set the amount of password's desired length
                            for (i = 0; i < (desiredLength); i++) {
                        
                                // Establishes and pushes medley's items into empty array
                                let medleyItems = medley[Math.floor(Math.random() * medley.length)];
                                    medleyItemsArray.push(medleyItems);
                                
                                // Generates and prints password into password HTML's index.html <div>
                                let passwordResult = medleyItemsArray.join("");
                                    document.getElementById("password").innerHTML = passwordResult;
                            }
                            } else {alert("Your password is either too short or too long. Remember, the password will only generate if it is between 8 and 128 characters long. Try again!");}
                           
                        
                        } else {

                            // This part of the code will run if user wants to generate password that contains all elements, except special characters

                            // Builds confirmation string
                            let output2 = genericOutput + lowerCaseOutput + separatingComma + upperCaseOutput + andString + numbersOutput + endPeriod;
                            // Creates a confirmation alert
                            alert(output2);
                        
                            // Calls for password's length                      
                            let desiredLength = prompt("Please, enter the length you would like the password to be (between 8 and 128 characters.");        
                            // Sets of lowerCase letters, upperCase letters and numbers (medleyNoSpecialCharacters)
                            let medley = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                            // Sets empty medleyItemsArray 
                            let medleyItemsArray = [];
                        
                            if (desiredLength > 7 && desiredLength < 129) {
                            // Loop around medley's set the amount of password's desired length
                            for (i = 0; i < desiredLength; i++) {
                        
                                // Establishes and pushes medley's items into empty array
                                let medleyItems = medley[Math.floor(Math.random() * medley.length)];
                                    medleyItemsArray.push(medleyItems);
                            
                            // Generates and prints password into password HTML's index.html <div>
                            let passwordResult = medleyItemsArray.join("");
                                document.getElementById("password").innerHTML = passwordResult;
                        
                            }
                        
                        } else {alert("Your password is either too short or too long. Remember, the password will only generate if it is between 8 and 128 characters long. Try again!");}
                        }
                    
                    } else if (confirm(specialRequest)) {      

                        // This part of the code will run if user wants to generate password that contains all elements, except numbers

                        // Builds confirmation string    
                        let output3 = genericOutput + lowerCaseOutput + separatingComma + upperCaseOutput + andString + specialOutput + endPeriod;
                        // Creates a confirmation alert
                        alert(output3);

                        // Calls for password's length                      
                        let desiredLength = prompt("Please, enter the length you would like the password to be (between 8 and 128 characters.");        
                        // Sets of lowerCase letters, upperCase letters and special characters 
                        let medley = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&()*+,-./:;<=>?@[]^_`{|}~";
                        // Sets empty medleyItemsArray 
                        let medleyItemsArray = [];

                        if (desiredLength > 7 && desiredLength < 129) {
                        // Loop around medley's set the amount of password's desired length
                        for (i = 0; i < desiredLength; i++) {
                    
                            // Establishes and pushes medley's items into empty array
                            let medleyItems = medley[Math.floor(Math.random() * medley.length)];
                                medleyItemsArray.push(medleyItems);
                        
                            // Generates and prints password into password HTML's index.html <div>
                            let passwordResult = medleyItemsArray.join("");
                                document.getElementById("password").innerHTML = passwordResult;

                            }
                            } else {alert("Your password is either too short or too long. Remember, the password will only generate if it is between 8 and 128 characters long. Try again!");}
                        
                            
                        } else {

                            // This part of the code will run if user wants to generate password that contains lowercase and uppercase letters
                            
                             // Builds confirmation string    
                            let output4 = genericOutput + lowerCaseOutput + andString + upperCaseOutput + endPeriod;
                            // Creates a confirmation alert
                            alert(output4);

                            // Calls for password's length                      
                            let desiredLength = prompt("Please, enter the length you would like the password to be (between 8 and 128 characters.");        
                            // Sets of lowerCase letters and upperCase letters 
                            let medley = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                            // Sets empty medleyItemsArray 
                            let medleyItemsArray = [];

                            if (desiredLength > 7 && desiredLength < 129) {
                             // Loop around medley's set the amount of password's desired length
                            for (i = 0; i < desiredLength; i++) {
                    
                            // Establishes and pushes medley's items into empty array
                            let medleyItems = medley[Math.floor(Math.random() * medley.length)];
                                medleyItemsArray.push(medleyItems);
                            
                            // Generates and prints password into password HTML's index.html <div>
                            let passwordResult = medleyItemsArray.join("");
                                document.getElementById("password").innerHTML = passwordResult;
                
                            }
                            } else {alert("Your password is either too short or too long. Remember, the password will only generate if it is between 8 and 128 characters long. Try again!");}
                            
                        }
                
                // This tree is created if upperCase request is false
                } else if (confirm(numbersRequest)) {

                        // This will run if number request is true
                        if (confirm(specialRequest)) {

                            // This part of the code will run if user wants to generate password that contains lowercase letters, numbers and special characters

                            // Builds confirmation string   
                            let output8 = genericOutput + lowerCaseOutput + separatingComma + numbersOutput + andString + specialOutput + endPeriod;
                            // Creates a confirmation alert
                            alert(output8);

                            // Calls for password's length                      
                            let desiredLength = prompt("Please, enter the length you would like the password to be (between 8 and 128 characters.");        
                            // Sets of lowerCase letters, numbers and special characters 
                            let medley = "abcdefghijklmnopqrstuvwxyz0123456789!#$%&()*+,-./:;<=>?@[]^_`{|}~";
                            // Sets empty medleyItemsArray 
                            let medleyItemsArray = [];

                            if (desiredLength > 7 && desiredLength < 129) {
                            // Loop around medley's set the amount of password's desired length
                            for (i = 0; i < desiredLength; i++) {

                            // Establishes and pushes medley's items into empty array
                            let medleyItems = medley[Math.floor(Math.random() * medley.length)];
                            medleyItemsArray.push(medleyItems);
                        
                            // Generates and prints password into password HTML's index.html <div>
                            let passwordResult = medleyItemsArray.join("");
                                document.getElementById("password").innerHTML = passwordResult;
                            
                            }
                            } else {alert("Your password is either too short or too long. Remember, the password will only generate if it is between 8 and 128 characters long. Try again!");}
                            
                              
                        } else {

                            // This part of the code will run if user wants to generate password that contains lowercase letters and numbers

                            // Builds confirmation string   
                            let output9 =  genericOutput + lowerCaseOutput + andString + numbersOutput + endPeriod;
                            // Creates a confirmation alert
                            alert(output9);

                            // Calls for password's length                      
                            let desiredLength = prompt("Please, enter the length you would like the password to be (between 8 and 128 characters.");        
                            // Sets of lowerCase letters and numbers
                            let medley = "abcdefghijklmnopqrstuvwxyz0123456789";
                            // Sets empty medleyItemsArray 
                            let medleyItemsArray = [];

                            if (desiredLength > 7 && desiredLength < 129) {
                            // Loop around medley's set the amount of password's desired length
                            for (i = 0; i < desiredLength; i++) {

                            // Establishes and pushes medley's items into empty array
                            let medleyItems = medley[Math.floor(Math.random() * medley.length)];
                            medleyItemsArray.push(medleyItems);
                        
                            // Generates and prints password into password HTML's index.html <div>
                             let passwordResult = medleyItemsArray.join("");
                                document.getElementById("password").innerHTML = passwordResult;
                            }
                            } else {alert("Your password is either too short or too long. Remember, the password will only generate if it is between 8 and 128 characters long. Try again!");}
                        }

                        

                    } else if (confirm(specialRequest)) {                    
                        
                        // This part of the code will run if user wants to generate password that contains lowercase letters and special characters

                        // Builds confirmation string   
                        let output10 = genericOutput + lowerCaseOutput + andString + specialOutput + endPeriod;
                        // Creates a confirmation alert
                        alert(output10);

                        // Calls for password's length                      
                        let desiredLength = prompt("Please, enter the length you would like the password to be (between 8 and 128 characters.");        
                        // Sets of lowerCase letters and special characters 
                        let medley = "abcdefghijklmnopqrstuvwxyz!#$%&()*+,-./:;<=>?@[]^_`{|}~";
                        // Sets empty medleyItemsArray 
                        let medleyItemsArray = [];

                        if (desiredLength > 7 && desiredLength < 129) {
                        // Loop around medley's set the amount of password's desired length
                        for (i = 0; i < desiredLength; i++) {

                        // Establishes and pushes medley's items into empty array
                        let medleyItems = medley[Math.floor(Math.random() * medley.length)];
                        medleyItemsArray.push(medleyItems);
                    
                        // Generates and prints password into password HTML's index.html <div>
                        let passwordResult = medleyItemsArray.join("");
                            document.getElementById("password").innerHTML = passwordResult;
                        }  
                        }else {alert("Your password is either too short or too long. Remember, the password will only generate if it is between 8 and 128 characters long. Try again!");}                    
                           
                        } else {
                        
                        
                        // Builds confirmation string 
                        let output11 = genericOutput + lowerCaseOutput + endPeriod;
                        // Creates a confirmation alert
                        alert(output11);

                        
                        // Calls for password's length                      
                        let desiredLength = prompt("Please, enter the length you would like the password to be (between 8 and 128 characters.");        
                        // Sets of lowerCase letters
                        let medley = "abcdefghijklmnopqrstuvwxyz";
                        // Sets empty medleyItemsArray 
                        let medleyItemsArray = [];

                        if (desiredLength > 7 && desiredLength < 129) {
                        // Loop around medley's set the amount of password's desired length
                        for (i = 0; i < desiredLength; i++) {

                        // Establishes and pushes medley's items into empty array
                        let medleyItems = medley[Math.floor(Math.random() * medley.length)];
                        medleyItemsArray.push(medleyItems);
                    
                        // Generates and prints password into password HTML's index.html <div>
                        let passwordResult = medleyItemsArray.join("");
                            document.getElementById("password").innerHTML = passwordResult;
                        }           

                    } else {alert("Your password is either too short or too long. Remember, the password will only generate if it is between 8 and 128 characters long. Try again!");}
                    }
                     
            // Number request if false
            } else if (confirm(upperCaseRequest)) {
                if (confirm(numbersRequest)) {
                    if (confirm(specialRequest)) {

                        // Builds confirmation string 
                        let output5 = genericOutput + upperCaseOutput + separatingComma  + numbersOutput + andString + specialOutput + endPeriod;
                        // Creates a confirmation alert
                        alert(output5);
                        
                        // Calls for password's length                      
                        let desiredLength = prompt("Please, enter the length you would like the password to be (between 8 and 128 characters.");        
                        // Sets of uppercase letters, numbers and special characters 
                        let medley = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&()*+,-./:;<=>?@[]^_`{|}~";
                        // Sets empty medleyItemsArray 
                        let medleyItemsArray = [];

                        if (desiredLength > 7 && desiredLength < 129) {
                        // Loop around medley's set the amount of password's desired length
                        for (i = 0; i < desiredLength; i++) {

                        // Establishes and pushes medley's items into empty array
                        let medleyItems = medley[Math.floor(Math.random() * medley.length)];
                        medleyItemsArray.push(medleyItems);
                    
                        // Generates and prints password into password HTML's index.html <div>
                        let passwordResult = medleyItemsArray.join("");
                            document.getElementById("password").innerHTML = passwordResult;
                        }   
                        } else {alert("Your password is either too short or too long. Remember, the password will only generate if it is between 8 and 128 characters long. Try again!");}           


                    } else {
                        
                        // Builds confirmation string 
                        let output6 = genericOutput + numbersOutput + andString + upperCaseOutput + endPeriod;
                        // Creates a confirmation alert
                        alert(output6);
                    
                        // Calls for password's length                      
                        let desiredLength = prompt("Please, enter the length you would like the password to be (between 8 and 128 characters.");        
                        // Sets of uppercase letters and numbers 
                        let medley = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                        // Sets empty medleyItemsArray 
                        let medleyItemsArray = [];

                        if (desiredLength > 7 && desiredLength < 129) {
                        // Loop around medley's set the amount of password's desired length
                        for (i = 0; i < desiredLength; i++) {

                        // Establishes and pushes medley's items into empty array
                        let medleyItems = medley[Math.floor(Math.random() * medley.length)];
                        medleyItemsArray.push(medleyItems);
                    
                        // Generates and prints password into password HTML's index.html <div>
                        let passwordResult = medleyItemsArray.join("");
                            document.getElementById("password").innerHTML = passwordResult;
                        }           

                    } else {alert("Your password is either too short or too long. Remember, the password will only generate if it is between 8 and 128 characters long. Try again!");}
                    }   
                    
                } else if (confirm(specialRequest)) {

                    // Builds confirmation string 
                    let output7 = genericOutput + upperCaseOutput + andString + specialOutput + endPeriod;
                    // Creates a confirmation alert
                    alert(output7);

                    
                    // Calls for password's length                      
                    let desiredLength = prompt("Please, enter the length you would like the password to be (between 8 and 128 characters.");        
                    // Sets of uppercase letters and special characters 
                    let medley = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&()*+,-./:;<=>?@[]^_`{|}~";
                    // Sets empty medleyItemsArray 
                    let medleyItemsArray = [];

                    if (desiredLength > 7 && desiredLength < 129) {
                    // Loop around medley's set the amount of password's desired length
                    for (i = 0; i < desiredLength; i++) {

                    // Establishes and pushes medley's items into empty array
                    let medleyItems = medley[Math.floor(Math.random() * medley.length)];
                    medleyItemsArray.push(medleyItems);
                
                    // Generates and prints password into password HTML's index.html <div>
                    let passwordResult = medleyItemsArray.join("");
                        document.getElementById("password").innerHTML = passwordResult;
                    } 
                    } else {alert("Your password is either too short or too long. Remember, the password will only generate if it is between 8 and 128 characters long. Try again!");}          
                  
                } else {
                    

                    // Builds confirmation string 
                    let output12 = genericOutput + upperCaseOutput + endPeriod
                    // Creates a confirmation alert                    
                    alert(output12);
                
                
                    // Calls for password's length                      
                    let desiredLength = prompt("Please, enter the length you would like the password to be (between 8 and 128 characters.");        
                    // Sets of uppercase letters
                    let medley = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    // Sets empty medleyItemsArray 
                    let medleyItemsArray = [];

                    if (desiredLength > 7 && desiredLength < 129) {
                    // Loop around medley's set the amount of password's desired length
                    for (i = 0; i < desiredLength; i++) {

                    // Establishes and pushes medley's items into empty array
                    let medleyItems = medley[Math.floor(Math.random() * medley.length)];
                    medleyItemsArray.push(medleyItems);
                
                    // Generates and prints password into password HTML's index.html <div>
                    let passwordResult = medleyItemsArray.join("");
                        document.getElementById("password").innerHTML = passwordResult;
                    }            
                  
                } else {alert("Your password is either too short or too long. Remember, the password will only generate if it is between 8 and 128 characters long. Try again!");}
                }


            } else if (confirm(numbersRequest)) {
                if (confirm(specialRequest)) {

                    // Builds confirmation string 
                    let output13 = genericOutput + numbersOutput + andString + specialOutput + endPeriod;
                    // Creates a confirmation alert  
                    alert(output13);

                    // Calls for password's length                      
                    let desiredLength = prompt("Please, enter the length you would like the password to be (between 8 and 128 characters.");        
                    // Sets of numbers and symbols
                    let medley = "0123456789!#$%&()*+,-./:;<=>?@[]^_`{|}~";
                    // Sets empty medleyItemsArray 
                    let medleyItemsArray = [];

                    if (desiredLength > 7 && desiredLength < 129) {
                    // Loop around medley's set the amount of password's desired length
                    for (i = 0; i < desiredLength; i++) {

                    // Establishes and pushes medley's items into empty array
                    let medleyItems = medley[Math.floor(Math.random() * medley.length)];
                    medleyItemsArray.push(medleyItems);

                    // Generates and prints password into password HTML's index.html <div>
                    let passwordResult = medleyItemsArray.join("");
                        document.getElementById("password").innerHTML = passwordResult;
                    } 
                    } else {alert("Your password is either too short or too long. Remember, the password will only generate if it is between 8 and 128 characters long. Try again!");}     


                } else {
                    
                    // Builds confirmation string 
                    let output14 = genericOutput + numbersOutput + endPeriod;
                    // Creates a confirmation alert                      
                    alert(output14);
                
                
                    // Calls for password's length                      
                    let desiredLength = prompt("Please, enter the length you would like the password to be (between 8 and 128 characters.");        
                    // Sets of numbers
                    let medley = "0123456789";
                    // Sets empty medleyItemsArray 
                    let medleyItemsArray = [];

                    if (desiredLength > 7 && desiredLength < 129) {
                    // Loop around medley's set the amount of password's desired length
                    for (i = 0; i < desiredLength; i++) {

                    // Establishes and pushes medley's items into empty array
                    let medleyItems = medley[Math.floor(Math.random() * medley.length)];
                    medleyItemsArray.push(medleyItems);

                    // Generates and prints password into password HTML's index.html <div>
                    let passwordResult = medleyItemsArray.join("");
                        document.getElementById("password").innerHTML = passwordResult;
                    }      
                                
                } else {alert("Your password is either too short or too long. Remember, the password will only generate if it is between 8 and 128 characters long. Try again!");}
                }


            } else if (confirm(specialRequest)) {

                // Builds confirmation string 
                var output15 = genericOutput + specialOutput + endPeriod;
                // Creates a confirmation alert     
                alert(output15);

                        
                // Calls for password's length                      
                let desiredLength = prompt("Please, enter the length you would like the password to be (between 8 and 128 characters.");        
                // Sets of special characters
                let medley = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";
                // Sets empty medleyItemsArray 
                let medleyItemsArray = [];

                if (desiredLength > 7 && desiredLength < 129) {
                // Loop around medley's set the amount of password's desired length
                for (i = 0; i < desiredLength; i++) {

                // Establishes and pushes medley's items into empty array
                let medleyItems = medley[Math.floor(Math.random() * medley.length)];
                medleyItemsArray.push(medleyItems);

                // Generates and prints password into password HTML's index.html <div>
                let passwordResult = medleyItemsArray.join("");
                    document.getElementById("password").innerHTML = passwordResult;
                } 
                } else {alert("Your password is either too short or too long. Remember, the password will only generate if it is between 8 and 128 characters long. Try again!");}



            } else if(confirm(restartRequest)) {

                    //Return option for customer and lets the user know that (s)he may press on Password Generator to try again
                    alert(restartOutput);

                    // Returns error and will not run the rest of the JS application code
            } else {alert(errorRequestOutput)}  
                
        // Returns thank you note and invitation for user to visit Password Generator at a later time        
        } else {alert(thankYou);}
    }