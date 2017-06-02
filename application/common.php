<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006-2016 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: 流年 <liu21st@gmail.com>
// +----------------------------------------------------------------------

/**
 * 获取客户端ip
 * @method get_ip
 * @return [type] [description]
 */
function get_ip() {
  if (getenv ( "HTTP_CLIENT_IP" ) && strcasecmp ( getenv ( "HTTP_CLIENT_IP" ), "0.0.0.0" )) {
    $ip = getenv ( "HTTP_CLIENT_IP" );
  } elseif (getenv ( "HTTP_X_FORWARDED_FOR" ) && strcasecmp ( getenv ( "HTTP_X_FORWARDED_FOR" ), "0.0.0.0" )) {
     $ip = getenv ( "HTTP_X_FORWARDED_FOR" );
  } elseif (getenv ( "REMOTE_ADDR" ) && strcasecmp ( getenv ( "REMOTE_ADDR" ), "0.0.0.0" )) {
     $ip = getenv ( "REMOTE_ADDR" );
  } elseif (isset ( $_SERVER ['REMOTE_ADDR'] ) && $_SERVER ['REMOTE_ADDR'] && strcasecmp ( $_SERVER ['REMOTE_ADDR'], "0.0.0.0" )) {
     $ip = $_SERVER ['REMOTE_ADDR'];
  } else {
     $ip = "0.0.0.0";
  }
  return ($ip);
}
/**
 * 获取随机数
 * @method randomChar
 * @param  [type]     $length [description]
 * @return [type]             [description]
 */
function random_char($length) {
   $str = "";
   $pattern = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLOMNOPQRSTUVWXYZ";
   for($i=0; $i<$length;$i++) {
     $str .= $pattern{mt_rand(0,61)};
   }
   return $str;
}
/**
 * 字符串截取，区分中英文
 * @method sub_str
 * @param  [type]  $str    [description]
 * @param  integer $len [字符串长度，以汉字作为计量单位]
 * @param  boolean $append [description]
 * @return [type]          [description]
 */
 function sub_str($string, $len, $cnCharWidth = 2) {

     $len = $len * $cnCharWidth;
     $suffix = "...";
     $newStr = "";

     for ($i = 0, $j = 0; $i < $len; $i++, $j++) {

         if (!isset($string[$j])) {
             $suffix = "";
             break;
         }

         $start = $j;
         while ($j < ($start +3) && !(ord($string[$j]) < 0x80)) {
             $j++;
         }
         if ($start == $j) {
             $charLen = 1;
         }
         else {
             $i = $i + 1;
             $j--;
             $charLen = 3;
         }

         $newStr .= substr($string, $start, $charLen);
     }

     return $newStr . $suffix;
 }
