/**
 * Created by Housam on 2017-02-15.
 */
function StartGame(choice){
    document.getElementById("gameBoxx").innerHTML = "";
    Game(choice);
}
function Game(choice){
    var userChoice = choice;
    var computerChoice = Math.random();
    if(computerChoice<0.34)
        computerChoice="Rock";
    else if (computerChoice<=0.67)
        computerChoice="Scissor";
    else computerChoice="Paper";

    var firstString = "You Choice: "+userChoice;
    var secondString="CPU Choice: "+computerChoice;
    var result = compare(userChoice,computerChoice);

    var x = document.createElement("p");
    gameBoxx.appendChild(x);

    x.innerHTML = firstString+"<br>"+secondString+"<br>"+result+"<br> <div> <button onclick='Reset()'>Reset Game</button>";

}
function compare(choice1,choice2) {
    choice1=choice1.toUpperCase();
    choice2=choice2.toUpperCase();
    if(choice1==choice2)
        return "withdraw!";
    else if (choice1=="PAPER")
    {
        if(choice2=="ROCK")
            return "You WIN!";
        else return"You LOSE, CPU WIN!"
    }
    else if (choice1=="ROCK")
    {
        if(choice2=="SCISSOR")
            return "You WIN!";
        else return"You LOSE, CPU WIN!"
    }
    else if (choice1=="SCISSOR")
    {
        if(choice2=="PAPER")
            return "Du vinner!";
        else return"Du förlorar, CPU vinner!"
    }
}

function Reset(){
    window.location.href="#/";
    window.location.href="#/sten";
}