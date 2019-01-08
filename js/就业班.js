$(function(){
    jiazai()
    $(".more").click(function(){
        jiazai()
    })
    $(".jiuye-tab").on("click",function(){
        var articleId=$(this).attr('articeId')
    	window.open('详情页.html?news=jiuyeNews'+articleId)
    })
   function jiazai(){
    $.ajax({
        type:"get",
        url:"mk.json",
        dataType: "json"
    }).done(function(result){
        var n=0
        var suc=result.jiuye
        var now=n
        
        for (var n=0;n<=now;n++){
            var data=suc[n].data.list
            var str=""
            
            for(var i in data){
              str=str+`
              <li>
                            <div class="card-top">
                                <img src="${data[i].coverImg}">
                            </div>
                            <div class="card-center">
                                <h3>${data[i].title}</h3>
                                <div class="card-bootom">
                                    <div class="card-info">${data[i].info}</div>
                                    <div class="card-price">
                                        <p class="new-price">${data[i].price}</p>
                                    </div>
                                </div>
                            </div>
                        </li>
              `
            }
            $(".jiuye-list ul").html(str)
        }

    })
   }
})