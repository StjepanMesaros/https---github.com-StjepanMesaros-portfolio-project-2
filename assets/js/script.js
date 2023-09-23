let bartender = document.getElementById("bartender-image");
let buttons = document.getElementsByClassName("button");
let header = document.getElementsByTagName("h1");
let paragraph = document.getElementsByTagName("p");
let buttonsDiv = document.getElementById("buttons-div");
let table = document.getElementById("table-image")
let dice = document.getElementsByClassName("die")

console.log(buttons)


setTimeout(()=> {bartender.src = "assets/images/bartender3.png"},1000);

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", chosenNumberOfDice);
}

function chosenNumberOfDice () {
    bartender.src = "assets/images/bartender4.png";
    buttons[2].style.display = "flex";
    buttons[2].style.textAlign = "center";
    buttons[0].innerHTML = "Single Game";
    buttons[1].innerHTML = "Against a PC";
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", gameModeSelected);
    }
}



function  gameModeSelected (event) {
    //let gameModePressed = event.value;

    //Hides Title and text
    header[0].innerHTML = `Score: ${score}`;
    paragraph[0].style.display = "none";

    //Changes bartdender image to "Good Luck!" and then plain
    bartender.src = "assets/images/bartender5.png";
    setTimeout(()=> {
        bartender.src = "assets/images/bartender.png";
    },1000);
    
    //Changes display properties of buttons and makes them align in a row
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.display = "flex";
        buttons[i].style.justifyContent = "space-between";
        buttons[i].style.width = "30%";
    }
    //Changes display properties of the div where buttons are
    buttonsDiv.style.display = "flex"
    buttonsDiv.style.flexDirection = "row";

    //Changes names of the buttons
    buttons[0].innerHTML = "Higher";
    buttons[1].innerHTML = "Lower";

    //Hides a 3rd button
    buttons[2].style.display = "none";

    //Shows randomised dice
    showDice()
}

function showDice() {
    for (let i = 0; i < dice.length; i++) {
        dice[i].style.display = "flex"
        let diceNumber = Math.floor(Math.random() * 6 + 1);
        dice[i].src = `assets/images/number-${diceNumber}.png`
    } 
    
    
}

