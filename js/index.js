$(function(){
    $("#bq").click(function(e){
            $('.face').slideDown();
        e.stopPropagation();
    });
    $(document).click(function(){
        $(".face").slideUp();
    });
    $('.face ul li').click(function(){
        var simg=$(this).find("img").clone();
        $('.message').append(simg);
    });
    $('#submit').click(function(){
       // alert($(".message").html());
        var txt=$(".message").html();
        if(txt==''){
            $('.message').focus();
            return;
        }
    $('.mesCon').prepend("<div class='mesBox'><dl><dt><img src='img/s_bg5.jpg' style='width:50px;height:50px;border-radius:50%;'></dt><dd>^^一个人，一座城</dd></dl><div class='mesTex'>"+txt+"</div></div>");
});
    //背景音乐
   var mark1=0;
 $("#playBut").click(function(){
        if(mark1==0){
            $(".imgBut1").attr("src","img/pause.png");//暂停图片
            $("#music_audio").get(0).play();
            setInterval(function(){
                play_jb();
            },1000);
            mark1=1;
        }else{
            $(".imgBut1").attr("src","img/play.png");//播放图片
            $("#music_audio").get(0).pause();
            mark1=0;
        }
    });
    //获取进度播放进度条
    function play_jb(){
        var currTime=$("#music_audio").get(0).currentTime;//当前播放时间
        var allTime=$("#music_audio").get(0).duration; //音乐的总时间
        var bl=currTime/allTime;
        var _width=bl*380;

       $("p.music_jb1").css("width",_width);
       // document.title="当"+currTime+"总"+allTime;
        }

    $("#music").click(function(e) {
        $(".music").slideDown();
        e.stopPropagation();
    });
    $(document).click(function(){
        $(".music").slideUp();
    });
    $('#myMain').mouseenter(function(){
        $("#nav").slideDown();

    });
    $('#myMain').mouseleave(function(){
        $("#nav").slideUp();

    });
    $("#friend").mouseenter(function(){
        $(".Con1").slideDown();
    });
    $("#friend").mouseleave(function(){
        $(".Con1").slideUp();
    });
	$("#span").mouseenter(function(){
        $(".Con5").slideDown();
    });
    $("#span").mouseleave(function(){
        $(".Con5").slideUp();
    });
    $('#game').mouseenter(function(){
        $(".Con2").slideDown();
    });
    $('#game').mouseleave(function(){
        $(".Con2").slideUp();
    });
    $("#bg ul li").click(function(){
        var simg = $(this).find("img").attr("src");
        var bing = simg.replace("s_","");
        $("body").css({"background":"url("+bing+")"});
    });
    $("#person").mouseenter(function(){
        $('.Con3').slideDown();
    });
    $("#person").mouseleave(function(){
        $('.Con3').slideUp();
    });
    //相册子元素影藏和显示的控制
    $(".photo").click(function(){
        $('.photo_main').slideDown();
        $('#qq').hide();
    });
    $("document").click(function(){
        $('.photo_main').slideUp();
        $('#qq').show();
    });
    //图片轮询变化
    var oDiv=$('#fade');
    var aUlLi = oDiv.find('ul li');
   // var aOlLi = oDiv.find('ol li');
   // var oP=oDiv.find('p');
    var arr=['123！','123','123'];
    var iNow = 0;
    var timer=null;
    fnFade();
    function autoPlay(){
        timer = setInterval(function(){
            iNow++;
            iNow%=arr.length;
            fnFade();
        },1000);
    } autoPlay();
    function fnFade(){
        aUlLi.each(function(i){
            if(i!=iNow){
                aUlLi.eq(i).fadeOut().css('zindex',1);
            }else{
                aUlLi.eq(i).fadeIn().css('zindex',2);
            }
        });
    }
    //控制相册
    $(".imgBut").click(function(){//点击图片
        $(".MesBut").slideToggle();//自动收缩和展开
    });
    $(".Edit").click(function(){//点击文本框
        $(".MesBut").slideDown();//向下展开
    });
    $(".tz").click(function(){
        $(".tzImg").slideToggle();
    });
    //找到要拖动的元素
    var oDiv1=$(".tzImg").get(0);
    var oP1=$("p.tis");
    oDiv1.ondragenter=function(){
        oP1.html("可以释放元素");
    };
    oDiv1.ondragleave=function(){
        oP1.html("请将图片拖拽到此区域");
    };
    //在内部移动
    oDiv1.ondragover=function(e){
        e.preventDefault();
       // $(document.title(i));
    };
    oDiv1.ondrop=function(e){
        e.preventDefault();
       // alert(1);
        var fs= e.dataTransfer.files;
        var len=fs.length;
        for(var i=0;i<len;i++){
            // alert(len);
            var _type= fs[i].type;
            // alert(_type);
            if(_type.indexOf("image")!=-1){
                var fd=new FileReader();
                fd.readAsDataURL(fs[i]);
                fd.onload=function(){
                    var oImg=$("<img src='' />");
                    oImg.attr("src",this.result);
                    $(".tzImg").append(oImg);
                    oP1.html("");
                }
            }else{
                alert("请，上传图片文件！！");
            }
        }

    };
        var sImg=0;//存放小图地址
        var bImg=0;//存放大图地址
        var _index=0;
        var   setTimer=null;

        $(".close").click(function(){//关闭列表
            $(".imgList").slideUp();
        });
        $(".album").click(function(){//显示列表
            $(".imgList").slideDown();
        });
        //点击图片列表
        $(".imgList ul li").click(function(){
            sImg = $(this).find("img").attr("src");//获取小图地址
            //alert(sImg);
            _index=$(this).index();//alert(_index);
            bImg=sImg.replace("s_","");//alert(bImg);获取大图地址
            $(".bigImg img").attr("src",bImg);//把小图替换成大图
            $(".imgList").hide();//隐藏图片列表
        });
        //点击下一张
        $(".forward").click(function(){
            _index++;
            if(_index>8){_index=0;}
            // alert(_index);
            clearInterval(setTimer);
            sImg = $(".imgList ul li").eq(_index).find("img").attr("src");//获取小图地址
            bImg=sImg.replace("s_","");//alert(bImg);获取大图地址
            $(".bigImg img").attr("src",bImg);//把小图替换成大图
            $(".imgList").hide();//隐藏图片列表
        });
        //点击上一张
        $(".back_dull").click(function(){
            _index--;
            clearInterval(setTimer);
            if(_index<0){_index=8;}
            sImg = $(".imgList ul li").eq(_index).find("img").attr("src");//获取小图地址
            bImg=sImg.replace("s_","");//alert(bImg);获取大图地址
            $(".bigImg img").attr("src",bImg);//把小图替换成大图
            $(".imgList").hide();//隐藏图片列表
        });
        //自动播放
        function auto_Play(){
            setTimer=setInterval(function(){
                _index++;
                sImg = $(".imgList ul li").eq(_index).find("img").attr("src");//获取小图地址
                bImg=sImg.replace("s_","");//alert(bImg);获取大图地址
                $(".bigImg img").attr("src",bImg);//把小图替换成大图
                $(".imgList").hide();//隐藏图片列表
            },1000);

        }
    var mark=0;
        $("img.play").click(function(){
            play_and_pause();
        });
        function play_and_pause(){
            if(mark==1){
                $("img.play").attr("src","img/pause_dull.png");
                auto_Play();
                mark=0;
            }else if(mark==0){
                $("img.play").attr("src","img/play_dull.png");

                clearInterval(setTimer);
                mark=1;

            }
        }
    //关闭时光轴
    $(".Img_close").click(function(){
        $(".bigImg").hide();
        $(".imgList").hide();
        $(".button1").hide();
        $(".shadow").hide();
    });
    //开启时光轴
    $("#personal").click(function() {//alert(1);
        $(".bigImg").show();
        $(".imgList").show();
        $(".button1").show();
        $(".shadow").show();
    });
    //倒计时
    setInterval(function(){
        show_time();
    });
   // 时间显示：
   //var show_time=null;
    function show_time(){
        var time_start = new Date().getTime(); //设定当前时间
        var time_end =  new Date("2018/6/06 00:00:00").getTime(); //设定目标时间
        // 计算时间差
        var time_distance = time_end - time_start;
        // 天
        var int_day = Math.floor(time_distance/86400000);
        time_distance -= int_day * 86400000;
        // 时
        var int_hour = Math.floor(time_distance/3600000);
        time_distance -= int_hour * 3600000;
        // 分
        var int_minute = Math.floor(time_distance/60000);
        time_distance -= int_minute * 60000;
        // 秒
        var int_second = Math.floor(time_distance/1000);
        // 时分秒为单数时、前面加零
        if(int_day < 10){
            int_day = "0" + int_day;
        }
        if(int_hour < 10){
            int_hour = "0" + int_hour;
        }
        if(int_minute < 10){
            int_minute = "0" + int_minute;
        }
        if(int_second < 10){
            int_second = "0" + int_second;
        }
        // 显示时间
        $("#time_d").val(int_day);
        $("#time_h").val(int_hour);
        $("#time_m").val(int_minute);
        $("#time_s").val(int_second);
        // 设置定时器
        //setTimeout("show_time()",1000);
    }
    //退出登录
    $("#Exit").click(function(){
        location.href="login.html";
    });
    //打开游戏
    $("#playGame").click(function(){
        $(".playGame1").slideDown();
        $(".shadow").show();
    });
    var mineSweerper = new MineSweeper(
        $( "table.mine-sweeper" ),
        10,
        10,
        "10%"
    );
    //关闭游戏
    $("#closeGame").click(function(e){
        $(".playGame1").slideUp();
        e.stopPropagation();
        $(".shadow").hide();
    });

});