
// Variable

var winCount = 0;
var loseCount = 0;
var random;
var userScore = 0;
var crystalNum = [];


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
    var crystal1;
    crystal1 = crystalNum[0];
    userScore = userScore + crystal1;
    console.log(userScore);
    $("#scoreNum").text("User Score: " + userScore);
    condition();
    $("#randomNum").text("Goal: " + random)
});

$("#button2").on("click", function () {
    var crystal2; 
    crystal2 = crystalNum[1];
    userScore = userScore + crystal2;
    console.log(userScore);
    $("#scoreNum").text("User Score: " + userScore);
    condition();
    $("#randomNum").text("Goal: " + random)
});

$("#button3").on("click", function () {
    var crystal3;
    crystal3 = crystalNum[2];
    userScore = userScore + crystal3;
    console.log(userScore);
    $("#scoreNum").text("User Score: " + userScore);
    condition();
    $("#randomNum").text("Goal: " + random)
});

$("#button4").on("click", function () {
    var crystal4;
    crystal4 = crystalNum[3];
    userScore = userScore + crystal4;
    console.log(userScore);
    $("#scoreNum").text("User Score: " + userScore);
    condition();
    $("#randomNum").text("Goal: " + random)
});

// Win and loss condition

function condition(){
    
    if (userScore === random) {
        winCount++;
        $("#winValue").text("Wins: " + winCount);
        console.log(winCount);
        reset();
            }
    else if (userScore >= random) {
        loseCount++;
        $("#loseValue").text("Losses: " + loseCount);
        console.log(loseCount);
        reset();    
    }
};

// reset

function reset(){
    crystalNum = [];
    randomNumber();
    crystalValue();
    userScore = 0;
    $("#scoreNum").text("User Score: " + userScore);
};