
var difficultie;

function choseDificultie(){
    difficultie=prompt("chose you difficultie:\nE . Easy\nM . Medium\nH . Hard");
}

function replay(){
    var choice = prompt("Do you want to play again? (Y/N)");
    if(choice.toUpperCase() == 'Y'){
        game();
    }
}
function game(){
    alert("Welcome to the guessing game!!!!!");
    //chosing difficultie
    choseDificultie();
    var numberGuesses,range;
    if(difficultie.toUpperCase()=='E'){
        numberGuesses=4;
        range=10;
    }
    else if(difficultie.toUpperCase()=='M'){
        numberGuesses=6;
        range=100;
    }
    else if(difficultie.toUpperCase()=='H')
    {
        numberGuesses=10;
        range=1000;
    }
    else{
        //if wrong input restart the game
        alert("INPUT ERROR");
        game();
    }
    //generate number to guess
    var luckyNumber = Math.floor(Math.random()*range);

    //the guessing game
    while(numberGuesses!=0){
        var guess = prompt("You have "+ numberGuesses +" guesses left");
        if(guess == luckyNumber){
            alert("You got the right number goodjob!!!!!");
            break;
        }
        else{
            numberGuesses--;
            if(numberGuesses == 0){
                alert("you lost :( \nThe number was " + luckyNumber);
            }
        }
    }
    //replay game
    replay();
}

game();