// Game States
// "WIN" - Player robot has defeated all enemy-robots
//  * Fight all enemy-robots
//  * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

//var playerName = 'Metal Man';
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


// This is a function (our fight function) expression: This is when we create a function by assigning it to a variable.
// The following code shows an example. First we create the function, then we execture a function.
var fight = function(enemyName) {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    // ask player if they would like to fight or run
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    // if player chooses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + "health remaining."
        );
    
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

        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + "has died!");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + "health left.");
        }

        // if player chooses to skip
        } else if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
        }
        // if no (false), ask question again by running fight() again
        else {
            fight();
        }
        // if player did not choose 1 or 2 in prompt
        } else {
            window.alert("You need to pick a valid option. Try again!");
        }
    };  

    // run the fight function to start game
    for(var i = 0; i < enemyNames.length; i++) {
        fight(enemyNames[i]);
    }


    





// More notes: 😊

// This is a String data type; it must be wrapped in double quotes (" ") or single quotes (' ').
// var stringDataType = "This is a string, which is a fancy way to say text";

// This is a Number data type; it can be an integer (whole number) or have decimals (floated numbers).
// var numberIntegerDataType = 10;
// var numberFloatDataType = 10.4;

// This is a Boolean data type, which can only be given a value of true or false.
// var booleanDataType = true;

// // create function (function declaration)
// function fight() {
//     window.alert("Welcome to Robot Gladiators!");
// }
// // execute function
// fight();

// // create function (function expression)
// var fight = function() {
//     window.alert("Welcome to Robot Gladiators!");
// };
// // execute function
// fight();

 // // this is another window function called a prompt. allows user to input a name for their robot.
 // // when we add var playerName = in front of the window.prompt function we use a variable to store the player's 
 // // name in the browser's memory.
//  var playerName = window.prompt("What is your robot's name?");

// // this adds an alert with the player's name:
// window.alert(playerName);

// // this will show the player's name input by the user in the console:
// console.log(playerName); 
// console.log("This logs a string");

// // // this will do math and log 20
// console.log(10+10);

// // // what is this? we use a + after the closing quotation, then write the variable name in order 
// // // to combine a string with a variable - aka string concatenation:
// console.log("Our robot's name is " + playerName);

// // this creates a function called "fight" we are declaring a function. This is an example of a 
// // function declaration where we create a function using the function keyword first.
// function fight() {
//     window.alert("The fight has begun!");
// }

// we have to call the fight function declared above for the text in the alert window to show up
// fight();

    // // remove enemy's health by subtracting the amount set in the playerAttack variable
    // enemyHealth = enemyHealth - playerAttack;
    // console.log(
    //     playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + "health remaining.");
    // };

    // // check player's health
    // if (playerHealth <=0) {
    //         window.alert(playerName + "has died!");
    // } else {
    //     window.alert(playerName + " has died!");
    // }

    // // Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update 
    // // the value in the 'playerHealth' variable.
    // playerHealth = playerHealth - enemyAttack;

    // // Log a resulting message to the console so we know that it worked
    // console.log(
    //     enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining. "
    // );    

    //  // Subtract the value of 'playerAttack from the value of 'enemyHealth' and use that result to
    // //  // update the value in 'enemyHealth' variable
    // enemyHealth = enemyHealth - playerAttack;

    // //  // Log a resulting message to the console so we know that it worked. 
    //     console.log(
    //         playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    //     );
    // }