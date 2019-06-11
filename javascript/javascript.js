
$("#grow").on("click", function(){
    $("#box").css({height:"+=50px", width:"+=50px"}, "fast");
})

$("#blue").on("click", function(){
    $("#box").css("background-color", "blue")
})

$("#fade").on("click", function(){
    $("#box").css("opacity", "0.5");
})

$("#reset").on("click", function(){
    $("#box").animate({height:"150px", width:"150px"}, "fast");
    $("#box").css("background-color", "orange")
    $("#box").css("opacity", "1");

})