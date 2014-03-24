function chk_scroll(e)
{
  e.stopPropagation();
    var height = $('#banner').height() + 61;
    console.log(height);
    if ($(this).scrollTop() > height) {
      $('.navbar').addClass('navbar-fixed-top');

    }
    else if ($(this).scrollTop() < height) {
      $('.navbar').removeClass('navbar-fixed-top');
    }
}
$(document).ready(function(){

    $(window).bind('scroll',chk_scroll);
});
