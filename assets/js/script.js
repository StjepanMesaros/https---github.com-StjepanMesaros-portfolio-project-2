let bartender = document.getElementById("bartender-image");
let buttons = document.getElementsByClassName("button");
let header = document.getElementsByTagName("h1");
let paragraph = document.getElementsByTagName("p");
let buttonsDiv = document.getElementById("buttons-div");
let table = document.getElementById("table-image")
let dice = document.getElementsByClassName("die")



setTimeout(()=> {
    bartender.src = "assets/images/bartender3.png";
    
},1000);

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", gameModeSelected);
}


/*function chosenNumberOfDice () {
    bartender.src = "assets/images/bartender4.png";
    buttons[0].innerHTML = "Single Game";
    buttons[1].innerHTML = "Against a PC";
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].removeEventListener("click", chosenNumberOfDice)
        buttons[i].addEventListener("click", gameModeSelected);
    }
    numberOfDice = this.name;
}
*/

let score = 0;
let numberOfDice = "";
function  gameModeSelected () {
    //Show dice
    numberOfDice = this.name;
    showDice()

    //Hides Title and text
    score = 0;
    header[0].innerHTML = `Score: ${score}`;
    paragraph[0].style.display = "none";

    //Changes bartdender image to "Good Luck!" and then plain
    bartender.src = "assets/images/bartender5.png";
    setTimeout(()=> {
        bartender.src = "assets/images/bartender.png";
    },1000);
    
   

    //Changes names of the buttons
    buttons[1].style.display = "flex";
    buttons[0].innerHTML = "Higher";
    buttons[1].innerHTML = "Lower";
    buttons[0].name = "Higher";
    buttons[1].name = "Lower";

    // Remove event listeners
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].removeEventListener("click", gameModeSelected);
    }

    //Shows dice
    
}
//Create a starting dice number variables
let diceNumberTotal1 = 0;
let diceNumberTotal2 = 0;

//Shows dice
function showDice() {
    if (numberOfDice === "button-one") {
        dice[0].style.display = "flex";
        let diceNumber = Math.floor(Math.random() * 6 + 1);
        dice[0].src = `assets/images/number-${diceNumber}.png`;
        diceNumberTotal1 += diceNumber;
    } else {
        for (let i = 0; i < dice.length; i++) {
            dice[i].style.display = "flex";
            let diceNumber = Math.floor(Math.random() * 6 + 1);
            dice[i].src = `assets/images/number-${diceNumber}.png`
            diceNumberTotal1 += diceNumber;
        }
    }
    addEventListenerToButtons()
}


function addEventListenerToButtons () {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", resetTheBoard)
    }

}

function resetTheBoard () {
    let eventTrigerer = this.name;
    rollDice();
    compareRolls(eventTrigerer);
    addEventListenerToButtons();
    diceNumberTotal1 = diceNumberTotal2;
    diceNumberTotal2 = 0;

}



// Create dice roll function 
function rollDice () {
    for (let i = 0; i < dice.length; i++) {
        let diceNumber = Math.floor(Math.random() * 6 + 1);
        dice[i].src = `assets/images/number-${diceNumber}.png`
        diceNumberTotal2 += diceNumber; 
    }
}

// Compares rolls
function compareRolls (eventTrigerer){
    if (eventTrigerer === "Higher"){
        if (diceNumberTotal2 > diceNumberTotal1){
            score ++;
            header[0].innerHTML = `Score: ${score}`;

        }else if (diceNumberTotal2 < diceNumberTotal1) {
            header[0].innerHTML = "Sorry You lose!";
            buttons[0].innerHTML = "Reset the game?"
            buttons[1].style.display = "none";
            buttons[0].addEventListener("click", gameModeSelected);

        }else{
            header[0].innerHTML = "Oops, it looks like it's even! Here is another try!";

        }
    }else if (eventTrigerer === "Lower") {
        if (diceNumberTotal2 > diceNumberTotal1){
            header[0].innerHTML = "Sorry You lose!";
            buttons[0].innerHTML = "Reset the game?"
            buttons[1].style.display = "none";
            buttons[0].addEventListener("click", gameModeSelected);

        }else if (diceNumberTotal2 < diceNumberTotal1) {
            score++
            header[0].innerHTML = `Score: ${score}`;

        }else{
            header[0].innerHTML = "Oops, it looks like it's even! Here is another try!";
        
        }
    }else{
        header[0].innerHTML = "Sorry there has been a problem! Please reload the website!"
    
    }
} 







