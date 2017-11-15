        var params = {};
        // 设置获取选项栏宽度
        var win = $(window).width(),
        lengW2 = $(".select-under-back").children().eq(0).find(".select-sfs").children().width();
        if(win >= 320) {
            els = 5;
        } 
        if (win >= 375) {
            els = 12;
        }
        if (win >= 414) {
            els = 18;
        }

        // 选择分类
        $(".pic-con-sf").click(function() {
            var lengW = $(".picture-left-sf").children().eq(0).find(".select-sf").children().width();
            $(this).addClass('pic-con-show').parent().parent().siblings().find(".pic-con-sf").removeClass('pic-con-show');
            $(".custom-under-list li img").removeClass('custom-under-img');
            var leng = $(this).parent().siblings(".select-outer-sf").find(".select-sf").children().length;
            var wid = null;
            if(leng >= 4) { 
                $(this).parent().siblings(".select-outer-sf").css({
                    "width": "17.5rem"
                })
            } else {
                $(this).parent().siblings(".select-outer-sf").css({
                    "width": leng * (lengW+12) + lengW - 12
                })
            }
            $(this).parent().siblings(".select-outer-sf").find(".select-sf").css({
                "width": leng * (lengW+12) + lengW - 12
            })
            var lef = $(this).parent().next().css("left").split("px")[0];
            console.log(lef);
            if(lef > 0) {
                wid =  $(this).parent().siblings(".select-outer-sf").width();  
                console.log(wid);          
                $(this).parent().next().animate({
                    "left": -wid + lengW - 6
                },500).parent().siblings().find(".select-outer-sf").animate({
                    "left": "10rem"
                },500);
            } else {
                $(this).removeClass('pic-con-show')
                $(this).parent().next().animate({
                    "left": "10rem"
                },500)
            }
            var ind = $(this).parent().parent().index();
            $(".select-outing-sf").css({
                    "left": "-22rem"
            });
        })
        $(".select-sf li").click(function() {
            $(this).addClass('pic-con-show').siblings().removeClass('pic-con-show');
            var index = $(this).parent().parent().parent().index();
            animateLeft();
        })
        $(".select-sf-one li").click(function() {
            var tex = $(this).text();
            $(this).parent().parent().siblings().find(".pic-con-sf").html(tex);
        })
        //颜色切换
        $(".select-sf-two li").click(function() {
            var src = $(this).children().attr("src");
            $(this).parent().parent().siblings().find(".pic-con-sf").find("img").attr("src", src);
            var tag = $(this).attr("tag");
            var de = $(this).attr("de");

            $.ajax({
                cache: true,
                type: "POST",
                url:"/jwk/public/index.php/mobile/index/changeColor",
                data:{'tag': tag},
                async: false,
                error: function(request) {
                    alter("system error!");
                },
                success: function(data) {
                    var img = eval("("+data+")");
                    $("#img-color").attr("src", img.img_front);
                    $("#img-color-back").attr("src", img.img_back);
                    $("#img-crafts").attr("src","");
                    var result = "";
                    $(img.crafts).each(function(i,n){
                        result += "<li tag=\""+ n.cid+"\"><img src=\""+n.cover_title+"\" class=\"newdow\" alt=\"\" /></li>";
                        $("#crafts-title").attr("src",n.cover_title);
                    });

                    $(".select-sf-four").html(result);
                    $(".newdow").click(function() {
                        var index = $(this).parent().parent().parent().index();
                        animateLeft();
                    })
                    if(de == 1){
                        $("#img-crafts").attr("src",'');
                        $("#crafts-title").attr("src","/jwk/public/static/mobile/images/cancel.png");
                    }
                    //初始化配件可选
                    $(".li-11").attr("dat","yes");
                    $(".li-12").attr("dat","yes");
                    $(".li-13").attr("dat","yes");
                    $(".li-14").attr("dat","yes");
                    //破洞切换
                    $(".select-sf-four li").click(function(){
                        $(this).addClass('pic-con-show').siblings().removeClass('pic-con-show');
                        var tag = $(this).attr("tag");
                        $.ajax({
                            type : "POST",
                            url : "/jwk/public/index.php/mobile/index/changeCrafts",
                            data : {'tag' : tag},
                            async : false,
                            error : function(request){
                                alert("system error!");
                            },
                            success:function(data){
                                var img = eval("("+data+")");
                                if($.inArray("1",img.region) >= 0){
                                    $(".picture-left-t img").attr("src","");
                                    $(".li-11").attr("dat","not");
                                }else{
                                    $(".li-11").attr("dat","yes");
                                }
                                if($.inArray("2",img.region) >= 0){
                                    $(".picture-right-t img").attr("src","");
                                    $(".li-13").attr("dat","not");
                                }else{
                                    $(".li-13").attr("dat","yes");
                                }
                                if($.inArray("3",img.region) >= 0){
                                    $(".picture-left-b img").attr("src","");
                                    $(".li-12").attr("dat","not");
                                }else{
                                    $(".li-12").attr("dat","yes");
                                }
                                if($.inArray("4",img.region) >= 0){
                                    $(".picture-right-b img").attr("src","");
                                    $(".li-14").attr("dat","not");
                                }else{
                                    $(".li-14").attr("dat","yes");
                                }
                                $("#img-crafts").attr("src", img.img_crafts);
                                $("#crafts-title").attr("src",img.img_title);
                            }
                        })
                    });
                }
            });
        })
        //纽扣切换
        $(".select-sf-five li").click(function(){
            var tag = $(this).attr("tag");
            $.ajax({
               type : "POST",
                url : "/jwk/public/index.php/mobile/index/changeButton",
                data : {'tag' : tag},
                async : false,
                error : function(request){
                    alert("system error!");
                },
                success:function(data){
                    var img = eval("("+data+")");//console.log(img);
                    $("#img-button").attr("src", img.img_button);
                    $("#button-title").attr("src",img.img_title);
                }
            })
        });
        //缝线切换
        $(".select-sf-six li").click(function(){
            var tag = $(this).attr("tag");
            $.ajax({
                type : "POST",
                url : "/jwk/public/index.php/mobile/index/changeThread",
                data : {'tag' : tag},
                async : false,
                error : function(request){
                    alert("system error!");
                },
                success:function(data){
                    var img = eval("("+data+")");
                    $("#img-thread").attr("src", img.img_thread);
                    $("#thread-title").attr("src",img.img_title);
                    $("#img-thread-back").attr("src",img.img_back);
                }
            })
        });

        // 旋转
        var roate = false;
        $(".custom-roate").click(function() {
            $(".select-outer-sf").css({
                "left": "10rem"
            });
            if(roate == false) {
                $(".swiper-containers").addClass('rote-sf-show').removeClass('rote-sf-show2');
                    roate = true;
                $(".custom-under-back2").addClass('custom-under-show').siblings().removeClass('custom-under-show');
                $(".picture-img-positive .picture-pos-show").fadeOut(500);
                $(".picture-img-back .picture-pos-show").fadeIn(500);
                $(".select-under-sf .select-outing-sf").css({
                    "left": "-22rem"
                });
                $(this).css({
                    "background-position" : "0 0"
                })
            } else {
                $(".swiper-containers").addClass('rote-sf-show2').removeClass('rote-sf-show');
                    roate = false;
                $(".custom-under-back1").addClass('custom-under-show').siblings().removeClass('custom-under-show');
                $(".picture-img-back .picture-pos-show").fadeOut(1000);
                $(".picture-img-positive .picture-pos-show").fadeIn(1000);
                $(".select-under-back .select-outing-sf").css({
                    "left": "-22rem"
                });
                $(this).css({
                    "background-position" : "0 -2.86rem"
                })
            }
        })
        
        // 选择定制图案
        $(".custom-under-list li").click(function() {
            var dat = $(this).parent().attr("data");
            var allow = $(this).attr("dat");
            console.log(dat)
            var index = $(this).index();
            $(".select-out-sf").attr("data", dat);
            $(".select-out-sf").attr("index", index);
            $(".select-outer-sf").animate({
                "left": "10rem"
            },500);
            if(dat==1 && allow=="yes") {
                var lefs = $(".select-under-sf").children().eq(index).css("left").split("px")[0];
                var lengt = $(".select-under-sf").children().eq(index).find(".select-sfs").children().length;
                $(".select-under-sf").children().eq(index).find(".select-sfs").css({
                    "width": lengt * (lengW2+els)
                })
                if(lefs >= 0) {
                    $(".select-under-sf").children().eq(index).animate({
                        "left": "-22rem"
                    },500)
                    $(this).removeClass('custom-under-img');
                } else {                 
                    setTimeout(function() {
                        $(".select-under-sf").children().eq(index).siblings(".select-outing-sf").animate({
                            "left": "-22rem"
                        },200);
                    },800)
                    $(".select-under-sf").children().eq(index).siblings(".select-outing-sf").animate({
                        "left": "-22rem"
                    },200,function() {
                        $(".select-under-sf").children().eq(index).stop(true).animate({
                            "left": "0rem"
                        },500)
                    })
                }
            }
            if(dat==2) {
                var lefts = $(".select-under-back").children().eq(index).css("left").split("px")[0];
                var lengts = $(".select-under-back").children().eq(index).find(".select-sfs").children().length;
                $(".select-under-back").children().eq(index).find(".select-sfs").css({
                    "width": lengts * (lengW2+els)
                })
                if(lefts >= 0) {
                    $(".select-under-back").children().eq(index).animate({
                        "left": "-22rem"
                    },500)
                    $(this).removeClass('custom-under-img');
                } else {                   
                    setTimeout(function() {
                        $(".select-under-back").children().eq(index).siblings(".select-outing-sf").animate({
                            "left": "-22rem"
                        },200);
                    },800)
                    $(".select-under-back").children().eq(index).siblings(".select-outing-sf").animate({
                        "left": "-22rem"
                    },200,function() {
                        $(".select-under-back").children().eq(index).stop(true).animate({
                            "left": "0rem"
                        },500)
                    })
                }
                
            }
        })
        function animateLeft() {
            $(".select-outer-sf").animate({
                "left": "10rem"
            },500)
            $(".select-outing-sf").animate({
                "left": "-22rem"
            },500)
        }
        $(".swiper-containers,.white,.cover").click(function() {
            animateLeft();
        })
        $(".select-sfs li").click(function() {
            $(this).addClass('pic-con-show').siblings().removeClass('pic-con-show');
            var data = $(".select-out-sf").attr("data");
            var src = $(this).children("img").attr("tag");
            var index = $(".select-out-sf").attr("index");
            if(data == 1) {
                $(".picture-img-positive").children(".picture-pos").eq(index).addClass("picture-pos-show").css("display","block").find("img").attr("src",src);
            }
            if(data == 2) {
                $(".picture-img-back").children(".picture-pos").eq(index).addClass("picture-pos-show").css("display","block").find("img").attr("src",src);
            }
        })
        // 取消选项
        $(".cancel-select").click(function() {
            var ins = $(this).parent().parent().attr("index");
            var num = $(this).parent().parent().attr("data");
            if(num == 1) {
                $(".picture-img-positive div").eq(ins).css("display","none").removeClass("picture-pos-show").find("img").attr("src","");
                $(this).parent().parent().parent().animate({
                    "left": "-22rem"
                },800)
            }
            if(num == 2) {
                $(".picture-img-back div").eq(ins).css("display","none").removeClass("picture-pos-show").find("img").attr("src","");
                $(this).parent().parent().parent().animate({
                    "left": "-22rem"
                },800)
            }
        })
        // 保存选项
        $(".custom-save").click(function() {
            animateLeft();
            $(".cust-save-tit").css({
                "top": "65%"
            })
            console.log(6666)
            $(".custom-save-over").css("display","block");
            $(".cust-save-tit").css("display","block").animate({
                "top": "40%"
            },2000).fadeOut(5000);
            setTimeout(function() {
                $(".custom-save-over").css("display","none");
            },7000)
            $.ajax({
                url: '',
                dataType: 'json',
                data: params,
                success: function(data) {
                    console.log(data);
                },
                error: function(e) {
                    console.log("请求错误")
                }
            })
        })
        // 分享
        var heig = $(".custom-share-bottom").height() + 50;
        var wind = $(window).height() - $(".custom-share-bottom").height();
        $(".custom-share-bottom").css({
            "bottom": -heig
        })
        // 禁止和解除默认事件：
        var handler = function(e) { //禁止浏览器默认行为
            e.preventDefault();
        };
        $(".cust-share").click(function() {
            //添加阻止事件
            document.addEventListener("touchmove", handler, false); // 添加阻止事件
            var href = window.location.href;
            $(".custom-herf-addr").val(href);
            $(".custom-share-outer").fadeIn(500);
            $(".custom-share-bottom").animate({
                "bottom": "0"
            },500);
            animateLeft();
        })
        $(".close-share, .custom-share-outer").click(function() {
            //移除阻止事件
            document.removeEventListener("touchmove", handler, false); // 移除阻止事件
            $(".custom-share-outer").fadeOut(500);
            $(".custom-share-bottom").animate({
                "bottom": -heig
            },500);
            $(".settlement-sf").animate({
                "bottom": "-30rem"
            })
        })
        $(".cust-price,.cust-buy").click(function() {
            animateLeft();
        })
        //选择区域图案
        $(".custom-under-list li").click(function(){
            var dat = $(this).attr("dat");
            if(dat == 'yes'){
                $(this).css({
                    "background-position" : "0 -2.29rem"
                }).siblings().css({
                    "background-position" : "0 0"
                })
            }else{
                $(this).css({
                    "background-position" : "0 0"
                }).siblings().css({
                    "background-position" : "0 0"
                })
            }
        })
        $(".picture-sf").click(function() {
            $(".custom-under-list li").css({
                "background-position" : "0 0"
            })
            $(".select-outing-sf").animate({
                "left": "-22rem"
            },500)
        })
        // 点击购买结算菜单
        $(".slide-top").click(function() {
            var dat = $(this).attr("data");
            var id = $(this).parent().index();
            var heig = $(window).height();
            var ht = $(".settlement-sf").attr("data");
            if(id == 4) {
                $(".settlement-sf-inner").animate({
                    "height": heig
                })
            }
            if(dat == 1) {
                if(id == 4) {
                    $(".settlement-sf-inner").animate({
                        "height": heig
                    })
                } else {
                    $(".settlement-sf-inner").animate({
                        "height": ht
                    })
                }
                $(this).css({
                    "background" : '#f2f2f2 url("../images/arrow_t.png")  96.73% center no-repeat',
                    "backgroundSize" : "2.24% auto"
                }).parent().siblings().find(".slide-top").css({
                    "background" : '#f2f2f2 url("../images/arrow_b.png")  96.73% center no-repeat',
                    "backgroundSize" : "2.24% auto"
                })
                $(this).next().slideDown().parent().siblings().find(".slide-bottom").slideUp().siblings(".slide-top").attr("data","1");
                $(this).attr("data","2");
            } else {
                $(this).next().slideUp();
                $(this).attr("data","1");
                $(this).css({
                    "background" : '#f2f2f2 url("../images/arrow_b.png")  96.73% center no-repeat',
                    "backgroundSize" : "2.24% auto"
                })
                $(".settlement-sf-inner").animate({
                    "height": ht
                })             
            }
        })
        // enter
        $(".gift-enter").click(function() {
            $(".gift-money").slideDown();
        })
        $(".gift-money").click(function() {
            $(".gift-money").slideUp();
        })
        $(".cust-buy").click(function() {
            var h = $(".settlement-sf").height();
            $(".settlement-sf").attr("data",h);
            $(".custom-share-outer").fadeIn(500);
            $(".settlement-sf").animate({
                "bottom": 0
            })
        })
        // 增加产品数量和价格计算
        var arrP = [];
        for(var i = 0; i < $(".price-detail-list li").length; i++) {
            var priceA = $(".price-detail-list li").eq(i).children("em").text().split("$")[1];
            arrP.push(priceA);
        }
        var priceAll = 0;
        for(var j = 0; j < arrP.length; j++) {
            priceAll += parseFloat(arrP[j]);
        }
        var totalC = $(".all-final-num").text().split("x")[1];
        var allPrice = priceAll * totalC;
        var startEnd = allPrice + parseFloat($(".postage-cust").text().split("$")[1]) - parseFloat($(".discount-cust").text().split("$")[1]);
        $(".all-final-price").text("=$" + allPrice);
        $(".item-price").text("$" + allPrice);
        $(".total-cust").text("Total piece（" +totalC+ "）");
        $(".final-price").text("$" + startEnd);
        $(".account-number").click(function() {
            var num = $(".number-num").text();
            num--;
            if(num < 1) {
                num = 1
            }
            $(".number-num").text(num);
            $(".all-final-num").text("x" + num);
            $(".all-final-price").text("=$" + (num*priceAll).toFixed(2));
            $(".item-price").text("$" + (num*priceAll).toFixed(2));
            $(".total-cust").text("Total piece（" +num+ "）");
            startEnd = num*priceAll + parseFloat($(".postage-cust").text().split("$")[1]) - parseFloat($(".discount-cust").text().split("$")[1]);
            $(".final-price").text("$" + startEnd.toFixed(2));
        })
        $(".add-number").click(function() {
            var num = $(".number-num").text();
            num++;
            $(".number-num").text(num);
            $(".all-final-num").text("x" + num);
            $(".all-final-price").text("=$" + (num*priceAll).toFixed(2));
            $(".item-price").text("$" + (num*priceAll).toFixed(2));
            $(".total-cust").text("Total piece（" +num+ "）");
            startEnd = num*priceAll + parseFloat($(".postage-cust").text().split("$")[1]) - parseFloat($(".discount-cust").text().split("$")[1]);
            $(".final-price").text("$" + startEnd.toFixed(2));
        })
        
        
        
        
        
        
        