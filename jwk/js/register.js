$("#button").click(function(){
    if($("#email").val() == "") {
        $(".number-remind").slideDown();
    }
    if($("#psd").val()!==$("#psdcon").val()|| $("#psd").val()=="" ||$("#psdcon").val()=="") {
        $(".password-remind").slideDown();
    } else {
        $(".page-first").hide()
        $(".page-secend").show()
        $("h2").show()
    }
})
$(".back").click(function(){
    $(".page-first").show()
    $(".page-secend").hide()
    $("h2").hide()
})