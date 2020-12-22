//ページ遷移時にフェードする
$(window).on('load', function(){
    $('#wrapper').removeClass('fadeout');
    setTimeout(function(){
        $('#wrapper').addClass('fadeend');
    }, 400);
});

$(function () {

	//ページ遷移時のアニメーション
    history.replaceState(null, document.getElementsByTagName('title')[0].innerHTML, null);
    window.addEventListener('popstate', function(e) {
        $('#wrapper').removeClass('fadeout');
        setTimeout(function(){
            $('#wrapper').addClass('fadeend');
        }, 400);
    });

    $(function() {
        // ハッシュリンク(#)と別ウィンドウでページを開く場合はスルー
        $('a:not([href^="#"]):not([target])').on('click', function(e){
        e.preventDefault(); // ナビゲートをキャンセル
        url = $(this).attr('href'); // 遷移先のURLを取得
        if (url !== '') {
            $('#wrapper').addClass('fadeout');  // bodyに class="fadeout"を挿入
            if($('header').hasClass('open')){
                $('header').removeClass('open');
                $('header').addClass('close');
            }
            setTimeout(function(){
            window.location = url;  // 0.8秒後に取得したURLに遷移
            }, 200);
        }
        return false;
        });

        // スムーススクロール
        $('a[href^="#"]').click(function(){
            if(!$(this).hasClass('more-btn')){
                var speed = 500;
                var href= $(this).attr("href");
                var target = $(href == "#" || href == "" ? 'html' : href);
                var position = target.offset().top;
                $("html, body").animate({scrollTop:position}, speed);
                $('header').removeClass('open');
                $('header .menu-icon-text').html('MENU');
            }
            return false;
        });
    });


	function getScrollTop() {
		return document.documentElement.scrollTop
			|| document.body.scrollTop
			|| window.scrollY
			|| window.pageYOffset;
	}
	window.addEventListener('scroll', function () {
		if (getScrollTop() > 0) {
			$('header').addClass('active');
		} else {
			$('header').removeClass('active');
		}
	});

	$('.header-hamburger').on('click', function () {
		if ($('header').is('.expand')) {
			$('header').removeClass('expand');
			$('.header-hamburger > p').text('MENU');
		} else {
			$('header').addClass('expand');
			$('.header-hamburger>p').text('CLOSE');
		}
	});

    $('.header-menu li a').on('click', function(){
        $('header').removeClass('expand');
        $('.header-hamburger > p').text('MENU');
    });
});

$("#backTop").click(function (event) {
	$("html,body").animate({
		scrollTop: 0,
	},
		1000,
		"swing"
	);
	return false;
});

$('.js-aco').on('click', function(){
    var ww = $(window).innerWidth();
    if(ww < 1024){
        var target = $(this).parents('.fn-wrapper');
        if($(target).hasClass('open')){
            $(target).removeClass('open');
            $(target).next('.footer-nav-child-wrapper').slideUp();
        }else{
            $(target).addClass('open');
            $(target).next('.footer-nav-child-wrapper').slideDown();
        }
    }
});

$(window).on('load resize scroll', function(){
    var ww = $(window).innerWidth();
    if(ww >= 1024){
        $('.fn-wrapper').removeClass('open');
        $('.footer-nav-child-wrapper').attr('style', '');
        
        var wrapper2cH = $('.wrapper2c').innerHeight();
        var hH = $('header').innerHeight();
        var wST = $(window).scrollTop();
        
        if(wST >= (wrapper2cH - hH)){
            $('header').addClass('end');
        }else{
            $('header').removeClass('end');
        }
    }
});

$(function(){
    $(window).on('load resize scroll', function (){
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