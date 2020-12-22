$(function () {
	$('.slider').slick({
		dots: false,
		slidesToShow: 3,
		centerMode: true,
		variableWidth: true,
		prevArrow:'<div class="prev-arrow"></div>',
		nextArrow:'<div class="next-arrow"></div>',

	  }); 
    
	  
	  $('.slider-koukoku').slick({
		dots: false,
		slidesToShow: 3,
		centerMode: true,
		variableWidth: true,
		prevArrow:'<div class="prev-arrow"></div>',
		nextArrow:'<div class="next-arrow"></div>',

	  });    


});



$(document).ready(function(){
  var time = 2;
  var $bar,
      $slick,
      isPause,
      tick,
      percentTime;
  
  $slick = $('.slider001');
  $slick.slick({
   	arrows: false,
    dots: true,
    fade: true,
		infinite: true,
  });
  
  $bar = $('.slider-progress .progress');
  
  
  function startProgressbar() {
    resetProgressbar();
    percentTime = 0;
    isPause = false;
    dot = false;
    tick = setInterval(interval, 10);
  }
  
  function interval() {
    if(isPause === false) {
      percentTime += 1 / (time+5);
      $bar.css({
        width: percentTime+"%"
      });
      if(percentTime >= 100)
        {
          $slick.slick('slickNext');
          startProgressbar();
        }
    }
  }
  
  function resetProgressbar() {
    $bar.css({
     width: 0+'%' 
    });
    clearTimeout(tick);
  }

  $('.slider001').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    startProgressbar();
   });
  
  startProgressbar();
  
});


$(function(){
 $('.chirashi-icon').click(function() {
        var imgSrc = $(this).children().attr('src');
        $('.bigimg').children().attr('bigimg');
        $('.modal').fadeIn();
        $('body,html').css('overflow-y', 'hidden');
        $(window).scrollTop(300);
        return false
      });
     });
$(function(){
$('.close-btn').click(function() {
        $('.modal').fadeOut();
        $('body,html').css('overflow-y', 'visible');
        return false
      });
    });
