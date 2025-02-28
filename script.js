let userScore =0;
let compScore = 0;

const choices = document.querySelectorAll(".choice")
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#computer-score")

const msg  = document.querySelector("#message");

const genCompChoice = ()=>{
    const option = ["rock" , "paper" , "scissor"];
    const rndindex = Math.floor(Math.random()*3);
    return option[rndindex];
}
const drowGame = () =>{
    console.log("game is drow")
    msg.innerHTML = "Game was drow ! Play again";
    msg.style.backgroundColor = "blue"
}

const showWinner =  (userwin , userchoice ,compChoice) =>{
    if ( userwin)
    {   userScore ++;
        userScorePara.innerHTML= userScore;
        console.log("you win !");
        msg.innerHTML = `You win ! your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green"
        
    
    }
    else {
        compScore ++;
        compScorePara.innerText = compScore;
        console.log("you loose" );
        msg.innerHTML = `You Lose ! ${compChoice} beats your ${userchoice}`;
         msg.style.backgroundColor = "red";
    
    }

}

const playGame = (userchoice) =>{
    console.log("user choice = " , userchoice);
    //generate computer choice 
    const compChoice = genCompChoice();
    console.log("compt choice = " , compChoice);

    if (userchoice === compChoice)
    {
        drowGame();
    }
    else  {
        let userwin = true;
        if( userchoice === "rock")
        {
            // paper ,scissor
            userwin = compChoice === "paper" ? false : true ;
        }
        else if (userchoice === "paper")
        {  // rock , scissor 
            userwin = compChoice === "scissor" ? false : true ;
            
        }
        else {
            // rock , paper
            userwin = compChoice === "rock" ? false : true;
        }
        showWinner(userwin , userchoice , compChoice);
    }
};
choices.forEach((choice) =>{
    choice.addEventListener("click" , ()=>{
        const userchoice = choice.getAttribute("id");
        playGame(userchoice );
    
    })
});