$(function () {
	$('.slider').slick({
		dots: false,
		slidesToShow: 3,
		centerMode: true,
		variableWidth: true,
		prevArrow:'<div class="prev-arrow"></div>',
		nextArrow:'<div class="next-arrow"></div>'

	  }); 
    
	  
	  $('.slider-koukoku').slick({
		dots: false,
		slidesToShow: 3,
		centerMode: true,
		variableWidth: true,
		prevArrow:'<div class="prev-arrow"></div>',
		nextArrow:'<div class="next-arrow"></div>'

	  });    


});

$(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 200){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
            }
        });
    });
    
});

$(document).ready(function(){
  var time = 2;
  var $bar,
      $slick,
      isPause,
      tick,
      percentTime;
  
  $slick = $('.slider00');
  $slick.slick({
   	arrows: false,
        dots: true,
		speed: 300,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
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
      percentTime += 1 / (time+0.1);
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
  
  startProgressbar();
  
});