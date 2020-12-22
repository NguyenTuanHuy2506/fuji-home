// JavaScript Document

$(function(){
 $('.chirashi-icon a').click(function() {
        var imgSrc = $(this).children().attr('src');
        $('.bigimg').children().attr('bigimg');
        $('.modal').fadeIn();
        $('body,html').css('overflow-y', 'hidden');
        $(window).scrollTop(300);
        return false
      });
     });
$(function(){
$('.close-btn a').click(function() {
        $('.modal').fadeOut();
        $('body,html').css('overflow-y', 'visible');
        return false
      });
    });
