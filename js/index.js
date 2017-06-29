/**
 * Created by Administrator on 2016/9/4.
 */
$(function(){
    $("#li0").mouseenter(function(){
        $(".trip").slideDown();
    },function(){
        $(".trip").slideUp();
    });

    var oDiv=$("#fade");
    var aUlLi=oDiv.find("ul li");
    var arr=['','',''];
    var iNow=0;
    var timer=null;
    fnFade();
    function fnFade(){
        aUlLi.each(function(i){
            if(i!=iNow){
                aUlLi.eq(i).fadeOut().css('zindex',1)
            }else{
                aUlLi.eq(i).fadeIn().css('zindex',2);
            }
        });
    }
    function autoPlay(){
        timer=setInterval(function(){
            iNow++;
            iNow%=arr.length;
            fnFade();
        },1000)
    }autoPlay();
    var _index=0;
    $("ul.button li").mouseenter(function(){
        $(this).addClass("hover").siblings("li").removeClass("hover");
       var _index=$(this).index();
        //alert(_index);
        
		//$(".autoImg img")..animate({left:-(_index*1100)},1000);
		$(".autoImg img").eq(_index).fadeIn().siblings("img").fadeOut();
    });
    //选项卡切换
    (function(){
        fnTab( $('.tabNav1'), $('.tabCon1'), 'click' );
        fnTab( $('.tabNav4'), $('.tabCon4'), 'mouseover' );
        function fnTab(oNav,aCon){
            var aElem = oNav.children();
            aCon.hide().eq(0).show();
            aElem.each(function(index){
                $(this).click(function(){
                    aElem.removeClass('active').addClass('gradient');
                    $(this).removeClass('gradient').addClass('active');
                    aElem.find('a').attr('class','triangle_down_gray');
                    $(this).find('a').attr('class','triangle_down_red');

                    aCon.hide().eq(index).show();
                });

            });
        }

    })();
    //点击出现登录
    $("#logo").click(function(){
        $(".logo").slideDown();
        $(".shadow").show();
    });
    $("#close").click(function(){
        $(".logo").slideUp();
        $(".shadow").hide();
    });
    //点击出现注册
    $("#reg").click(function(){
        $(".reg").slideDown();
        $(".shadow").show();
    });
    $("#reg_close").click(function(){
        $(".reg").slideUp();
        $(".shadow").hide();
    });





});




