<?php 
/* Register with hook 'wp_enqueue_scripts', which can be used for front end CSS and JavaScript */
add_action( 'wp_enqueue_scripts', 'prefix_add_my_stylesheet' );
/* Enqueue plugin style-file*/
function prefix_add_my_stylesheet() {
// Respects SSL, Style.css is relative to the current file
wp_register_style( 'plugin-name', plugins_url('style.css',dirname(dirname(__FILE__))) ); 
//dirname is used to go up one level in the directory
wp_enqueue_style( 'plugin-name' );
}
?>