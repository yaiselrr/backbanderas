<?php


namespace App\Helper;


class Helper
{
    public static function quickRandom($length = 16)
    {
        $pool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        return substr(str_shuffle(str_repeat($pool, 5)), 0, $length);
    }

    public static function generateApikey($secretKey)
    {
        $salt = mt_rand();
        $signature = hash_hmac('sha256', $salt, $secretKey, true);
        $encodedSignature = base64_encode($signature);
        return $encodedSignature;
    }

    public static function generateRamdomNumber($length = 6)
    {
        return substr(str_shuffle("0123456789"), 0, $length);
    }

    public static function convert_to_webp($filepath, $ext = 'jpg', $quantity = 80)
    {
        $ext = pathinfo($filepath, PATHINFO_EXTENSION); // To get extension
        try {
            $imag = $ext == 'jpg' ? imagecreatefromjpeg($filepath) : imagecreatefrompng($filepath);
            $webp_file = str_replace($ext, ".webp", $filepath);
            $w = imagesx($imag);
            $h = imagesy($imag);
            $webp = imagecreatetruecolor($w, $h);
            imagecopy($webp, $imag, 0, 0, 0, 0, $w, $h);
            imagewebp($webp, $webp_file, $quantity);
            imagedestroy($imag);
            imagedestroy($webp);
        } catch (\Exception $e) {
            throw $e;
        }
        return $webp_file;
    }

    public static function change_resolution($filepath, $resolutionX, $resolutionY, $ext = 'jpg')
    {
        $name = pathinfo($filepath, PATHINFO_FILENAME);
        try {
            $t = $ext == 'jpg' ? imagecreatefromjpeg($filepath) : imagecreatefrompng($filepath);
            $s = imagecreatetruecolor($resolutionX, $resolutionY);
            $x = imagesx($t);
            $y = imagesy($t);
            imagecopyresampled($s, $t, 0, 0, 0, 0, $resolutionX, $resolutionY, $x, $y);
            $new_name = str_replace($name, $name . '_tiny', $filepath);
            $result = imagejpeg($s, $new_name);
        } catch (\Exception $e) {
            throw $e;
        }
        return $result;
    }

}