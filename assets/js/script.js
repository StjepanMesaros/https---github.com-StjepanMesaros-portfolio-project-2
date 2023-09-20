let bartender = document.getElementById("bartender-image");
let buttons = document.getElementsByClassName("button");
let header = document.getElementsByTagName("h1");
let paragraph = document.getElementsByTagName("p");
let div = document.getElementsByTagName("div");
let table = document.getElementById("table-image")
let dice = document.getElementsByClassName("dice-images")



setTimeout(()=> {bartender.src = "assets/images/bartender3.png"},1000);

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", chosenNumberOfDice);
}

function chosenNumberOfDice () {
    bartender.src = "assets/images/bartender4.png";
    buttons[2].style.display = "flex";
    buttons[0].innerHTML = "Single Game";
    buttons[1].innerHTML = "Against a PC"
    buttons[2].innerHTML = "Against a 2nd Player"
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", gameModeSelected);
    }
}

function  gameModeSelected (event) {
    //let gameModePressed = event.value;
    header[0].style.display = "none";
    paragraph[0].style.display = "none";
    bartender.src = "assets/images/bartender5.png";
    
    setTimeout(()=> {
        bartender.src = "assets/images/bartender.png";
    },1000);
    bartender.style.maxWidth = "80%";
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.display = "flex";
        buttons[i].style.justifyContent = "space-between";
        buttons[i].style.width = "30%";
    }
    buttons[2].style.display = "none";
    div[0].style.display = "flex"
    div[0].style.flexDirection = "row";
    
}

function showTableAndDice() {
    table.style.display = "flex"
    dice[0].style.display = "flex"
    
}

