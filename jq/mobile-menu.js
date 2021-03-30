$(function(){
    $(".menu-1>li").click(function(){
        var $menu02 = $(this).children(".menu-1-1");
        $menu02.slideToggle(300);
        var $otherMenu = $(this).siblings().children(".menu-1-1");
        $otherMenu.slideUp(300)
    })

    $(".menu-img").click(function(){
        var $menu01 = $(".menu-1");
        $menu01.slideToggle(300);
        var $otherMenu = $(this).siblings().children(".menu-1-1");
        $otherMenu.slideUp(300)
    })
})