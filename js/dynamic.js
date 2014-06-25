function panorama() {
	$('.panorama > div > div').each(function() {
		$(this).draggable({
			axis: 'x',
			containment: [($(window).width()-$(this).find('img').attr('width')), 0, 0, 0]
		});
		$(this).css({'left': ($(window).width()-$(this).find('img').attr('width'))/2+'px'});
	});
}
$(document).ready(function() {
	$('.panorama > div').hide();
	panorama();
	var current = 1;
	$('.panorama > div:nth-of-type('+current+')').show();
	$('.panorama .next').bind('click', function() {
		$('.panorama > div.normal:nth-of-type('+current+')').stop(true,true).fadeOut(500);
		if ( current == $('.panorama > div').size() ) {
			$('.panorama > div:nth-of-type('+current+')').stop(true,true).fadeOut(500);
			current = 1;
		}
		if ( current !=  $('.panorama > div').size()-1 ) {
			current = current+1;
		}
		else {
			current = 1;
		}
		$('.panorama > div.normal:nth-of-type('+current+')').stop(true,true).fadeIn(500);
		return false;
	});
	$('.panorama .prev').bind('click', function() {
		$('.panorama > div.normal:nth-of-type('+current+')').stop(true,true).fadeOut(500);
		if ( current == $('.panorama > div').size() ) {
			$('.panorama > div:nth-of-type('+current+')').stop(true,true).fadeOut(500);
			current = $('.panorama > div').size()-1;
		}
		if ( current !=  1 ) {
			current = current-1;
		}
		else {
			current = $('.panorama > div').size()-1;
		}
		$('.panorama > div.normal:nth-of-type('+current+')').stop(true,true).fadeIn(500);
		return false;
	});
	$('.panorama span.special').bind('click', function() {
		if ( current != eval($('.panorama > div.special').index())+1 ) {
			$('.panorama > div:nth-of-type('+current+')').stop(true,true).fadeOut(500);
			current = eval($('.panorama > div.special').index())+1;
			$('.panorama > div:nth-of-type('+current+')').stop(true,true).fadeIn(500);
			console.log(current);
		}
		return false;
	});
	$('.map .rb > div > div img').hide();
	$('.map .lb .nav li a').click(function () {
		$('.map .rb > div > div #'+$(this).attr('href')).fadeIn(500).siblings().fadeOut(500);
		$(this).parent().addClass('active').siblings().removeClass('active');
		return false;
	});
	$('.map .lb .nav li:nth-child(3) a').click();
	$('.path .rb > div').hide();
	$('.path .nav li a').click(function () {
		$('.path .rb #'+$(this).attr('href')).fadeIn(500).siblings().fadeOut(500);
		$(this).parent().addClass('active').siblings().removeClass('active');
		return false;
	});
	$('.path .nav li:nth-child(1) a').click();
	$('.header .menu li a').click(function(){
		$('html, body').animate({
			scrollTop: $($.attr(this,'href')).offset().top-20
		}, 500);
		return false;
	});
});