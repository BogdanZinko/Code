<?php
get_header('second');//includes get_head() function
$stylesheet_name = 'style.css'; //name of the css file
//URL to css
$path = get_stylesheet_directory_uri() .'/'.$stylesheet_name;
// Include the CSS in WP way
wp_register_style( $stylesheet_name, $path);
wp_print_styles( $stylesheet_name);
?>