$(function(){
    var num=0;
    var heights=$(window).height();
    var flag=true;
    //阻止浏览器的默认行为
    $(".content")[0].onmousedown=function(e){
        e.preventDefault();
    }
    $(".content")[0].onmousemove=function(e){
        e.preventDefault();
    }
    touch.on("body","swipeup",".content",function(){
        if(!flag){
            return;
        }
        num++;
        if(num==$("section").length){
            num=$("section").length-1;
            return;
        }
        $(".content").css({marginTop:-num*heights});
        flag=false;
    })
    touch.on("body","swipedown",".content",function(){
        if(!flag){
            return;
        }
        num--;
        if(num==-1){
            num=0;
            return;
        }
        $(".content").css({marginTop:-num*heights});
        flag=false;
    })
    $(".content")[0].addEventListener("webkitTransitionEnd",function() {
        flag = true;
        if(num!=0){
            $(".moves").each(function(index,obj){
                if(index==num){
                    $(obj).find(".towtitle").css({transform:"translate(0px,0)"});
                    $(obj).find(".towright").css({transform:"translate(0px,0)"});
                }else{
                    $(obj).find(".towtitle").css({transform:"translate(-100px,0)"});
                    $(obj).find(".towright").css({transform:"translate(100px,0)"});
                }
            })
        }
    })



    //菜单的控制
    var flag2=true;
    $(".menu-list")[0].onclick=function(){
        if(flag2){
            $(".menu-list-t").css({animation:"menu1 0.5s ease forwards"});
            $(".menu-list-b").css({animation:"menu2 0.5s ease forwards"});
            $(".menu-con").css({display:"block"});
            $(".menu-con>a").each(function(index,obj){
                $(obj).css({transform:"rotateX(90deg)",animation:"navlist 0.5s ease forwards "+index*0.2+"s"})
            })
            flag2=false;
        }else{
            $(".menu-list-t").css({animation:"menu3 0.5s ease forwards"});
            $(".menu-list-b").css({animation:"menu4 0.5s ease forwards"});
            $(".menu-con>a").each(function(index,obj){
                $(obj).css({transform:"rotateX(0deg)",animation:"navlist1 0.5s ease forwards "+(1.2-index*0.2)+"s"})
            })
            flag2=true;
        }


    }



    //监测浏览器款高度的变化
    window.onresize=function(){
        heights=$(window).height();
        var widths=$(window).width();
        $(".content").css({marginTop:-num*heights});
        if(widths>1000){
            $(".menu-list>span").css({animation:"none"});
            $(".menu-con>a").css({animation:"none"})
        }
    }

})



