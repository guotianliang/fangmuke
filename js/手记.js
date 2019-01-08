$(function(){
    var swiper = new Swiper('.banner-lunbo', {
        autoplay: 3e3,
		speed: 500,
		loop: !0,
		centeredSlides: !0,
		slidesPerView: "auto",
        autoplay:true,
      });
      function chushi(){
        $(".chushi").trigger('click')
      }
      window.onload=chushi   //模拟点击
      $(".sj-nav a").click(function(){
          var index=$(this).index()
          console.log(index)
          $(this).addClass("active").siblings().removeClass("active")
          $.ajax({
             type:"get",
             url:"mk.json",
             dataType: "json"
          }).done(function(result){
            clickevent()  //初始化
            function clickevent(){
                $("#page-content").html(" ")
                var suc=result.shouji[0].data['list0'+index]
                console.log(suc.length)
                if(suc.length>20){
                    $(".more").show()
                    $(".nomore").hide()
                    now=20
                }else{
                    $(".more").hide()
                    $(".nomore").show()
                     now=suc.length
                }
                jiazaimore()
                $(".more").click(function(){
                    now=suc.length  
                    jiazaimore()
                    if(now-20>20){
                        // console.log("dayu20")
                        $(".more").show()
                        $(".nomore").hide()
                        now=20
                    }else{
                        $(".more").hide()
                        $(".nomore").show()
                    }
                    // console.count(jiazaimore)
                })
                function jiazaimore(){
                    $("#page-content").html(" ")
                    str=''
                    for (var i=0;i<now;i++){
                        // console.log(now)
                        str=str+ `
                        <a href="javascript:;" class="page-item">
                        <div class="page-info">
                            <p>${suc[i].title}</p>
                            <p><span class="original">${suc[i].original}</span>
                            <span class="liulan">${suc[i].liulan}</span>
                            </p>
                        </div>
                        <div class="img-box">
                            <img src="${suc[i].img}">
                        </div>
                    </a>
                        `  
                    }
                    $("#page-content").html(str)
                    $anum=$("#page-content a")
                for(var i=0;i<$anum.length;i++){
                  //   console.log(($anum.eq(i).find(".img-box img").attr("src")))
                    if($anum.eq(i).find(".img-box img").attr("src")==""){
                      $anum.eq(i).find(".img-box").hide()
                      $anum.eq(i).find(".page-info").css("width",100+"%")
                    }
                    if($anum.eq(i).find(".original").html()==""){
                        $anum.eq(i).find(".original").hide()
                    }
                  
                }
                }
                
                
              }
          })
          
      })


})