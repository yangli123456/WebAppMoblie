require.config({
	paths:{
		jquery:"../../libs/jquery-1.9.1.min",
		swiper:"../../plugs/swiper.min",
        commonObj: "../js/commonObj",
        diqu: "../../plugs/diqu2",
	}
});

// swiper依赖jquery，需要引进jquery
// 1. 这里的function后面的参数可以不写，引入模块了，就直接可以用，就像通过<script>标签引入模块一样
// 2. 这里是入口，这里引入了，以后其他地方都可以使用
require(['jquery','swiper','commonObj','diqu'],function() {
	var topSlider=new Swiper('#topSlider', {
        slidesPerView: 1, // 一下滑一个
        centeredSlides: true, // 滑动到中间
        autoplay: 3000,
        loop: true,
        autoplayDisableOnInteraction: true // 手动滑动时禁止自动滑动
    });
    commonObj.loadCanvas(); // 初次显示在界面上的图片，此方法只会调用一次
    $(window).scroll(commonObj.scrollHandler);
    $("#productul").on("touchmove", commonObj.scrollHandler);

    // 产品详情
    $("#addNums").on('click',commonObj.addNums);
    $("#reduceNums").on('click',commonObj.reduceNums);
    $("#addCart").on('click',commonObj.addCarts);

    // 购物车
    $(".addNum").on('click',commonObj.addNums);
    $(".reduceNum").on('click',commonObj.reduceNums);
    $('.delete').on('click',commonObj.deleteItem);
    commonObj.calculateTotalMoney();

    // 订单详情 (这里的ev依然是javascript里面的那个ev)
    $("input[name='address_options']").on('click',function (ev) {
        ev.cancelBubble = true;
        ev.stopPropagation();
        if ($(this).attr('id') == "add-naddress") {
            $("#add-address-box").slideDown("fast");
        }else {
            $("#add-address-box").slideUp("fast");
        }
    });

    if ($("select[name='sheng']").length > 0) {
        new PCAS('sheng','shi','qu');
    }

    $("#createFP").on('click',function () {
        if ($(this).attr('checked') == 'checked') {
            $("#create-fa").show();
        }else {
            $("#create-fa").hide();
        }
    });

    // 回填
    $('.shdz-detail').on('click',commonObj.reStoreAddress);

    // 个人信息
    if ($('.add-zone').length > 0) {
        new PCAS("add-sheng","add-city","add-qu");
    }
    $('#addr-info').on('click','.bianji',commonObj.fnEditInfo);

    // 删除
    $('#addr-info').on('click','.shanchu',function () {
        $(this).parents('li').remove();
    });

    // 保存地址
    $('#save-addr').on('click',commonObj.saveAddress);

});