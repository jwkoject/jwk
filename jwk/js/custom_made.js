var params = {};
        // 设置获取选项栏宽度
        var win = $(window).width(),
        lengW2 = $(".select-under-back").children().eq(0).find(".select-sfs").children().width();
        var els = null;
        var elsh = null;
        console.log(win);
        if(win >= 320) {
            els = 11;
            elsh = 10;
        } 
        if (win >= 375) {
            els = 13;
            elsh = 11;
        }
        if (win >= 414) {
            els = 16;
            elsh = 13;
        }
        console.log(els);
        // 选择分类
        var timer = null;
        $(".pic-con-sf").click(function() {
            var lengW = $(".select-sf li").width();
            $(this).parent().siblings(".select-outer-sf").find(".select-sf").children().css({
                "left": "999px"
            });
            if(timer) {
                clearInterval(timer);
            }
            var startT = -1;
            $(this).addClass('pic-con-show').parent().parent().siblings().find(".pic-con-sf").removeClass('pic-con-show');
            $(".custom-under-list li img").removeClass('custom-under-img');
            var leng = $(this).parent().siblings(".select-outer-sf").find(".select-sf").children().length;
            var lengs = leng * (lengW+els+3);
            if(lengs < $(".select-outer-sf").width()) {
                lengs = $(".select-outer-sf").width()
            } else {            
                $(this).parent().siblings(".select-outer-sf").find(".select-sf").css({
                    "width": lengs
                })
            }
            var _this = this;   
            var lef = $(this).parent().next().css("left").split("px")[0];
            if(lef > 0) {               
                $(this).parent().next().animate({
                    "left": "-15rem"
                },500).parent().siblings().find(".select-outer-sf").animate({
                    "left": "10rem"
                },500);
                timer = setInterval(function() {
                    startT++;
                    if(startT == leng) {
                        clearInterval(timer);
                        // startT = -1;
                    }
                    var leu = startT * (elsh + lengW);
                    $(_this).parent().siblings(".select-outer-sf").find(".select-sf").children().eq(startT).animate({
                        "left": leu
                    },500);
                    console.log(startT)
                    console.log(lengW)
                },500)
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
            // 保存数据到对象
            // if(index == 0) {
            //     params.size = $(this).text();
            // }
            // if(index == 1) {
            //     params.color = $(this).children().attr("src");
            // }
            // console.log(params)
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
            } else {
                $(".swiper-containers").addClass('rote-sf-show2').removeClass('rote-sf-show');
                    roate = false;
                $(".custom-under-back1").addClass('custom-under-show').siblings().removeClass('custom-under-show');
                $(".picture-img-back .picture-pos-show").fadeOut(1000);
                $(".picture-img-positive .picture-pos-show").fadeIn(1000);
                $(".select-under-back .select-outing-sf").css({
                    "left": "-22rem"
                });
            }
        })
        // 选择定制图案
        $(".custom-under-list li img").click(function() {
            $(this).addClass('custom-under-img').parent().siblings().find("img").removeClass('custom-under-img');
            $(".pic-con-sf").removeClass('pic-con-show');
            var dat = $(this).parent().parent().attr("data");
            var index = $(this).parent().index();
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
        $(".swiper-containers").click(function() {
            animateLeft();
        })
        $(".select-sfs li").click(function() {
            $(this).addClass('pic-con-show').siblings().removeClass('pic-con-show');
            var data = $(".select-out-sf").attr("data");
            var src = $(this).children("img").attr("src");
            var index = $(".select-out-sf").attr("index");
            console.log($(this).index())
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
                "top": "46%"
            })
            $(".custom-save-over").css("display","block");
            $(".cust-save-tit").css("display","block").animate({
                "top": "40%"
            },1000).fadeOut(3000);
            setTimeout(function() {
                $(".custom-save-over").css("display","none");
            },4000)
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