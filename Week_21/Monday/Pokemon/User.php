<?php

class Users {

    public $first_name;

    private $last_name;

    private $email;

    private static $created = 0;

    public function __construct ($email, $first, $last = "") {
        $this->first_name = $first;
        $this->last_name = $last;
        $this->email = $email;

        self::$created +=1;
    }

    public function fullname() {
        return $this->firstname . " " . $this->last_name;
    }

    public function setImageUrl($url) {
        $this->imageUrl = $url;
    }

    public static function getCreated() {
        return self::$created;
    }
}