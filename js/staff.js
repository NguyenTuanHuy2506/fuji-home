$('.staff-img').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    arrows: false
  });

  function setflex(ele) {
    $.each(ele, function(){
        let compareValue = ele.width() - ($(this).children().first().outerWidth())
        if(compareValue < parseInt($(this).children().last().css('min-width'))) {
            $(this).children().last().css('width', '100%')
            console.log($(this).children().last().get(0));
        }else {
            $(this).children().last().attr('style', '');
        }
    });
  }

  function setflexOption2(ele) {
    $.each(ele, function(){
        let compareValue = ele.width() / parseInt($(this).children().first().css('min-width'));
        if( Math.floor(compareValue) != 0) {
            if(Math.floor(compareValue) < $(this).children().length) {
              $(this).children().css('max-width', 100/Math.floor(compareValue) +'%')
            } else {
              $(this).children().css('max-width', 100/$(this).children().length +'%')
            }
        }else {
            $(this).children().css('max-width', '100%');
        }
    });
  }
  setflexOption2($('.SortField-lists'));

  function setflexOption1(ele) {
    if(ele.length > 1) {
      $.each(ele, function() {
        let _parrent = $(this);
        $.each($(this), function(){
          let compareValue = (_parrent.width() - 30) / parseInt($(this).children().first().css('min-width'));
          if( Math.floor(compareValue) > 1) {
            window.innerWidth < 1024?  $(this).children().css('max-width', 'calc(50% - 15px)'): $(this).children().attr('style', '');
          }else {
            window.innerWidth < 1024?  $(this).children().css('max-width', '100%') : $(this).children().attr('style', '');
          }
        })
      })
    }
  }
  setflexOption1($('.staff-content, .staff-extra-img'));

  function setflexOption3(ele) {
    $.each(ele, function(){
        let compareValue = (ele.width() - 40) / parseInt($(this).children().first().css('min-width'));
        if( Math.floor(compareValue) > 1) {
          if( Math.floor(compareValue) > 3) {
            window.innerWidth < 1024?  $(this).children().css('max-width', 'calc('+ 100/3 + '%' + ' - 15px)') : $(this).children().attr('style', '');
          } else {
            window.innerWidth < 1024? $(this).children().css('max-width', 'calc('+ 100/Math.floor(compareValue) + '%' + ' - 10px)'): $(this).children().attr('style', '');
          }
        }else {
            window.innerWidth < 1024?  $(this).children().css('max-width', '100%') : $(this).children().attr('style', '');
        }
    });
  }
  setflexOption3($('.WhoseField-lists'));

window.addEventListener('resize', function() {
    setflexOption2($('.SortField-lists'));
    setflexOption1($('.staff-content, .staff-extra-img'));
    setflexOption3($('.WhoseField-lists'));
})