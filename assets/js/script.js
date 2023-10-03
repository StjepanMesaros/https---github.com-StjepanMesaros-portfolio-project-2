/*jshint esversion: 6 */
// Getting elements by Class
let dice = document.getElementsByClassName("die");
let buttons = document.getElementsByClassName("button");

// Getting elements by Tag
let header = document.getElementsByTagName("h1");
let paragraph = document.getElementsByTagName("p");

// Getting elements by Id
let bartender = document.getElementById("bartender-image");

// Generally accessed variables
let diceNumberTotal1 = 0;
let diceNumberTotal2 = 0;
let score = 0;
let numberOfDice = "";

// Chnages bartender image after 1s to change the text
setTimeout(() => {
    bartender.src = "assets/images/bartender3.png";
}, 1000);

// Adding event listeners to buttons that will choose between 1 or 2 dice
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", gameModeSelected);
}

// Function that shows dice, transforms title into a scoring system, changes bartdender image and changes button text
function gameModeSelected() {
    // Show a chosen number of dice
    numberOfDice = this.name;
    showDice();

    // Show scoring system
    score = 0;
    header[0].innerHTML = `Score: ${score}`;
    paragraph[0].style.display = "none";

    // Changes bartdender image to "Good Luck!" and then plain
    bartender.src = "assets/images/bartender4.png";
    setTimeout(() => {
        bartender.src = "assets/images/bartender.png";
    }, 1000);

    // Changes names of the buttons
    buttons[0].innerHTML = "Higher";
    buttons[1].innerHTML = "Lower";

    // Remove event listeners
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].removeEventListener("click", gameModeSelected);
    }
}


// After the user chooses 1 or 2 dice the function then goes through the process of showing them, randomly choosing a number on them and allocates varibales with a sum number for comparison
function showDice() {
    if (numberOfDice === "button-one") {

        dice[0].style.display = "flex";
        let diceNumber = Math.floor(Math.random() * 6 + 1);
        dice[0].src = `assets/images/number-${diceNumber}.png`;
        diceNumberTotal1 += diceNumber;
        numberOfDice = 1;

    } else {
        for (let i = 0; i < dice.length; i++) {

            dice[i].style.display = "flex";
            let diceNumber = Math.floor(Math.random() * 6 + 1);
            dice[i].src = `assets/images/number-${diceNumber}.png`;
            diceNumberTotal1 += diceNumber;
            numberOfDice = 2;

        }
    }

    // Add event listeners
    addEventListenerToButtons();
}

// Function designed to add event listeners that launch a function that compares rolls and decides if user is correct or not
function addEventListenerToButtons() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", resetTheBoard);
    }
}

// Function created as an idea of the main function that combines all other functions and does all the processing
function resetTheBoard() {
    // Store a buttons name that activated this event
    let eventTrigerer = this.name;

    rollDice();
    compareRolls(eventTrigerer);
    addEventListenerToButtons();
    // Swaps the new roll's total into the old roll's total variable
    diceNumberTotal1 = diceNumberTotal2;
    diceNumberTotal2 = 0;
}

// If the game is lost then this function will reset the website
function refreshWebsite() {
    location.reload(true);
}

// Function that randomly rolls the dice  
function rollDice() {
    for (let i = 0; i < numberOfDice; i++) {

        let diceNumber = Math.floor(Math.random() * 6 + 1);
        dice[i].src = `assets/images/number-${diceNumber}.png`;
        diceNumberTotal2 += diceNumber;

    }
}

// Function that compares the new roll to the old one and prompts a message or brings the score up
function compareRolls(eventTrigerer) {
    if (eventTrigerer === "button-one") {
        if (diceNumberTotal2 > diceNumberTotal1) {

            score++;
            header[0].innerHTML = `Score: ${score}`;

        } else {

            header[0].innerHTML = `Sorry You lose! Your final score is: ${score}!`;
            buttons[0].innerHTML = "Reset the game?";
            buttons[1].style.display = "none";
            buttons[0].addEventListener("click", refreshWebsite);

        }
    } else if (eventTrigerer === "button-two") {
        if (diceNumberTotal2 < diceNumberTotal1) {

            score++;
            header[0].innerHTML = `Score: ${score}`;

        } else {

            header[0].innerHTML = `Sorry You lose! Your final score is: ${score}!`;
            buttons[0].innerHTML = "Reset the game?";
            buttons[1].style.display = "none";
            buttons[0].addEventListener("click", refreshWebsite);

        }
    } else {
        header[0].innerHTML = "Sorry there has been a problem! Please reload the website!";
    }
}