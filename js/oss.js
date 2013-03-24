$(document).ready(function(){
    // Don't cache stuff. Otherwise we might miss updates to the header/footer files
    $.ajaxSetup ({
        // Disable caching of AJAX responses
        cache: false
    });

    // Header and footers
    $('.navbar').load('header.html');
    $('.footer').load('footer.html');

    // Enable tooltips for the 'where' section
    $("[rel=tooltip]").tooltip({});

    // Make a fancy pop-over with driving/room directions
    $("[rel=tooltip]").popover({
        'html': true,
        'content': "<a href='http://oit.wvu.edu/ctec/files/2009/01/floorplan-esbg102.jpg' target='_blank'>Location</a><br /><a href='http://www.statler.wvu.edu/direction.php' target='_blank'>Driving Directions</a>",
    });
});
