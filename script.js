
$(function(){
    /*(if (typeof jQuery != "undefined") {
    	alert('jQuery is installed!');
       } else {
        alert('jQuery is not installed!');
    }*/

    //get width and height of splash screen before resizing
    var coverWidth = $("#container-1").outerWidth();
    var coverHeight = $("#container-1").outerHeight();


    //function for clicking up arrow on mobile to reveal details page
    var maxHeight = $("#splash-container").height();
    var headerHeight = $("#line-1-mobile").height();

    $("#line-1-mobile").click(function() {
        //function to toggle height of "#splash-container" in mobile view
        if($("#splash-container").height() >= maxHeight ) {
            $("#splash-container")
                .animate({height: headerHeight})
                .css({background: "#000", transition: "background 0.4s"});
            $("#text-container").fadeOut().hide();
            $(".arrow-upward").css({
                transform: "rotate(180deg)",
                transition: "transform 0.7s"
            });
        }else{
            $("#splash-container").animate({ height: "100%" });
            $("#text-container").fadeIn().show();
            $("#splash-container").css({background: ""});
            $(".arrow-upward").css({transform: "rotate(0deg)"});
        }
    });


    //mouse over function for first arrow icon
    $("#line-1").click(function() {
        console.log("function working");
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

 
                                                                                             