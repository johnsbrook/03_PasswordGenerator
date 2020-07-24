function dialog() {

    if (confirm(passwordRequest)) {
    
        if (confirm(lowerCaseRequest)) { 
        
            //Creates output string
            let output11 = genericOutput + lowerCaseOutput + endPeriod;
            // Creates a confirmation alert
            alert(output11);    
        
            // Calls Random Lowercase Letters                      
            let desiredLength = prompt("How long would you like the password to be?");        
            // Sets lowerCase letters 
            let lowerLetters = "abcdefghijklmnopqrstuvwxyz";
            // let lowerLettersArray = [];
            let lowerLettersItemsArray = [];
        
            for (i = 0; i < desiredLength; i++) {
        
                let lowerLettersItems = lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
                    lowerLettersItemsArray.push(lowerLettersItems);
                    
            } let passwordResult = lowerLettersItemsArray.join("");
                  document.getElementById("password").innerHTML = passwordResult;
      
        } else if (confirm(upperCaseRequest)) {
                
                // Creates output string
                let output12 = genericOutput + upperCaseOutput + endPeriod;
                // Creates a confirmation alert
                alert(output12);            
            
                // Calls for Uppercase Letters                
                let desiredLength = prompt("How long would you like the password to be?");                                            
                // Sets upperCase Letters
                let upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                // Created empty upperCase Array
                let upperCaseLettersItemsArray = [];
            
                // Loops until the password desired length is 0
                for (i = 0; i < desiredLength; i++) {
            
                    let upperCaseLettersItems = upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
                        upperCaseLettersItemsArray.push(upperCaseLettersItems);
                    
                } let passwordResult = upperCaseLettersItemsArray.join("");
                    document.getElementById("password").innerHTML = passwordResult;
    
                } else document.getElementById("password").innerHTML = "Error in generating your password. Try again!";
    
        } else document.getElementById("password").innerHTML = "Thank you, see you soon!";
    
    }


if (confirm(upperCaseRequest)) { 
    
    let output12 = genericOutput + upperCaseOutput + endPeriod;
    alert(output12);
    

    // Calls for Uppercase Letters                
    let desiredLength = prompt("How long would you like the password to be?");
                                    
    console.log(typeof(desiredLength));
    console.log(desiredLength);


    let upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let upperCaseLettersItemsArray = [];

    for (i = 0; i < desiredLength; i++) {

        let upperCaseLettersItems = upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
            upperCaseLettersItemsArray.push(upperCaseLettersItems);
        
    } let passwordResult = upperCaseLettersItemsArray.join("");
        document.getElementById("password").innerHTML = passwordResult;

}



            // //Calls for Uppercase Letters
            // function upperCaseLetters() {      
                
                var desiredLength = prompt("How long would you like the password to be?");
                                    
                    console.log(typeof(desiredLength));
                    console.log(desiredLength);

            
                var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                var upperCaseLettersItemsArray = [];

                for (i = 0; i < desiredLength; i++) {

                    var upperCaseLettersItems = upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
                        upperCaseLettersItemsArray.push(upperCaseLettersItems);
                        
                } var passwordResult = upperCaseLettersItemsArray.join("");
                    document.getElementById("password").innerHTML = passwordResult;
            // }

            //Calls for Numbers
               function numbers() {      
            
                var desiredLength = prompt("How long would you like the password to be?");
                                    
                    console.log(typeof(desiredLength));
                    console.log(desiredLength);
    
              
                var numbers = "0123456789";
                var numbersItemsArray = [];
    
                for (i = 0; i < desiredLength; i++) {
    
                    var numbersItems = numbers[Math.floor(Math.random() * numbers.length)];
                        numbersItemsArray.push(numbersItems);
                        
                } var passwordResult = numbersItemsArray.join("");
                    document.getElementById("password").innerHTML = passwordResult;
            }

            //Calls for Special Characters
            function specialCharacters() {      
            
                var desiredLength = prompt("How long would you like the password to be?");
                                    
                    console.log(typeof(desiredLength));
                    console.log(desiredLength);
    
              
                var specialCharacters = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";
                var specialCharactersItemsArray = [];
    
                for (i = 0; i < desiredLength; i++) {
    
                    var specialCharactersItems = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
                        specialCharactersItemsArray.push(specialCharactersItems);
                        
                } var passwordResult = specialCharactersItemsArray.join("");
                    document.getElementById("password").innerHTML = passwordResult;
            }



        var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var numbers = "0123456789";
        var specialCharacters = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";
 