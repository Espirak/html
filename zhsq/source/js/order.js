$(document).ready(function(){
//添加商品操作
$(".food").find("input.num").next().click(function(){
    var good_id    = $(this).parent("div").parent("div").parent("li").attr("good_id");
    var good_name  = $(this).parent("div").prev("h2").find("a").html();
    var food       = '<li id="good' + good_id + '"><h3><span>' + good_name + '</span><p>¥28.00</p><div class="num"><span>-</span><span class="num">1</span><span>+</span></div></h3> </li>';
    var money      = parseFloat($(this).parent("div").prev("h2").find("a.read span").html());
    var sumelem    = $("div.money").find('span.sum');
    var sum        = parseFloat($("div.money").find('span.sum').html());
    var numberelem = $("span.number");
    var number     = parseInt($("span.number").html());

    if($(".car ul").find("#good" + good_id).html() == undefined){
        $(".car ul").append(food);
        sumelem.html(sum + money);
        numberelem.html(number+1);
        $(this).prev().val(parseInt($(this).prev().val()) + 1);
    }else{
        var numelem = $(".car ul").find("#good" + good_id).find("span.num");
        var num     = parseInt($(".car ul").find("#good" + good_id).find("span.num").html());
        numelem.html(num+1);
        sumelem.html(sum + money);
        numberelem.html(number+1);
        $(this).prev().val(parseInt($(this).prev().val())  + 1);
    }
});

//减除商品操作
$(".food").find("input.num").prev().click(function(){
    var good_id    = $(this).parent("div").parent("div").parent("li").attr("good_id");
    var money      = parseFloat($(this).parent("div").prev("h2").find("a.read span").html());
    var sumelem    = $("div.money").find('span.sum');
    var sum        = parseFloat($("div.money").find('span.sum').html());
    var numberelem = $("span.number");
    var number     = parseInt($("span.number").html());

    if($(".car").find("#good" + good_id).html() != undefined){

        if($(".car").find("#good" + good_id).find("span.num").html() == "1"){
            $(".car").find("#good" + good_id).remove();
            numberelem.html(number-1);
            sumelem.html(sum-money);
            $(this).next().val(parseInt($(this).next().val()) - 1);
        }else{

            var numelem = $(".car").find("#good" + good_id).find("span.num");
            var num     = parseInt($(".car ul").find("#good" + good_id).find("span.num").html());
            numelem.html(num - 1);
            numberelem.html(number-1);
            sumelem.html(sum-money);
            $(this).next().val(parseInt($(this).next().val()) - 1);
        }
    }
});

//添加商品操作
$(".car").find("span.num").next().click(function(){

    $(this).prev().html(parseInt($(this).prev().html()) + 1);
    var numberelem = $("span.number");
    var number     = parseInt($("span.number").html());
    var sumelem    = $("div.money").find('span.sum');
    var sum        = parseFloat($("div.money").find('span.sum').html());
    var moneyStr   = $(this).parent("div").prev("p").html();
    var money      = parseFloat(moneyStr.substr(1, moneyStr.length));
    console.log(money);
    numberelem.html(number + 1);
    sumelem.html(sum + money);
});

//添加商品操作
$(".car").find("span.num").prev().click(function(){

    var numberelem = $("span.number");
    var number     = parseInt($("span.number").html());
    var sumelem    = $("div.money").find('span.sum');
    var sum        = parseFloat($("div.money").find('span.sum').html());
    var moneyStr   = $(this).parent("div").prev("p").html();
    var money      = parseFloat(moneyStr.substr(1, moneyStr.length));

    if($(this).next().html() == "1"){
        $(this).next().html(parseInt($(this).next().html()) - 1);
        $(this).parent("div").parent("h3").parent("li").remove();

        numberelem.html(number - 1);
        sumelem.html(sum - money);
    }else{
        $(this).next().html(parseInt($(this).next().html()) -1);
        numberelem.html(number - 1);
        sumelem.html(sum - money);
    }
});



//清空商品操作
$(".clear").click(function(){
    $(this).parent("p").next().html(" ");
    $("span.number").html(0);
    $("div.money").find('span.sum').html(0.00);
});

$(".order").click(function(){
    $(".car").slideToggle();
    $(".filter").toggle();
});
})