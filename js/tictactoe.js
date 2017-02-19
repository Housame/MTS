var tileIsOccupied;
var cpuChoice;
var gameTurn;
var specificTile;
var loopContingency;
var turnMsg = document.getElementById('turnMsg');
var resultMsg = document.getElementById('resultMsg');
var winner = false;

$(document).ready(function () {

    createGrid();

    $('#grid button').click(function () {
        $(this).fadeOut('fast', function () {
            $(this).css("background-image", "url(img/tictactoe/usa.jpg)").fadeIn();
        });
        $(this).addClass('occupiedTile');
        $(this).addClass('playerTile');
        $(this).prop('disabled', true);

        ++gameTurn;
        turnCounter();
        tileIsOccupied = true;
        loopContingency = 0;

        checkForWinner();

        if (winner == true)
        {
            $('#grid button').prop('disabled', true);
            return;
        }

        do
        {

            cpuChoice = Math.floor(Math.random() * 8) + 1;
            specificTile = "#tile" + cpuChoice.toString();

            if (!($(specificTile).hasClass('occupiedTile')))
            {
                $(specificTile).fadeOut('fast', function() {
                    $(specificTile).css("background-image", "url(img/tictactoe/china.jpg)").fadeIn();
                });
                $(specificTile).addClass('occupiedTile');
                $(specificTile).addClass('cpuTile');
                $(specificTile).prop('disabled', true);

                tileIsOccupied = false;
                ++gameTurn;
                turnCounter();
            }
            else
            {
                loopContingency++;
                if (loopContingency > 100)
                    break;
            }

        } while (tileIsOccupied);

        checkForWinner();
        if (winner == true)
        {
            $('#grid button').prop('disabled', true);
            return;
        }
        return false;

    });

    function checkForWinner()
    {
        for (var i = 1; i < 4; i++)
        {
            if ($('#tile' + i.toString()).hasClass('playerTile') && $('#tile' + (i+3).toString()).hasClass('playerTile') && $('#tile' + (i+6).toString()).hasClass('playerTile'))
                declareWinner('You won!');

            if ($('#tile' + i.toString()).hasClass('cpuTile') && $('#tile' + (i+3).toString()).hasClass('cpuTile') && $('#tile' + (i+6).toString()).hasClass('cpuTile'))
                declareWinner('CPU won!');
        }

        for (var i = 1; i < 10; i+=3)
        {
            if ($('#tile' + i.toString()).hasClass('playerTile') && $('#tile' + (i+1).toString()).hasClass('playerTile') && $('#tile' + (i+2).toString()).hasClass('playerTile'))
                declareWinner('You won!');

            if ($('#tile' + i.toString()).hasClass('cpuTile') && $('#tile' + (i+1).toString()).hasClass('cpuTile') && $('#tile' + (i+2).toString()).hasClass('cpuTile'))
                declareWinner('CPU won!');
        }

        if ($('#tile1').hasClass('playerTile') && $('#tile5').hasClass('playerTile') && $('#tile9').hasClass('playerTile'))
            declareWinner('You won!');
        else if ($('#tile1').hasClass('cpuTile') && $('#tile5').hasClass('cpuTile') && $('#tile9').hasClass('cpuTile'))
            declareWinner('CPU won!');
        
        if ($('#tile3').hasClass('playerTile') && $('#tile5').hasClass('playerTile') && $('#tile7').hasClass('playerTile'))
            declareWinner('You won!');
        else if ($('#tile3').hasClass('cpuTile') && $('#tile5').hasClass('cpuTile') && $('#tile7').hasClass('cpuTile'))
            declareWinner('CPU won!');

        if (gameTurn > 9)
            declareWinner('Game was a draw.');
    }

    $('.newGameBtn').click(function() {
        $('#grid button').each(function() {
            $(this).removeClass('playerTile').removeClass('cpuTile').removeClass('occupiedTile').css('background-image', 'none').prop('disabled', false);
            gameTurn = 1;
            turnCounter();
            var message = document.getElementById('resultMsg');
            message.innerHTML = "";
            winner = false;
            $(this).css('background-image', "url(img/tictactoe/earth.png)");
        });
    });

});

function createGrid() {

    var table = document.createElement('table');
    var innerDiv = document.getElementById('grid');
    innerDiv.innerHTML = "";

    var row;
    var cell;
    var gridSize = 3;
    var index = 1;

    gameTurn = 1;
    turnCounter();

    for (var i = 0; i < gridSize; i++) {

        row = table.insertRow(-1);

        for (var j = 0; j < gridSize; j++) {
            var button = document.createElement('button');
            button.className = "tile";
            button.id = "tile" + index++;

            cell = row.insertCell(-1);
            cell.appendChild(button);
        }
    }

    innerDiv.appendChild(table);
}

function turnCounter()
{
    turnMsg.innerHTML = "Turn: " + gameTurn.toString();
}

function declareWinner(result)
{
    winner = true;
    turnMsg.innerHTML = "";
    resultMsg.innerHTML = result.toString();
}