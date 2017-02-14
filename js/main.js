
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
    }

 function insertLogos(){
        var socialMediaLogos = [
            {href: 'GitHub-Mark.png'
        },{
            href: 'Dropbox-Logo.jpg'
        },{
            href: 'facebook-icon.png'
        },{
            href: 'linkedin-icon.png'
        },{
            href: 'twitter-logo-final.png'
            }];
        var catalog = 'img/social-media-logos/';
        for(var i=0; i < socialMediaLogos.length; i++){
            $('.socialMedia').append('<li><img src=' + catalog + socialMediaLogos[i].href+'></img></li>');
        }
 }
