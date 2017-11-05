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
        $(".select-sf-two li").click(function() {
            var src = $(this).children().attr("src");
            $(this).parent().parent().siblings().find(".pic-con-sf").find("img").attr("src", src);
        })
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
            console.log(dat)
            var index = $(this).index();
            $(".select-out-sf").attr("data", dat);
            $(".select-out-sf").attr("index", index);
            $(".select-outer-sf").animate({
                "left": "10rem"
            },500);
            if(dat==1) { 
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
            var src = $(this).children("img").attr("src");
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
        })
        $(".cust-price,.cust-buy").click(function() {
            animateLeft();
        })
        //选择区域图案
        $(".custom-under-list li").click(function(){
            $(this).css({
                "background-position" : "0 -2.29rem"
            }).siblings().css({
                "background-position" : "0 0"
            })
        })
        $(".picture-sf").click(function() {
            $(".custom-under-list li").css({
                "background-position" : "0 0"
            })
            $(".select-outing-sf").animate({
                "left": "-22rem"
            },500)
        })
        
        
        
        
        
        
        
        
        
        