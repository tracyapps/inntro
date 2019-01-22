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
						scrollTop: target.offset().top-150
					}, 1000);
					return false;
				}
			}
		});
	});
});