
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
var restartOutput = "Let's try again! Please, click or tab on refresh button or press F-5 key if you're using a desktop or laptop computer.";
var errorRequestOutput = "You have not selected any possible options and a password has not been generated.";
var thankYou = "Thank you, see you soon!";


// These varible are possible outputs with valid responses to generate password
var output1 = genericOutput + lowerCaseOutput + separatingComma + upperCaseOutput + separatingComma + numbersOutput + andString + specialOutput + endPeriod;
var output2 = genericOutput + lowerCaseOutput + separatingComma + upperCaseOutput + andString + numbersOutput + endPeriod;
var output3 = genericOutput + lowerCaseOutput + separatingComma + upperCaseOutput + andString + specialOutput + endPeriod;
var output4 = genericOutput + lowerCaseOutput + andString + upperCaseOutput + endPeriod;
var output5 = genericOutput + upperCaseOutput + separatingComma  + numbersOutput + andString + specialOutput + endPeriod;
var output6 = genericOutput + numbersOutput + andString + upperCaseOutput + endPeriod;
var output7 = genericOutput + upperCaseOutput + andString + specialOutput + endPeriod;
var output8 = genericOutput + lowerCaseOutput + separatingComma + numbersOutput + andString + specialOutput + endPeriod;
var output9 = genericOutput + lowerCaseOutput + andString + numbersOutput + endPeriod;
var output10 = genericOutput + lowerCaseOutput + andString + specialOutput + endPeriod;
var output11 = genericOutput + lowerCaseOutput + endPeriod;
var output12 = genericOutput + upperCaseOutput + endPeriod;
var output13 = genericOutput + numbersOutput + andString + specialOutput + endPeriod;
var output14 = genericOutput + numbersOutput + endPeriod;
var output15 = genericOutput + specialOutput + endPeriod; 


// This section is the conditional statement area

function dialog() {

        if (confirm(passwordRequest)) {       
            if (confirm(lowerCaseRequest)) {
                if(confirm(upperCaseRequest)) {

                    
                    // Tree created if upperCase request is true
                    if (confirm(numbersRequest)) {

                        if (confirm(specialRequest)) {

                            // This part of the code will happen if user wants to generate a password that contains all elements

                            // Builds confirmation string
                            let output1 = genericOutput + lowerCaseOutput + separatingComma + upperCaseOutput + separatingComma + numbersOutput + andString + specialOutput + endPeriod;
                            // Creates a confirmation alert
                            alert(output1);

                            // Calls for password's length                      
                            let desiredLength = prompt("How long would you like the password to be?");        
                            // Sets of lowerCase letters, upperCase letters, numbers and specialCharacters (medley)
                            let medley = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&()*+,-./:;<=>?@[]^_`{|}~";
                            // Sets empty medleyItemsArray 
                            let medleyItemsArray = [];
                        
                            // Loop around medley's set the amount of password's desired length
                            for (i = 0; i < desiredLength; i++) {
                        
                                // Establishes and pushes medley's items into empty array
                                let medleyItems = medley[Math.floor(Math.random() * medley.length)];
                                    medleyItemsArray.push(medleyItems);
                            
                            // Generates and prints password into password HTML's index.html <div>
                            } let passwordResult = medleyItemsArray.join("");
                                document.getElementById("password").innerHTML = passwordResult;

                           
                        // This part of the code will happen if user wants to generate password that contains all elements, except special characters
                        } else {
                            
                            // Builds confirmation string
                            let output2 = genericOutput + lowerCaseOutput + separatingComma + upperCaseOutput + andString + numbersOutput + endPeriod;
                            // Creates a confirmation alert
                            alert(output2);
                        
                            // Calls for password's length                      
                            let desiredLength = prompt("How long would you like the password to be?");        
                            // Sets of lowerCase letters, upperCase letters and numbers (medleyNoSpecialCharacters)
                            let medley = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                            // Sets empty medleyItemsArray 
                            let medleyItemsArray = [];
                        
                            // Loop around medley's set the amount of password's desired length
                            for (i = 0; i < desiredLength; i++) {
                        
                                // Establishes and pushes medley's items into empty array
                                let medleyItems = medley[Math.floor(Math.random() * medley.length)];
                                    medleyItemsArray.push(medleyItems);
                            
                            // Generates and prints password into password HTML's index.html <div>
                            } let passwordResult = medleyItemsArray.join("");
                                document.getElementById("password").innerHTML = passwordResult;
                        
                        }

                    // This part of the code will happen if user wants to generate password that contains all elements, except numbers
                    } else if (confirm(specialRequest)) {      

                        // Builds confirmation string    
                        let output3 = genericOutput + lowerCaseOutput + separatingComma + upperCaseOutput + andString + specialOutput + endPeriod;
                        // Creates a confirmation alert
                        alert(output3);

                        // Calls for password's length                      
                        let desiredLength = prompt("How long would you like the password to be?");        
                        // Sets of lowerCase letters, upperCase letters and numbers (medleyNoNumbers)
                        let medley = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&()*+,-./:;<=>?@[]^_`{|}~";
                        // Sets empty medleyItemsArray 
                        let medleyItemsArray = [];

                        // Loop around medley's set the amount of password's desired length
                        for (i = 0; i < desiredLength; i++) {
                    
                            // Establishes and pushes medley's items into empty array
                            let medleyItems = medley[Math.floor(Math.random() * medley.length)];
                                medleyItemsArray.push(medleyItems);
                        
                        // Generates and prints password into password HTML's index.html <div>
                        } let passwordResult = medleyItemsArray.join("");
                            document.getElementById("password").innerHTML = passwordResult;

                            // output #4
                        } else {
                            
                             // Builds confirmation string    
                            let output4 = genericOutput + lowerCaseOutput + andString + upperCaseOutput + endPeriod;
                            // Creates a confirmation alert
                            alert(output4);} 

                            // Calls for password's length                      
                            let desiredLength = prompt("How long would you like the password to be?");        
                            // Sets of lowerCase letters and upperCase letters (medleyNoNumbersNoSpecialCharacters)
                            let medley = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                            // Sets empty medleyItemsArray 
                            let medleyItemsArray = [];

                            for (i = 0; i < desiredLength; i++) {
                    
                                // Establishes and pushes medley's items into empty array
                                let medleyItems = medley[Math.floor(Math.random() * medley.length)];
                                    medleyItemsArray.push(medleyItems);
                            
                            // Generates and prints password into password HTML's index.html <div>
                            } let passwordResult = medleyItemsArray.join("");
                                document.getElementById("password").innerHTML = passwordResult;
                
                
                // This tree is created if upperCase request is false
                } else if (confirm(numbersRequest)) {






                        if (confirm(specialRequest)) {
                            // output #8
                            alert(output8);
                                // output #9
                        } else {alert(output9);}
                    } else if (confirm(specialRequest)) {                    
                        // output #10
                        alert(output10);
                            // output #11
                    } else {alert(output11);}
                     
            // Number request if false
            } else if (confirm(upperCaseRequest)) {
                if (confirm(numbersRequest)) {
                    if (confirm(specialRequest)) {
                        //output #5
                        alert(output5);
                    // output #6
                    } else {alert(output6);}            
                } else if (confirm(specialRequest)) {
                    // output #7
                    alert(output7);
                        // Return error with no valid options to generate password
                } else {alert(output12);}
                
            } else if (confirm(numbersRequest)) {
                if (confirm(specialRequest)) {
                    alert(output13);
                } else {alert(output14);}

            } else if (confirm(specialRequest)) {
                document.getElementById("password").innerHTML = "Password";
                alert(output15);
            } else if(confirm(restartRequest)) {
                    alert(restartOutput);
                    // Returns error and will not run the rest of the JS application code
                } else {alert(errorRequestOutput)}   
        } else {alert(thankYou);}




// dialog() function ends here
}

