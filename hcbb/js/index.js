$(document).ready(function(){
    jQuery("#talk-group .talk-group").slide({});
    jQuery("#course .course").slide({});
    $("#course .course .bd .left ul > li.tab").click(function(){
        $(this).children("ul.toggle-tab").slideToggle();
        $(this).toggleClass("on");
    });
    $("#course .course .bd .left ul li.tab ul li").click(function(){
        if($(this).hasClass("chinese") || $(this).hasClass("physics")){
            var divName  = $(this).attr("class");
            var otherDiv = $("#course .course .bd .right > div");
            var divElem  = $("#course .course .bd .right ."+divName);
            otherDiv.hide();
            divElem.show();
            $("#course .course .bd .left ul li.tab ul > li").removeClass("active");
            $(this).toggleClass("active");
            return false;
        }else{
            var otherDiv = $("#course .course .bd .right > div");
            var divElem  = $("#course .course .bd .right .physics");
            otherDiv.hide();
            divElem.show();
            $("#course .course .bd .left ul li.tab ul > li").removeClass("active");
            $(this).toggleClass("active");
            return false;
        }
    });
    $("#course .course .bd .left ul li.default").click(function(){
        $("#course .course .bd .right > div").hide();
        $("#course .course .bd .right > div.calendar").toggle();
    });
    jQuery(".problem").slide({titCell:"h3", targetCell:"ul",defaultIndex:1,trigger:"click",effect:"slideDown",delayTime:300,defaultPlay:false,returnDefault:true});

    //Count Down
    var interval = 1000;
    function ShowCountDown(element)
    {
        var cc = $(element);
        var elem = $(element).find(".state");
        var arr = cc.attr("end-time").split(",");
        var now = new Date();

        var endDate = new Date(arr[0], arr[1]-1, arr[2], arr[3]);
        var leftTime=endDate.getTime()-now.getTime();
        var leftsecond = parseInt(leftTime/1000);
        var day1=Math.floor(leftsecond/(60*60*24));
        var hour=Math.floor((leftsecond-day1*24*60*60)/3600);
        var minute=Math.floor((leftsecond-day1*24*60*60-hour*3600)/60);
        var second=Math.floor(leftsecond-day1*24*60*60-hour*3600-minute*60);

        var countDown = "<p class='c-d'>倒计时 : "+day1+"天"+hour+"小时"+minute+"分"+second+"秒</p>"
        if(element == ".end"){
            var nowTime = new Date().getTime();
            var endTime = endDate.getTime();
            if(nowTime < endTime){
                var html = countDown;
            }else{
                var html = "<p class='end'><span>end</span>已经结束</p>";
            }
        }else if(element == ".hot"){
            var nowTime = new Date().getTime();
            var endTime = endDate.getTime();
            var nowDay  = new Date().getDate();
            if(nowTime < endTime){
                var html = countDown;
            }else if(nowDay == endDate.getDate()){
                var html = "<p class='hot'><img src='images/hot.png'>正在进行</p>";
            }else if(nowTime > endTime){
                var html = "<p class='end'><span>end</span>已经结束</p>";
            }
        }else if(element == ".count-down"){
            var nowTime = new Date().getTime();
            var endTime = endDate.getTime();
            var nowDay  = new Date().getDate();
            if(nowTime < endTime){
                var html = countDown;
            }else if(nowDay == endDate.getDate()){
                var html = "<p class='hot'><img src='images/hot.png'>正在进行</p>";
            }else if(nowTime > endTime){
                var html = "<p class='end'><span>end</span>已经结束</p>";
            }
        }
        elem.html(html);
    }
    window.setInterval(function(){ShowCountDown('.end');}, interval);
    window.setInterval(function(){ShowCountDown('.hot');}, interval);
    window.setInterval(function(){ShowCountDown('.count-down');}, interval);
});
