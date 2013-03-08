<?php
function getOS($userAgent) {
// Create list of operating systems with operating system name as array key 
$osPC = array (
'Windows 3.11' => 'Win16',
'Windows 95' => '(Windows 95)|(Win95)|(Windows_95)', // Use regular expressions as value to identify operating system
'Windows 98' => '(Windows 98)|(Win98)',
'Windows 2000' => '(Windows NT 5.0)|(Windows 2000)',
'Windows XP' => '(Windows NT 5.1)|(Windows XP)',
'Windows 2003' => '(Windows NT 5.2)',
'Windows Vista' => '(Windows NT 6.0)|(Windows Vista)',
'Windows 7' => '(Windows NT 6.1)|(Windows 7)',
'Windows NT 4.0' => '(Windows NT 4.0)|(WinNT4.0)|(WinNT)|(Windows NT)',
'Windows ME' => 'Windows ME',
);
$osMAC = array( 
//'Safari' => '(Safari)',
'Macintosh'=>'(Mac_PowerPC)|(Macintosh)',
);
$osOther = array(
'iPad' => '(iPad)|(iPad2)',
'iPhone' => '(iPhone)',
'Linux'=>'(Linux)|(X11)',
'Open BSD'=>'OpenBSD',
'Sun OS'=>'SunOS',
'QNX'=>'QNX',
'BeOS'=>'BeOS',
'OS/2'=>'OS/2',
'Search Bot'=>'(nuhk)|(Googlebot)|(Yammybot)|(Openbot)|(Slurp/cat)|(msnbot)|(ia_archiver)'
);
//$GLOBALS['my_var'];
$osPCNeeded = false;
$osMACNeeded = false;
$osOtherNeeded = false;

foreach($osPC as $os=>$pattern){ // Loop through array
if(eregi($pattern, $userAgent)) { // Check if a value in array matches current user agent.
$osPCNeeded = true;
$osMACNeeded = false;
$osOtherNeeded = false;
//return $os; // Operating system was matched so return $oses key 
return array( $os, 'PC');

}
}
foreach($osMAC as $os=>$pattern){
if(eregi($pattern, $userAgent)) {
$osPCNeeded = false;
$osMACNeeded = true;
$osOtherNeeded = false;
//return $os;
return array( $os, 'MAC');

}
}
foreach($osOther as $os=>$pattern){
if(eregi($pattern, $userAgent)) {
$osPCNeeded = false;
$osMACNeeded = false;
$osOtherNeeded = true;
//return $os;
return array( $os, 'Other');

}
}

return array('Unknown','Unknown'); // Cannot find operating system so return Unknown
}

list($userAgent, $os) = getOS($_SERVER['HTTP_USER_AGENT']);

?>