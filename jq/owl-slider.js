$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        center:false,
        margin: 10,

        responsive:{
            0:{
                items:1
            },
            700:{
                items:3
            },
        }
    })
})