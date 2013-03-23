$(document).ready(function(){
    $("[rel=tooltip]").tooltip({});

    $("[rel=tooltip]").popover({
	'html': true,
	'content': "<a href='http://oit.wvu.edu/ctec/files/2009/01/floorplan-esbg102.jpg' target='_blank'>Location</a><br /><a href='http://www.statler.wvu.edu/direction.php' target='_blank'>Driving Directions</a>",
    });
});
