const _circle = $('.js-circle');
$(window).on('resize load scroll', function() {
    let _h = _circle.offset().top;
    let _wh2 = $(window).innerHeight() * 0.5;
    if (window.pageYOffset + _wh2 >= _h) {
        _circle.addClass('active');
    }
});