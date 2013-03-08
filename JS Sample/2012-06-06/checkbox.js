// JavaScript Document
var allCheck1 = 0;
var allCheck2 = 0;
var allCheck3 = 0;
function check1(chatBox1) {  
 	if($('#chatBox1').is(':checked')){ 
		//document.getElementById(chatBox).checked = "unchecked"; 
		$('#chatBox1').attr('checked', false);
		$('#chatBoxImg1').attr('src','../assets2/uncheck.png');
		$('#chatBoxImg1').css('margin-right','10px');
		$('#chatBoxImg1').css('margin-top','5px');
		allCheck1 = 0;
 	} else{
		document.getElementById(chatBox1).checked = "checked"; 
		$('#chatBoxImg1').attr('src','../assets2/check.png');
		$('#chatBoxImg1').css('margin-right','7px');
		$('#chatBoxImg1').css('margin-top','2px');
		allCheck1 = 1
	} 
	allCheck();
 }
 function check2(chatBox2) {  
 	if($('#chatBox2').is(':checked')){ 
		//document.getElementById(chatBox).checked = "unchecked"; 
		$('#chatBox2').attr('checked', false);
		$('#chatBoxImg2').attr('src','../assets2/uncheck.png');
		$('#chatBoxImg2').css('margin-right','10px');
		$('#chatBoxImg2').css('margin-top','5px');
		allCheck2 = 0;
 	} else{
		document.getElementById(chatBox2).checked = "checked"; 
		$('#chatBoxImg2').attr('src','../assets2/check.png');
		$('#chatBoxImg2').css('margin-right','7px');
		$('#chatBoxImg2').css('margin-top','2px');
		allCheck2=1;
	} 
	allCheck();
 }
 function check3(chatBox3) {  
 	if($('#chatBox3').is(':checked')){ 
		//document.getElementById(chatBox).checked = "unchecked"; 
		$('#chatBox3').attr('checked', false);
		$('#chatBoxImg3').attr('src','../assets2/uncheck.png');
		$('#chatBoxImg3').css('margin-right','10px');
		$('#chatBoxImg3').css('margin-top','5px');
		allCheck3=0;
 	} else{
		document.getElementById(chatBox3).checked = "checked"; 
		$('#chatBoxImg3').attr('src','../assets2/check.png');
		$('#chatBoxImg3').css('margin-right','7px');
		$('#chatBoxImg3').css('margin-top','2px');
		allCheck3=1;
	} 
	allCheck();
 }
 function allCheck(){
		if  ( (allCheck1 == 1) && (allCheck2 == 1)&& (allCheck3 == 1) ){
			$('#chatBoxImg4').attr('src','../assets2/uncheck.png');
			$('input[name=next]').removeAttr('disabled');// enable form submit
			$('#next').css('background-position','0 0');
		}else{
			$('#chatBoxImg4').attr('src','../assets2/uncheck-disable.png');
			$('input[name=next]').attr('disabled');
			$('#next').css('background-position','0 -107px');	
		}
 }
 
function check4(chatBox4) {
	if  ( (allCheck1 == 1) && (allCheck2 == 1)&& (allCheck3 == 1) ){
		if($('#chatBox4').is(':checked')){ 
			//document.getElementById(chatBox).checked = "unchecked"; 
			$('#chatBox4').attr('checked', false);
			$('#chatBoxImg4').attr('src','../assets2/uncheck.png');
			$('#chatBoxImg4').css('margin-right','10px');
			$('#chatBoxImg4').css('margin-top','5px');
		} else{
			document.getElementById(chatBox4).checked = "checked"; 
			$('#chatBoxImg4').attr('src','../assets2/check.png');
			$('#chatBoxImg4').css('margin-right','7px');
			$('#chatBoxImg4').css('margin-top','2px');
		}
	}else{
		$('#chatBox4').attr('checked', false);
		$('#chatBoxImg4').attr('src','../assets2/uncheck-disable.png'); 
	}
 }
$(document).ready(function() {
$('#chatBox1').attr('checked', false);
$('#chatBox2').attr('checked', false);
$('#chatBox3').attr('checked', false);
$('#chatBox4').attr('checked', false);
	$("img[class='threeCheckBox']").live("click", function(){
		if  ( (allCheck1 == 1) && (allCheck2 == 1)&& (allCheck3 == 1) ){
			
			$('#next').mouseover(function() {
					$('#next').css('background-position','0 -72px');
				}).mouseout(function(){
					$('#next').css('background-position','0 0');
			});
		}else{
				$('#next').mouseover(function() {
					$('#next').css('background-position','0 -107px');
				}).mouseout(function(){
					$('#next').css('background-position','0 -107px');
				});
		}
		
	});
});