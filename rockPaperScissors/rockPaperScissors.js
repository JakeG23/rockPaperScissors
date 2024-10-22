var highScore = 0;
var currentStreak = 0;

function optionChosen(choice){
    let comChoice = Math.floor(Math.random() * 3) + 1;
    var results = document.getElementById("resultsBox")
    var streakDis = document.getElementById("streakBox")
    var highScoreDis = document.getElementById("highScoreBox")
    if(choice =="rock")
    {
        if(comChoice == 1){
            results.innerText = "Computer chose rock. Tie! Select a button again to continue.";
        }

        if(comChoice == 2){
            results.innerText = "Computer chose paper. You lost! Select a button again to continue.";
            currentStreak = 0;
        }

        if(comChoice == 3){
            results.innerText = "Computer chose scissors. You won! Select a button again to continue.";
            currentStreak++;
            if(currentStreak > highScore){
                highScore = currentStreak;
                highScoreDis.innerText = ("highest streak: " + highScore);
            }
        }
    }

    if(choice =="paper")
        {
            if(comChoice == 1){
                results.innerText = "Computer chose rock. You won! Select a button again to continue.";
                currentStreak++;
                if(currentStreak > highScore){
                    highScore = currentStreak;
                    highScoreDis.innerText = ("highest streak: " + highScore);
                }
            }
    
            if(comChoice == 2){
                results.innerText = "Computer chose paper. Tie! Select a button again to continue.";
            }
    
            if(comChoice == 3){
                results.innerText = "Computer chose scissors. You lost! Select a button again to continue.";
                currentStreak = 0;
            }
        }

    if(choice =="scissors")
    {
        if(comChoice == 1){
            results.innerText = "Computer chose rock. You lost! Select a button again to continue.";
            currentStreak = 0;
        }

        if(comChoice == 2){
            results.innerText = "Computer chose paper. You won! Select a button again to continue.";
            currentStreak++;
            if(currentStreak > highScore){
                highScore = currentStreak;
                highScoreDis.innerText = ("highest streak: " + highScore);
            }
        }

        if(comChoice == 3){
            results.innerText = "Computer chose scissors. Tie! Select a button again to continue.";
        }
    }

    streakDis.innerText = ("current streak: " + currentStreak);

}