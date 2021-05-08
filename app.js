var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");
var score = document.getElementById("score");
var selected = document.getElementById("selected");
var output = document.getElementById("output");
var playerResult;
var computerResult;
var outputText;
var num1 = 0;
var num2 = 1;
var num3 = 2;
function random(n) {
    var randomInt = Math.floor(Math.random() * 3);

    var player = n;
    var computer = randomInt;

    if (n == num1) {
        playerResult = "Rock";
    }
    if (n == num2) {
        playerResult = "Paper";
    }
    if (n == num3) {
        playerResult = "Scissors";
    }

    if (randomInt == num1) {
        computerResult = "Rock";
    }
    if (randomInt == num2) {
        computerResult = "Paper";
    }
    if (randomInt == num3) {
        computerResult = "Scissors";
    }

    if (n == num1 && randomInt == num1) {
        outputText = "Draw.";
    }

    if (n == num1 && randomInt == num2) {
        outputText = "Computer wins!";
    }

    if (n == num1 && randomInt == num3) {
        outputText = "Player wins!";
    }

    if (n == num2 && randomInt == num1) {
        outputText = "Player wins!";
    }

    if (n == num2 && randomInt == num2) {
        outputText = "Draw.";
    }

    if (n == num2 && randomInt == num3) {
        outputText = "Computer wins!";
    }

    // 0 бьёт 2, 2 бьёт 1, 1 бьёт 0

    if (n == num3 && randomInt == num1) {
        outputText = "Computer wins!";
    }

    if (n == num3 && randomInt == num2) {
        outputText = "Player wins!";
    }

    if (n == num3 && randomInt == num3) {
        outputText = "Draw.";
    }

    score.innerHTML = "Player: " + "[ " + player + " ] " + "Computer: " + "[ " + computer + " ]";
    selected.innerHTML = "Player: " + "<b>" + playerResult + "</b>" + " Computer: " + "<b>" + computerResult + "</b>";
    output.innerHTML = outputText;
}