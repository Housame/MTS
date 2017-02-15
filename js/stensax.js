/**
 * Created by Housam on 2017-02-15.
 */
function StartGame() {
    document.getElementById("gameBoxx").innerHTML = "";
    Game();
}
function Game(){
    var userChoice = window.prompt("Ditt val: Sten, Sax eller Påse!");
    var computerChoice = Math.random();
    if(computerChoice<0.34)
        computerChoice="Sten";
    else if (computerChoice<=0.67)
        computerChoice="Sax";
    else computerChoice="Påse";

    var firstString = "Ditt val: "+userChoice;
    var secondString="CPU val: "+computerChoice;
    var result = compare(userChoice,computerChoice);

    var x = document.createElement("p");
    gameBoxx.appendChild(x);
    x.innerHTML = firstString+"<br>"+secondString+"<br>"+result;

}
function compare(choice1,choice2) {
    choice1=choice1.toUpperCase();
    choice2=choice2.toUpperCase();
    if(choice1==choice2)
        return "withdraw!";
    else if (choice1=="PÅSE")
    {
        if(choice2=="STEN")
            return "Du vinner!";
        else return"Du förlorar, CPU vinner!"
    }
    else if (choice1=="STEN")
    {
        if(choice2=="SAX")
            return "Du vinner!";
        else return"Du förlorar, CPU vinner!"
    }
    else if (choice1=="SAX")
    {
        if(choice2=="STEN")
            return "Du vinner!";
        else return"Du förlorar, CPU vinner!"
    }
}