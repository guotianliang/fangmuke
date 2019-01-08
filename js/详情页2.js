$(function(){
    var news=getUrlParams('news');
    console.log(news)
    var data=xingqing[news].data;
    console.log(data)
    for(var i=0;i<data.list.length;i++){
        var htmlModel=$('#plan-wrapper').html()
        console.log(data.list[i].jieduan)
        htmlModel=htmlModel.replace('$jieduan',data.list[i].jieduan)
        htmlModel=htmlModel.replace('$img$',data.list[i].img)
        htmlModel=htmlModel.replace('$title',data.list[i].title)
        htmlModel=htmlModel.replace(' $center',data.list[i].center)
	    htmlModel=htmlModel.replace('$bottomnum',data.list[i].bottomnum)
        htmlModel=htmlModel.replace('$bottomprice',data.list[i].bottomprice)
        $('.page-type-list').append(htmlModel)
    }
    function getUrlParams(name){
    	var reg=new RegExp('(^|&)'+name+'=([^&]*)(&|$)')
    	var r=window.location.search.substr(1).match(reg)
    	if (r!=null) {
    		console.log(r)
    		return r[2]
    	} else{
    		return ""
    	}
    }
   
    $(".select-lable").click(function(){
        add=0
        $(this).find("i").toggleClass("on")
        addprice()
        $(".select-total-price").html('￥'+add)
    })
    function addprice(){ 
        for(var i=0;i<$(".on").length;i++){
        // var str=$.trim($(".plan-item-price").eq($(this).index(".select-lable")).html())
            str=$.trim($(".on").eq(i).parent().parent().parent().find(".plan-item-price").html())
            str1=str.substring(1)
            // console.log(str2)
            // console.log(str.substring(2)) 
            add=Number(add)+Number(str1)
        }
      
    }
})