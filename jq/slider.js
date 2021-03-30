// $(window).resize(function() {
//     var width = $(this).width();
//     var height = $(this).height();
//     alert("width"+width+"-height"+height);
    
    
//     });
$(function(){   
    
    $(window).resize(function(){
        location.reload()
    });
        
    
    var $windowWidth = window.innerWidth*0.95;
    // var newWidth = $(window).width()*0.95;

    //右按鈕
    // 總的圖片個數(用程式碼獲取個數，擴充套件性比較強) 
    var totalCount = $("#container #content li").length;
    // 當前處於第幾個圖片 
    var nowImage = 0; 
    $("#container #btn #rightBtn").click(rightBtnClick); 
    function rightBtnClick(){ 
    if(!$("#container #content").is(":animated")){ 
    if(nowImage == totalCount -2){ 
    nowImage = 0; 
    $("#container #content li").eq(nowImage).addClass("current").siblings().removeClass("current"); 
    $("#container #content").animate({"left": (-$windowWidth) * (totalCount -1 )}, 1000, function(){ 
    $("#container #content").css("left",0);  
    }); 
    } else { 
    nowImage++; 
    changeImage(); 
    } 
    } 
    } 

    //換圖片
    function changeImage(){ 
        if(!$("#container #content").is(":animated")){
            $("#container #content").animate({"left": (-$windowWidth)* nowImage}, 400); 
            $("#container #content li").eq(nowImage).addClass("current").siblings().removeClass("current")
            ; 
        }
    }

    //左按鈕
    $("#container #btn #leftBtn").click(function(){ 
    if(!$("#container #content").is(":animated")){ 
    if(nowImage == 0){ 
    nowImage = totalCount - 2; 
    $("#container #content").css("left",(-$windowWidth) * (totalCount - 1)); 
    $("#container #content li").eq(nowImage).addClass("current").siblings().removeClass("current"); 
    $("#container #content").animate({"left": (-$windowWidth) * nowImage}, 1000); 
    } else { 
    nowImage--; 
    changeImage(); 
    } 
    } 
    });

    //選單按鈕
    $("#hu-1 #indicator li").click(function(){ 
        nowImage = $(this).index(); 
        changeImage(); 
    });

    //定時啟動
    var timer = setInterval(rightBtnClick, 3000); 
   
    $("#container").hover(function(){
        clearInterval(timer);   
    },function(){
        timer = setInterval(rightBtnClick, 3000);
    });
});