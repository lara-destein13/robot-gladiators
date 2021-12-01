// // this is another window function called a prompt. allows user to input a name for their robot.
// // when we add var playerName = in front of the window.prompt function we use a variable to store the player's 
// // name in the browser's memory.
// var playerName = window.prompt("What is your robot's name?");
// // this adds an alert with the player's name:
// // window.alert(playerName);
// // this will show the player's name input by the user in the console:
// console.log(playerName); 
// console.log("This logs a string");
// // this will do math and log 20
// console.log(10+10);
// // what is this? we use a + after the closing quotation, then write the variable name in order 
// // to combine a string with a variable - aka string concatenation:
// console.log("Our robot's name is " + playerName);
// // this creates a function called "fight" we are declaring a function. This is an example of a 
// // function declaration where we create a function using the function keyword first.
// function fight() {
//     window.alert("The fight has begun!");
// }
// // we have to call the fight function declared above for the text in the alert window to show up
// // fight();

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;


// This is a function expression: This is when we create a function by assigning it to a variable.
// The following code shows an example. First we create the function, then we execture a function.
var fight = function() {
    // Alert players that theyare starting the round
    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    
    // Subtract the value of 'playerAttack from the value of 'enemyHealth' and use that result to
    // update the value in 'enemyHealth' variable
    enemyHealth = enemyHealth - playerAttack;

    // Log a resulting message to the console so we know that it worked. 
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    // if player chooses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + "health remaining."
        );
    }

    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    } else {
        window.alert(enemyName + " still has " + enemyHealth + "health left.");
    }

    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );


    enemyHealth = enemyHealth - playerAttack;
    console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + "health remaining."
        );
    }


    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + "health remaining.");
    }

    // check player's health
    if (playerHealth <=0) {
            window.alert(playerName + "has died!");
    } else {
        window.alert(playerName + " has died!");
    }

    // Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update 
    // the value in the 'playerHealth' variable.
    playerHealth = playerHealth - enemyAttack;

    // Log a resulting message to the console so we know that it worked
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining. "
    );    

    // check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + "has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + "health left.");
    }

}

fight();









// More notes: 😊

// This is a String data type; it must be wrapped in double quotes (" ") or single quotes (' ').
// var stringDataType = "This is a string, which is a fancy way to say text";

// This is a Number data type; it can be an integer (whole number) or have decimals (floated numbers).
// var numberIntegerDataType = 10;
// var numberFloatDataType = 10.4;

// This is a Boolean data type, which can only be given a value of true or false.
// var booleanDataType = true;




// write a function declaration for fight
// function fight() {
//     window.alert("the fight has begun")
// }

// fight();


// write a function expression for fight

// var fight = function() {
//     window.alert("the fight has begun");
// }

// fight();


