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