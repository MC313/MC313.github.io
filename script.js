 




 $(document).ready(function(){

    /*(if (typeof jQuery != "undefined") {

    	alert('jQuery is installed!');

       } else {
        
        alert('jQuery is not installed!');

    }*/

    //get width and height of splash screen before resizing
    var coverWidth = $("#container-1").outerWidth();
    var coverHeight = $("#container-1").outerHeight();

    //get width and height of splash screen before resizing
    // var splashWidth = $("#splash-container").outerWidth();
    // var splashHeight = $("#splash-container").outerHeight();

    //clicking X icon slides cover page up to reveal details page
    $("#hideCoverPage").click(function(){
        console.log("running function .....");
        $("#splash-container").animate({ height: "0px"})
    });

    //mouse over function for first arrow icon
    $("#line-1").click(function() {
        $("#text-container").hide();
        $(this).fadeOut(400)
        $("#splash-container").animate( { width: coverWidth, height: coverHeight } )
        $("#splash-container").fadeOut(800)
        $("#line-2").fadeIn(4500)   
    });

    $("#line-2").click(function() {
        $("#text-container").hide();
        $("#text-container").fadeIn(4500)
        $("#splash-container").fadeIn()
        $("#splash-container").animate( { width: '100%', height: '100%' } )
        $("#line-1").fadeIn(2500)
    });

 }); 

 
                                                                                             