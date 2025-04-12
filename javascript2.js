let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara  = document.querySelector("#comp-score");


const genCompChoice = ()=>{
    //generate computer choice
    const options =["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame = ()=>{
    msg.innerText = "The match is draw..";
    console.log("draw match try again..");
    msg.style.backgroundColor="black";
};

const showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win...");
        msg.innerText = `you win..your ${userChoice} beats ${compChoice}` ;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you loss...");
        msg.innerText = `you loss ..${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};

const playGame = (userChoice)=>{
    console.log("user choice=", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice=", compChoice);
    if(userChoice === compChoice){
        //draw game
        drawGame();

    }else{
        let userWin = true;
        if(userChoice ==="rock"){
            //scissor,paper
            userWin = compChoice ==="paper" ? false : true;      //terminary operation
        }else if(userChoice === "paper"){
            //rock,scissors
            userWin = compChoice === "scissors" ? false : true;
        }else{
            //rock,paper       (scissor)
            userWin = compChoice === "rock" ? false : true;

        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    });
});