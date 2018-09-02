require.config({
	paths:{
		jquery:"../../libs/jquery",
		swiper:"../../plugs/swiper.min",
        commonObj: "../js/commonObj"
	}
});

// swiper依赖jquery，需要引进jquery
require(['jquery','swiper','commonObj'],function($,swiper,commonObj){
	var topSlider=new Swiper('#topSlider', {
        slidesPerView: 1, // 一下滑一个
        centeredSlides: true, // 滑动到中间
        autoplay: 3000,
        loop: true,
        autoplayDisableOnInteraction: true // 手动滑动时禁止自动滑动
    });
    commonObj.loadCanvas();
});