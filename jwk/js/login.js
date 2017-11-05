$("#button").click(function() {
    if($("#user").val() == ""||$("#password").val() == "") {
        $(".box").animate({
           "height" : "3.5rem"
       },1000);
    }
})