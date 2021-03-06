
    /**
     * Created by Housam on 2017-02-13.
     */
    /* Set the width of the side navigation to 250px */
    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
    }

    /* Set the width of the side navigation to 0 */
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        window.location.href="#/";
    }
//Insert all logos in person-tables on about page
 function insertLogos(){
        var socialMediaLogos = [
            {href: 'GitHub-Mark.png',
                web: '"https://github.com/"'
        },{
            href: 'Dropbox-Logo.jpg',
                web: '"https://dropbox.com/"'
        },{
            href: 'YouTube_Play.png',
            web: '"http://youtube.com"'
            },{
            href: 'facebook-icon.png',
                web: '"https://facebook.com/"'
        },{
            href: 'linkedin-icon.png',
                web: '"https://linkedin.com/"'
        },{
            href: 'insta.jpeg',
                web: '"http://instagram.com"'
            },{
            href: 'twitter-logo-final.png',
                web: '"https://twitter.com/"'
            }];
        var catalog = 'img/social-media-logos/';

        for(var i=0; i < socialMediaLogos.length; i++){
            $('.socialMedia').append('<td><a target="_blank" href =' +socialMediaLogos[i].web +
                '><img src=' + catalog + socialMediaLogos[i].href+'></img></a></td>');
        }
 }
    $(document).ready(function () {

        $('#left-bar').hide();
        $('#bottom').hide();

        $('.game-row button').click(function() {
            $('#right-bar').slideUp('slow');
            $('#left-bar').delay('slow').slideDown('slow');
            $('#bottom').slideDown('slow').width(1000);
        });

        $('#mainBtn').click(function() {
            $('#left-bar').slideUp('slow');
            $('#right-bar').delay('slow').animate({
                width: '100%'
            }, 0)
            $('#right-bar').slideDown('slow', function ()
            {
                $('#bottom').delay().hide();
            });
        });

    });

