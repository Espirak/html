$(document).ready(function() {
    if($(".calendar-body table").find("th:eq(0)").html() == "日"){
        $(".calendar-body table").find("th:eq(0)").css({
            "background":"#009fe8",
        })
    }
    if($(".calendar-body table").find("th:eq(6)").html() == "六"){
        $(".calendar-body table").find("th:eq(6)").css({
            "background":"#009fe8",
        })
    }
    $(".easyui-fullCalendar").click(function(){
        if($(".calendar-body table").find("th:eq(0)").html() == "日"){
            $(".calendar-body table").find("th:eq(0)").css({
                "background":"#009fe8",
            })
        }
        if($(".calendar-body table").find("th:eq(6)").html() == "六"){
            $(".calendar-body table").find("th:eq(6)").css({
                "background":"#009fe8",
            })
        }
    })
    CalendarHandler.initialize();
});