let totalAttempt =10;
totalScore = 0;
computerScore = 0;
let num = Math.floor(Math.random() * 100 + 1);
console.log(num)
let btn = document.querySelector('#btn1');
let reset = document.querySelector('#reset');
let Guess = document.querySelector('#Guess');


    btn.addEventListener('click', function() {
        let input = document.querySelector('#userInput').value;
        document.querySelector('#totalScore').innerHTML = totalScore;
        document.querySelector('#totalAttempt').innerHTML = totalAttempt;
        document.querySelector('#computerScore').innerHTML = computerScore;


        if (input == num) {
            Guess.innerHTML = 'You guessed it correct. The correct number was ' + num + '.';
          
            totalScore=10
        }
        else if (input > num) {
            Guess.innerHTML =' You guessed it high, guess low';
            totalAttempt--
            computerScore++;
        }
        else if (input < num) {
            Guess.innerHTML = 'You guessed it low, guess higher';
            computerScore++;
            totalAttempt--
        }
        else if (input !=num) {
            Guess.innerHTML = 'Invalid range, enter between 1 & 100';
        }

        if (input <=0 || input >  100) {
            document.write("Out of range. Please enter between 1 & 100");
        }


        console.log("totalAttempt", totalAttempt);
        console.log("computerScore", computerScore);
        console.log("totalScore", totalScore);
     })

        reset.addEventListener('click', function(){
            alert('clicking this will reset the game')



        })    
        
      


    /*
    let input = document.querySelector('#userInut').value;
    //document.querySelector('#totalAttempt').innerHTML = totalAttempt;
    //document.querySelector('#totalScore').innerHTML = totalScore;
    //document.querySelector('#computerScore').innerHTML = computerScore;

        if(input==num) {

            Guess.innerHTML = 'You Guessed it correct';
            totalScore = 10;
            totalAttempt-=1;
        }


        else if (input < num)
        {
            Guess.innerHTML = "Your guess is low, guess higher"
            computerScore++;
            attempt -=1;
        } else if (input > num) {
            Guess.innerHTML = "Your guess is high, guess lower"
            computerScore++;
            attempt -=1; */
        





