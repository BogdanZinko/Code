<?php 
if( function_exists( 'add_theme_support') ) {
    add_theme_support( 'post-thumbnails'); } //Adds thumbnails compatibility to the theme
set_post_thumbnail_size( 200, 170, true ); // Sets the Post Main Thumbnails
add_image_size( 'recent-thumbnails', 55, 55, true ); // Sets Recent Posts Thumbnails
functionrecentPosts() {
    $rPosts= newWP_Query();
    $rPosts->query('showposts=3');
        while($rPosts->have_posts()) : $rPosts->the_post(); ?>
            <li>
                <a href="<?php the_permalink();?>"><?php the_post_thumbnail('recent-thumbnails'); ?></a>
                <h2><a href="<?php the_permalink(); ?>"><?php the_title();?></a></h2>
            </li>
        <?php endwhile;
    wp_reset_query();
}
?>