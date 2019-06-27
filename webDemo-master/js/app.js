$(document).ready(function(){
	$(window).scroll(function(){
		if ($(window).scrollTop() >= 300) {
			$('nav').addClass('fixed-header');
		}
		else {
			$('nav').removeClass('fixed-header');
		}
	});	
	// go up scroll Top
	$(".go-up").click(function(){
		$("body, html").animate({scrollTop:0}, 800);
	});

	$("nav ul li a ").click(function(){
		$(" nav ul li a").removeClass('active');
		$(this).addClass('active');
	});
	// $("svg.svg-inline--fa.fa-search.fa-w-16").click(function(){
	// 		// alert("xin chao");
	// 		$("input").css('display','block');
	// });
});