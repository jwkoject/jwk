$("#button").click(function() {
    if($("#user").val() == ""||$("#password").val() == "") {
        $(".password-remind").slideDown();
    }
})