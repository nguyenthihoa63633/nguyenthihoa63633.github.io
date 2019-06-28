$(document).ready(function(){
	$(window).scroll(function(){
		if ($(window).scrollTop() >= 300) {
			$('nav').addClass('fixed-header');
		}
		else {
			$('nav').removeClass('fixed-header');
		}
	});	
	
	$(".go-up").click(function(){
		$("body, html").animate({scrollTop:0}, 800);
	});

	$("nav ul li a ").click(function(){
		$(" nav ul li a").removeClass('active');
		$(this).addClass('active');
	});
	$(".menu ul li a ").click(function(){
		$(".menu ul li a").removeClass('active-menu');
		$(this).addClass('active-menu');
	});
		// khoi tao hieu ung wow
	new WOW().init();
});