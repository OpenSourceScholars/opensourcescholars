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

    jQuery(function($){
        // unordered list
        $('button.item').click(function(){
            $('ul').shuffle();
        });

        // a series of paragraphs
        $('button.div').click(function(){
            $('#container').shuffle();
        });

        // an array
        var arr = [1,2,3,4,5,6];
        $('#array').text(arr.join(', '));
        $('button.array').click(function(){
            arr = $.shuffle(arr);
            $('#array').text(arr.join(', '));
        });
    });


    (function($){
        $.fn.shuffle = function() {
            return this.each(function(){
                var items = $(this).children().clone(true);
                return (items.length) ? $(this).html($.shuffle(items)) : this;
            });
        }

        $.shuffle = function(arr) {
            for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
            return arr;
        }

    })(jQuery);


    ////////////////////////////////////////////////////////////////////////////
    // Congrats! You found the easter egg! Press the 'r' key to randomize.
    ////////////////////////////////////////////////////////////////////////////
    $('#boardmembers').shuffle();
    $(document).keyup(function(event) {
        if ( event.which == 82 ) {
            $('#boardmembers').shuffle();
        }
    });
});
