$(function(){
    $("#mainChild4 .contentNav .child").click(function(){
        var index=$("#mainChild4 .contentNav .child").index($(this));
        $("#mainChild4 .contentNav .child").not($(this)).removeClass("on");
        $(this).addClass("on");
        $("#mainChild4 .contents .child").not($("#mainChild4 .contents .child:eq("+index+")")).hide();
        $("#mainChild4 .contents .child:eq("+index+")").fadeIn(500);
    });


    var scrolls={};
    $("#mainChild1 .child").click(function(){
        var screenHeight=$(window).height();
        var headerTop=parseInt($(".header").css("height"));
        var scrollname=['#mainChild2','#mainChild3','#mainChild5','#mainChild6','#mainChild4','#mainChild9'];
        for(var i=0;i<scrollname.length;i++){
            scrolls[i]=parseInt($(scrollname[i]).offset().top)-headerTop;
        }
        var index=$("#mainChild1 .child").index($(this));
        $("body").getNiceScroll(0).doScrollTop(scrolls[index],300);
    });
});