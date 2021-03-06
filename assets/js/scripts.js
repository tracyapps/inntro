/**
 * adding "smaller" class for the top fixed nav
 */


jQuery(document).ready( function($) {

	$(window).scroll(function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 20) {
			$('header.site-header').addClass('smaller');
		} else {
			$('header.site-header').removeClass('smaller');
		}
	});


	var stickyNavTop = $('.main-navigation').offset().top;

	var stickyNav = function(){
		var scrollTop = $(window).scrollTop();

		if (scrollTop > stickyNavTop) {
			$('.main-navigation-sticky').addClass('show');
		} else {
			$('.main-navigation-sticky').removeClass('show');
		}
	};

	stickyNav();

	$(window).scroll(function() {
		stickyNav();
	});

});

jQuery(document).ready( function($) {

	$('.frm_form_fields .frm_form_field input').focusout(function(){

		var text_val = $(this).val();

		if(text_val === "") {

			$(this).removeClass('has-value');

		} else {

			$(this).addClass('has-value');

		}

	});

});
/**
 * scripts for the simple mobile menu
 */

jQuery(document).ready( function($) {
	$('#toggle').click( function() {
		$("#menu-main-navigation").toggleClass("open");
	});
});
jQuery(document).ready( function($) {

	//pullquote
	$('span.pullquote.right').each(function(index) {
		var $parentParagraph = $(this).parent('p');
		$parentParagraph.css('position', 'relative');
		$(this).clone()
			.addClass('pulled-right')
			.prependTo($parentParagraph);
	});
	$('span.pullquote.left').each(function(index) {
		var $parentParagraph = $(this).parent('p');
		$parentParagraph.css('position', 'relative');
		$(this).clone()
			.addClass('pulled-left')
			.prependTo($parentParagraph);
	});
	
});
/**
 * jquery to smooth scroll down the homepage from hero video section.
 */

jQuery(document).ready( function($) {

	$(function() {
		$('a[href*=#]').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top-50
					}, 1000);
					return false;
				}
			}
		});
	});
});
/**
 * Created by tapps on 5/31/17.
 */

jQuery(document).ready( function($) {

	$('.rotating').sss({
		slideShow : true, // Set to false to prevent SSS from automatically animating.
		startOn : 0, // Slide to display first. Uses array notation (0 = first slide).
		transition : 400, // Length (in milliseconds) of the fade transition.
		speed : 8500, // Slideshow speed in milliseconds.
		showNav : false // Set to false to hide navigation arrows.
	});

});
/** Super Simple Slider by @intllgnt **/

;(function($, window, document, undefined ) {

$.fn.sss = function(options) {

// Options

	var settings = $.extend({
	slideShow : true,
	startOn : 0,
	speed : 3500,
	transition : 400,
	arrows : true
	}, options);

	return this.each(function() {

// Variables

	var
	wrapper = $(this),
	slides = wrapper.children().wrapAll('<div class="sss"/>').addClass('ssslide'),
	slider = wrapper.find('.sss'),
	slide_count = slides.length,
	transition = settings.transition,
	starting_slide = settings.startOn,
	target = starting_slide > slide_count - 1 ? 0 : starting_slide,
	animating = false,
	clicked,
	timer,
	key,
	prev,
	next,

// Reset Slideshow

	reset_timer = settings.slideShow ? function() {
	clearTimeout(timer);
	timer = setTimeout(next_slide, settings.speed);
	} : $.noop;

// Animate Slider

	function get_height(target) {
	return ((slides.eq(target).height() / slider.width()) * 100) + '%';
	}

	function animate_slide(target) {
	if (!animating) {
	animating = true;
	var target_slide = slides.eq(target);

	target_slide.fadeIn(transition);
	slides.not(target_slide).fadeOut(transition);

	slider.animate({paddingBottom: get_height(target)}, transition,  function() {
	animating = false;
	});

	reset_timer();

	}}

// Next Slide

	function next_slide() {
	target = target === slide_count - 1 ? 0 : target + 1;
	animate_slide(target);
	}

// Prev Slide

	function prev_slide() {
	target = target === 0 ? slide_count - 1 : target - 1;
	animate_slide(target);
	}

	if (settings.arrows) {
	slider.append('<div class="sssprev"/>', '<div class="sssnext"/>');
	}

	next = slider.find('.sssnext'),
	prev = slider.find('.sssprev');

	$(window).load(function() {

	slider.css({paddingBottom: get_height(target)}).click(function(e) {
	clicked = $(e.target);
	if (clicked.is(next)) { next_slide(); }
	else if (clicked.is(prev)) { prev_slide(); }
	});

	animate_slide(target);

	$(document).keydown(function(e) {
	key = e.keyCode;
	if (key === 39) { next_slide(); }
	else if (key === 37) { prev_slide(); }
	});

	});
// End

});

};
})(jQuery, window, document);