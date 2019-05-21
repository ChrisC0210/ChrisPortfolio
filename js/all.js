$(document).ready(function () {
  //header color changed
  $(window).on("scroll", function () {
    var scrollDistance = $(window).scrollTop();
    var $header = $(".js-header");
    if (scrollDistance > 80) {
      $header.addClass("header--colored");
    } else {
      $header.removeClass("header--colored");
    }
  });
  //wow plugin setup
  if (screen.width > 768) {
    new WOW().init();
  };
  //FAB
  $(".fab_icon").click(function () {
    $("html,body").animate({
      scrollTop: 0
    }, 100);
  });
})
console.log('%c欸~你！就是你！當你按下f12或是右鍵檢閱文件時\n你就是我們要找的前端、網頁設計師！！！！我們hen需要你的加入！！%c\n都看到了還在等什麼？快將你的自介，連同令人歎為觀止的作品、git連結寄到 service@chickpt.com.tw，\nhen期待你的來信 ^_^/。', 'color: red; font-size: 1.6rem; line-height: 1.2;', 'color:black; font-size: 1rem; line-height: 1.6;');