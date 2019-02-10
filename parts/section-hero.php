<?php
/**
 * The template for displaying a hero section
 */

// Get the ID of the background image
$image  = get_sub_field( 'hero_image' );
?>

<div class="hero <?php echo esc_html( get_sub_field( 'hero_height' ) ) . ' ' . esc_html( get_sub_field( 'text_alignment' ) ); ?>">

	<div class="hero-image-container" data-image="<?php echo esc_attr( $image ); ?>" style="background-image: url('<?php echo esc_attr( $image ); ?>');">

	</div>
	<div class="hero-text-container">

		<?php the_sub_field( 'hero_text' ); ?>

		<?php if( get_sub_field( 'hero_button_label' ) ) { ?>

		<a class="button primary" href="<?php echo esc_url( get_sub_field( 'hero_button_link' ) ); ?>">
			<?php echo esc_html( get_sub_field( 'hero_button_label' ) ); ?>
		</a>

		<?php } else {} ?>

	</div>

</div>
