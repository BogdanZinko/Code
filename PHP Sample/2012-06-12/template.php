<?php $result = get_post_by_title('news'); // "news" being the special title
if (!empty($result)){
echo $result->post_content; 
}
?>