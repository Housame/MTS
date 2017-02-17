$(document).ready(function () {

    $('#left-bar').hide();
    
    $('.game-row button').click(function() {
        $('#right-bar').slideUp('slow');
        $('#left-bar').delay('slow').slideDown('slow');
        $('#bottom').delay('slow').width(1000);
    });

    $('#mainBtn').click(function() {
        $('#left-bar').slideUp('slow');
        $('#right-bar').delay('slow').animate({
            width: '100%'
        }, 0)
        $('#right-bar').slideDown('slow');
    });

});