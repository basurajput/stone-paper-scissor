let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice")
 const msg = document.querySelector("#msg")
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector('#comp-score')

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    })
})

    // draw function 
    const drawGame = () => {
        // console.log("game was draw"); 
        msg.innerText = "Game draw! Play again."
        msg.style.backgroundColor ="black";
       
    }
    
    // genrating computer choices/

    const genCompchoice = () =>{
        const options =["rock","paper","scissor"]
        const randomIndx = Math.floor(Math.random()*3);
        return options[randomIndx];
    }

    const showWinner = (userWin, userChoice,compChoice) =>{
        if (userWin) {
            userScore++;
            userScorePara.innerText=userScore;
            // console.log("you win the game !!");
            msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
            msg.style.backgroundColor ="green";
            
            
        }else{
            compScore++;
            compScorePara.innerText=compScore;
            // console.log("you lose the game");
            msg.innerText = `You lose. Comp.${compChoice} beats Your ${userChoice}`;
            msg.style.backgroundColor ="red";
            
            
        }
    }

    // generating players choices/

 const playGame = (userChoice) => {
    // console.log("user choice",userChoice);
    const compChoice = genCompchoice();
    // console.log("comp choice",compChoice);
    // calling drawfunction
    if (userChoice === compChoice) {
        drawGame();
    }   else{
        let userWin = true;
        if (userChoice === "rock") {
            // scissor, paper
         userWin = compChoice === "paper"? false : true;
        }else if(userChoice === "paper"){
            // rock,scissor
            userWin = compChoice === "rock"? true:false;
        }else{
            // user= scissor
            // rock,paper
            userWin = compChoice === "paper"?true:false;
        }
        showWinner(userWin , userChoice,compChoice);
            
        

    }
}

