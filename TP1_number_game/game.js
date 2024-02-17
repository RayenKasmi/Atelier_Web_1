
function game(){
    alert("Welcome to the guessing game!!!!!");

    //chosing difficultie
    let difficultie=prompt("chose you difficultie:\nE . Easy\nM . Medium\nH . Hard");

    let numberGuesses,range;
    switch (difficultie.toUpperCase()){
        case 'E':{
            numberGuesses=4;
            range=10;
            break;
        }
        case 'M':{
            numberGuesses=6;
            range=100;
            break;
        }
        case 'H':{
            numberGuesses=10;
            range=1000;
            break;
        }
        default:{
            //if wrong input restart the game
            alert("INPUT ERROR");
            game();
        }  
    }

    alert("Guess a number between 0 and " + range + " Good luck :)")

    //generate number to guess
    let luckyNumber = Math.floor(Math.random()*range);

    //the guessing game
    while(numberGuesses!=0){
        let guess = prompt("You have "+ numberGuesses +" guesses left");

        if(guess == luckyNumber){
            alert("You got the right number goodjob!!!!!");
            break;
        }
        else if(guess > luckyNumber){
            alert("The number is lower");
        }
        else {
            alert("The number is higher");
        }

        //decrement guesses
        numberGuesses--;
        if(numberGuesses == 0){
            alert("you lost :( \nThe number was " + luckyNumber);
        }
        
    }
    //replay game
    replay();
}

function replay(){
    let choice = prompt("Do you want to play again? (Y/N)");
    if(choice.toUpperCase() == 'Y'){
        game();
    }
}

game();