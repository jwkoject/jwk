$("#button").click(function(){
    if($("#email").val() == "") {
        $(".number-remind").slideDown();
    }
    if($("#psd").val()!==$("#psdcon").val()|| $("#psd").val()=="" ||$("#psdcon").val()=="") {
        $(".password-remind").slideDown();
    }
    // window.location.href="register_information.html"
})