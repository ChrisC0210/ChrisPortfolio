$(function () {
  var url = window.location.toString();
  var id = url.split('#')[1];
  if (id) {
    var t = $('#' + about).offset().top;
    $(window).scrollTop(t);
  }
})
//錨點