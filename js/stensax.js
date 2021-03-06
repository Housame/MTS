/**
 * Created by Housam on 2017-02-15.
 */
var player = 0;
var CPU = 0;
var winnerIMG="img/rsp/winner.jpg";
var loserIMG="img/rsp/loser.jpg";
var noneIMG="img/rsp/tryagain.jpg";
/* Start Game with the choice that user made*/
function StartGame(choice){
    document.getElementById("gameBoxx").innerHTML = "";
    Game(choice);
}
/*get a random choice, compare with users choice, fill the table with
* 1st:th with "You" & "CPU"
* 2nd:the maiden choices (pictures)
* 3rd:Winning or loosing results (pictures)
* Then it initiale player and CPU.
* */
function Game(choice){
    var userChoice = choice;
    var computerChoice = Math.random();
    if(computerChoice<0.34)
        computerChoice="Rock";
    else if (computerChoice<=0.67)
        computerChoice="Scissor";
    else computerChoice="Paper";
    FillTH();
    compare(userChoice,computerChoice);
    UchoiceIMGURL(userChoice);
    CPUchoiceIMGURL(computerChoice);
    ResultTableFill(player,CPU);
    player=0;
    CPU=0;

}
/* FIll the first row in the result table*/
function FillTH(){
    document.getElementById("you").innerHTML = "<h3>You</h3>";
    document.getElementById("aI").innerHTML = "<h3>CPU</h3>";
}
/* Fill the user choice in [second row, first column]*/
function UchoiceIMGURL (userChoice){
    var playerChoiceTD = document.getElementById("playerChoice");
    if (userChoice.toUpperCase()==="ROCK")
    {playerChoiceTD.innerHTML="<img src='img/rsp/rock.jpg'>"}
    else if (userChoice.toUpperCase()==="PAPER")
    { playerChoiceTD.innerHTML="<img src='img/rsp/paper.jpg'>"}
    else playerChoiceTD.innerHTML="<img src='img/rsp/scissor.jpg'>";

}
/* Fill the computer choice in [second row, second column]*/
function CPUchoiceIMGURL (computerChoice){
    var cpuChoiceTD = document.getElementById("cpuChoice");
    if (computerChoice.toUpperCase()==="ROCK")
    {cpuChoiceTD.innerHTML="<img src='img/rsp/rock.jpg'>"}
    else if (computerChoice.toUpperCase()==="PAPER")
    { cpuChoiceTD.innerHTML="<img src='img/rsp/paper.jpg'>"}
    else cpuChoiceTD.innerHTML="<img src='img/rsp/scissor.jpg'>";
}
/* Fill the results of user and computer */
function ResultTableFill(player,CPU){
    var playerTD = document.getElementById("playerResult");
    var cpuTD = document.getElementById("cpuResult");
    if(player > 0)
    {
        playerTD.innerHTML="<img src='"+winnerIMG+"')</img>";
        cpuTD.innerHTML="<img src='"+loserIMG+"')</img>";
    }
    else if (CPU > 0)
    {
        cpuTD.innerHTML="<img src='"+winnerIMG+"')</img>";
        playerTD.innerHTML="<img src='"+loserIMG+"')</img>";
    }
    else
    {
        playerTD.innerHTML="<img src='"+noneIMG+"')</img>";
        cpuTD.innerHTML="<img src='"+noneIMG+"')</img>";
    }
}
/* Compare the two choices and give a result in form of 0 and 1*/
function compare(choice1,choice2) {
    choice1=choice1.toUpperCase();
    choice2=choice2.toUpperCase();
    if(choice1==choice2)
    {player=0;
    CPU= 0;}
    else if (choice1=="PAPER")
    {
        if(choice2=="ROCK")
        {
            player++;
            }
        else
            {
                CPU++;
           }
    }
    else if (choice1=="ROCK")
    {
        if(choice2=="SCISSOR")
        {
            player++;
            }
        else
        {
            CPU++;
            }
    }
    else if (choice1=="SCISSOR")
    {
        if(choice2=="PAPER")
        {
            player++;
            }
        else
        {
            CPU++;
            }
    }
}
/*Reset the game*/
function Reset(){
    window.location.href="#/";
    window.location.href="#/sten";
}