
// Variable

var winCount = 0;
var loseCount = 0;
var random;
var userScore = 0;
var crystalNum = [];
var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;


// Number Generators

function randomNumber() {
    random = Math.floor(Math.random() * 120) + 19;
    return random
}

console.log(randomNumber());

function crystalValue() {

    for (var i = 0; i < 4; i++) {
        var cryNumGen;
        cryNumGen = Math.floor(Math.random() * 12) + 1;
        crystalNum.push(cryNumGen);
    }
    return crystalNum;
}

console.log(crystalValue());

// Buttons

$("#button1").on("click", function () {
    crystal1 = crystalNum[0];
    userScore = userScore + crystal1;
    console.log(userScore);
});

$("#button2").on("click", function () {
    crystal2 = crystalNum[1];
    userScore = userScore + crystal2;
    console.log(userScore);
});

$("#button3").on("click", function () {
    crystal3 = crystalNum[2];
    userScore = userScore + crystal3;
    console.log(userScore);
});

$("#button4").on("click", function () {
    crystal4 = crystalNum[3];
    userScore = userScore + crystal4;
    console.log(userScore);
});

console.log(userScore);