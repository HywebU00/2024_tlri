// 桌機版 toggle btn
$('.single_menu_btn').off().click(function(e) {
    $('aside').toggleClass('open');
    $('.overlay').toggleClass('show');
    $('.wrapper').toggleClass('noscroll');
    $(this).blur();
    e.preventDefault();
});

//----------------------------------------------------------選單控制-----//
$('aside').prepend('<a href="#" class="close_btn"></a>');
// $('aside').find('.toggle_menu_btn').clone().prependTo('header');
$('aside').find('.close_btn').off().click(function(e) {
    _CLOSEMENU();
    $(this).parents('aside').siblings('header').removeClass('full');
    e.preventDefault();
});


enquire.register("screen and (max-width:992px)", {
    // 則在註冊處理程序時觸發一次。
    setup : function() {},
    
    // 在媒體查詢匹配時觸發。
    match : function() {},

    // 在媒體查詢轉換時觸發（從匹配狀態到不匹配狀態）
    unmatch : function() {}

});



enquire.register("screen and (max-width:992px)", {
    // 則在註冊處理程序時觸發一次。
    setup : function() {},
    
    // 在媒體查詢匹配時觸發。
    match : function() {},

    // 在媒體查詢轉換時觸發（從匹配狀態到不匹配狀態）
    unmatch : function() {},

    // 默認為false
    // 如果設置為true，則推遲執行設置功能
    // 直到第一次匹配媒體查詢
    // deferSetup : true,

    // 取消註冊處理程序時觸發。
    // 將清理代碼放在這裡
    // destroy : function() {}

});