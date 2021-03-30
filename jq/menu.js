$(function(){
    $(".ul-1-1>li").hover(function(){
        var $sub = $(this).children(".sub");
        $sub.slideToggle(300);
        
    });
});