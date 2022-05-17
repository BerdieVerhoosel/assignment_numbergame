function registerName() {
    console.log("Asking for name and give greeting");
    let person = prompt("Type your name", "name");
    if (person != null) {
        document.getElementById("demo").innerHTML =
            "Hey " + person + "! Welcome to The Number Game.";
    }
}

function startGuessing() {
    console.log("Asking for a number");
    let enterNumber = prompt("Enter a number between 0-3 to start guessing...", "0-3");
    let chosenNumber = parseInt(enterNumber);
    if (chosenNumber >= 1 && chosenNumber <= 25) {
        getRandomNumber(chosenNumber);
    }
    else {
        window.location.replace("validNumber.html");
    }

}

function getRandomNumber(guessedNumber) {

    let generatedNumber = Math.floor((Math.random() * 2) + 1);
    alert("The right number was....");
    alert(generatedNumber);


    if (generatedNumber === guessedNumber) {
        window.location.replace("youWon.html");
    }
    else {
        window.location.replace("tryagain.html");
    }
}
