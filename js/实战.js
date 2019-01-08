$(function(){
    $.ajax({
        type:"get",
        url:"mk.json",
        dataType: "json"
    }).done(function(result){
        var suc=result.shizhan[0].data.list00
        // console.log(suc)
        for(var i in suc){
            var str=''
            if(i<3){
               str=str+
               `
               <dd>
                    <div class="img-left">
                     <img src="${suc[i].img}">
                    </div>
                    <div class="txt-right">
                        <h3 class="txt-r-tit">${suc[i].title}</h3>
                        <p class="txt-r-desc">${suc[i].desc}</p>
                        <p class="txt-r-info"><span>${suc[i].type}</span><i class="dot">·</i><span>${suc[i].num}</span></p>
                        <p class="txt-r-price clearfix">
                            <span class="now-price fl">${suc[i].nowprice}</span>
                            <span class="old-price fl">${suc[i].oldprice}</span>
                            <span class="jz-time fl">${suc[i].jztime}</span></p>
                    </div>
                </dd>
               `
            }else{
                str=str+
                `
               <dd>
                    <div class="img-left">
                     <img src="${suc[i].img}">
                    </div>
                    <div class="txt-right">
                        <h3 class="txt-r-tit">${suc[i].title}</h3>
                        <p class="txt-r-desc">${suc[i].desc}</p>
                        <p class="txt-r-info"><span>${suc[i].type}</span><i class="dot">·</i><span>${suc[i].num}</span></p>
                        <p class="txt-r-price clearfix">
                            <span class="now-price fl">${suc[i].nowprice}</span>
                    </div>
                </dd>
               `
            }
            $(".course-list dl").append(str)
           
            str=''

        }

        $(".course-list dl dd").eq(2).after('<div class="img-title curimg01"><img src="img/sz-imgtit01.jpg"></div>')    
        $(".course-list dl dd").eq(8).after('<div class="img-title curimg02"><img src="img/sz-imgtit02.jpg"></div>') 
    })
})