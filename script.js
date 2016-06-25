
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
    $("#line-1-mobile").click(function() {
        console.log("mobile function working");
     $("#text-container").fadeOut().hide();
     toggleHeight("#splash-container");
        $("#splash-container").css({background: "#000"});
        $(".arrow-upward").animate({transform: "rotate(180deg)", "padding-top": "0px"});
    });

    //function to toggle height of "#splash-container" in mobile view

    var maxHeight = $("#splash-container").height();
    
    var toggleHeight = function(value) {

        if($(value).height() >= maxHeight ) {
            console.log("reducing height!");
            $(value).animate({ height: "20%" });
            console.log(maxHeight);
        }else{
            console.log("increasing height!");
            $(value).animate({ height: "100%" });
        }
    };


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

 
                                                                                             