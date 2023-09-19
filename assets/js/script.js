let bartender = document.getElementsByTagName("img");
let buttons = document.getElementsByTagName("button")
let buttonsCss = document.querySelector(".button")

setTimeout(()=> {bartender[0].src = "assets/images/bartender3.png"},3000);

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", chosenNumberOfDice);
}

function chosenNumberOfDice () {
    bartender[0].src = "assets/images/bartender4.png";
    buttons[2].style.display = "flex";
    buttons[0].innerHTML = "Single Game";
    buttons[1].innerHTML = "Against a PC"
    buttons[2].innerHTML = "Against a 2nd Player"
    //buttonsCss.style.margin = "-25px auto 10px auto";
}