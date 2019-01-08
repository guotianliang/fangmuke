$(function () {
    var swiper = new Swiper('.banner-lunbo', {
        autoplay: 3e3,  //自动播放
		speed: 500,
		loop: !0,
		centeredSlides: !0, //居中
		slidesPerView: "auto",
        // pagination: ".swiper-pagination",
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },autoplay:true,
      });
      var swiper = new Swiper('.goodobj-ban', {
        speed: 500,
		slidesPerView: "auto",
        // pagination: ".swiper-pagination",
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
      });
// 防抖
function throttle(fn, delay, atleast) {
    var timeout = null;
    startTime = new Date();
    return function () {
        curTime = new Date()
        clearTimeout(timeout);
        if (curTime - startTime >= atleast) {
            fn();
            startTime = curTime
        } else {
            timeout = setTimeout(fn, delay);
        }
    }
}

function lazyload() {
    var imgBox = document.getElementsByTagName("img");
    var len = imgBox.length;
    var n = 0;
    return function () {
        var seeHeight = document.documentElement.clientHeight;
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        for (var i = 0; i < len; i++) {
            if (imgBox[i].offsetTop < seeHeight + scrollTop) {
                if (imgBox[i].getAttribute('src') === "img/loading.gif") {
                    imgBox[i].src = imgBox[i].getAttribute('data-src');
                }
                n = n + 1
            }
        }
    }
}
var loadImgs = lazyload();
loadImgs()
window.addEventListener('scroll', throttle(loadImgs, 500, 1000), false);
})