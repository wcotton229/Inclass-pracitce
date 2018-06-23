<?php

function println($string) {
    echo "$string\n";
}

function separate($separator = "=", $repetitions = 12) {
    println(str_repeat($separator, $repetitions));
}

function test_name($name) {
    if (strlen($name) > 12)
        return "It's a long name.";
    else 
        return "It's a short name.";
}

function test_sake($age) {
    if ($age > 21)
        return "Sake! Sake! Sake!";
    else if ($age === 21)
        return "Just slipped by! Sake! Sake! Sake!";
    else 
        return "No sake for me :(";
}

function introduce_student($first_name, $last_name) {
    $full_name = $first_name . " " . $last_name;

    println("My name is $full_name.");

    println(test_name($full_name));
}


function drinks_sake($age) {
    println("I'm $age years old.");

    println(test_sake($age));
}