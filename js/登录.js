$(function(){
    function checkphone(){
        var phone=$(".urser input").val()
        if(!(/^1[34578]\d{9}$/.test(phone))){ 
           $(".yanzheng a").removeClass("on")  
            return false; 
        }else{
            $(".yanzheng a").addClass("on")  
        }
    }
    $("#tel").on('keyup',function(){
        checkphone()
    })
    $(".denglu").click(function(){
        window.open("index.html")
    })
})