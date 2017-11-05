// 信用卡有效期年份
for (var i = 2017; i <= 2050; i++) {
   
   var html = '<option value='+i+'>'+i+'</option>'
   $("#year").append(html)

};

$(".creditCard label, #creditCard").click(function(){
    var height = $(".info").height()
    if(height ==0) {
        $(".info").animate({
            "height" : "12.74rem"
        },1000);
    }else {
        $(".info").animate({
            "height" : "0"
        },1000);
    }
})
$(".pay label, .pay input").click(function(){
    $(".info").animate({
       "height" : "0"
    },1000);
})