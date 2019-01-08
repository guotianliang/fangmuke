$(function(){
    // kaifa()
    jishu()
    $(".course-left li").click(function(){
        index=$(this).index()
        switch(index){
            case 1:
                kaifa()
                break;
            case 0:
                jishu()
        }
        $(this).addClass("active").siblings().removeClass("active")
        $(".course-right").eq(index).show().siblings().hide()
    })
    function jishu(){
        $.ajax({
            type: "get",
            url: "mk.json",
            dataType: "json"
        }).done(function (result){
            var suc = result.jishu[0].data[0].list00   
            var suc2 = result.jishu[0].data[0].list01  
            // console.log(suc2)
            var nowlen=suc2.length
            size=5
            page=parseInt(Math.floor(nowlen/size))
            console.log(page)
            time=0
            
            var str = ""
            var str2=""
            for (var i in suc) {
                str = str + `
                <li class="cour-r-tit">
                <div class="cour-img">
                    <img src="${suc[i].src}" alt="">
                </div>
                <span class="cour-txt">${suc[i].txt}</span>
            </li>
                `
            }
            for(var i in suc2){
                str2=str2+`
                <li class="cour-b-item">
                <div class="cour-b-img">
                <img src="${suc2[i].src}">
            </div>
            <div class="cour-b-txt">
                <h2 class="cour-b-ttit">${suc2[i].title}</h2>
                <p class="cour-b-info">
                    <span class="cour-b-info-l">${suc2[i].span1}</span>
                    <span class="cour-b-info-r">${suc2[i].span2} </span>
                </p>
            </div>
            </li>
                `
            }
            $("#jishu ul").html(str)
            $("#jishu").parent().parent().find(".cour-b-list").html(str2)
        })
    }
    function kaifa(){
        $.ajax({
            type: "get",
            url: "mk.json",
            dataType: "json"
        }).done(function (data) {
            var suc = data.jichu  //基础数据
            var suc2=data.jinjie  //进阶数据
            var suc3=data.curbom  //底部数据
            var str = ""
            var str2=""
            var str3=""
            for (var i in suc) {
                str = str + `
                <li class="cour-r-tit">
                <div class="cour-img">
                    <img src="${suc[i].src}" alt="">
                </div>
                <span class="cour-txt">${suc[i].txt}</span>
            </li>
                `
             
            }
            for(var i in suc2){
                str2 = str2 + `
                <li class="cour-r-tit">
                <div class="cour-img">
                    <img src="${suc2[i].src}" alt="">
                </div>
                <span class="cour-txt">${suc2[i].txt}</span>
            </li>
                `
            }
            for(var i in suc3){
                str3=str3+`
                <li class="cour-b-item">
                <div class="cour-b-img">
                <img src="${suc3[i].src}">
            </div>
            <div class="cour-b-txt">
                <h2 class="cour-b-ttit">${suc3[i].title}</h2>
                <p class="cour-b-info">
                    <span class="cour-b-info-l">${suc3[i].span1}</span>
                    <span class="cour-b-info-r">${suc3[i].span2} </span>
                </p>
            </div>
            </li>
                `
            }
            $("#jichu ul").html(str)
            $("#jinjie ul").html(str2)
            $("#jinjie").parent().parent().find(".cour-b-list").html(str3)
        })
    }
})