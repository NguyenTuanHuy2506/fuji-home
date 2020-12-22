// JavaScript Document

// system support page about open / close
$(function() {
	$('#system-low .slide').click(function(){
		$(this).next('.about').stop().slideToggle();
	});
});

// faq list open / close 
$(function(){
	$('#system-low .faq li dt').click(function(){
		$(this).next('dd').stop().slideToggle();
	});
});