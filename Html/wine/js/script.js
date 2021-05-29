$(function(){
	'use strict';
	//Owl-coursel
	var $owl = $('.owl');
	$owl.each( function() {
		var $a = $(this);
		$a.owlCarousel({
			autoPlay:  JSON.parse($a.attr('data-autoplay')),
			singleItem: JSON.parse($a.attr('data-singleItem')),
			items : $a.attr('data-items'),
			itemsDesktop : [1199,$a.attr('data-itemsDesktop')],
			itemsDesktopSmall : [992,$a.attr('data-itemsDesktopSmall')],
			itemsTablet:  [797,$a.attr('data-itemsTablet')],
			itemsMobile :  [479,$a.attr('data-itemsMobile')],
			navigation : JSON.parse($a.attr('data-buttons')),
			pagination: JSON.parse($a.attr('data-pag')),
			navigationText: ["",""]
		});
	});
	//zoom image
	$('.image-zoom').magnificPopup({
		type:'image'
	});
	//Menu 
	$('.menu-btn').on('click',function(e){
		if($(this).hasClass('active'))
		{
			$('.menu-rs').animate({right: '-250px'},500);
		}
		else
		{
			$('.menu-rs').animate({right: '0px'},500);
		}
	});
	$('.r-mv').on('click',function(){
		$('.menu-rs').animate({right: '-250px'},500);
	});
	//Cart
	$('.cart .dropdown-menu').on('click',function(e) {
		e.stopPropagation();  
	});
	//Reloader
	$(window).load(function()
	{ 
		$('.preloader i').fadeOut();
		$('.preloader').delay(500).fadeOut('slow');
		$('body').delay(600).css({'overflow':'visible'});
	});
	//Search
	$('.search-box').removeClass('active');
	$('.icon-search').on('click',function(e) 
	{
		e.preventDefault();
		var $searchb = $('.search-box');
		if(!$searchb.hasClass('active'))
		{
			$searchb.addClass('active');
			$('.search-box input').val('');
			$searchb.fadeIn();
			$('.search-box input').focus();
			$(this).addClass('fa-remove');
			$(this).removeClass('fa-search');
		}
		else
		{
			$searchb.fadeOut();
			$searchb.removeClass('active');
			$(this).removeClass('fa-remove');
			$(this).addClass('fa-search');
			
		}
	});
	$('.search-box input').keypress(function(event){
	  if(event.keyCode == 13){
		$('.icon-search').click();
	  }
	});
	//Header resize
	window.addEventListener('scroll', function(e){
		var $header=$('header');
		var $tr=0;
		var distanceY = window.pageYOffset || document.documentElement.scrollTop,
			shrinkOn = $tr;
			var header = document.querySelector("header");
		if (distanceY > shrinkOn) {
			classie.add(header,"smaller");
		} else {
			if (classie.has(header,"smaller")) {
				classie.remove(header,"smaller");
			}
		}
	});
});