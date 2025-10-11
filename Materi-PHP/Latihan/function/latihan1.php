<?php 

    // built in function
    $str = 'belajar bahasa pemrOGRaman php';

    $str = strtoupper($str);
    echo '<br>' . $str;

    $str = strtolower($str);
    echo '<br>' . $str;

    $str = ucfirst($str);
    echo '<br>' . $str;

    $str = ucwords($str);
    echo '<br>' . $str;

    echo '<br><br><br>';

    $fruits = ['pepaya', 'apel', 'mangga'];

    // mengurutkan array secara ascending (A - Z)
    sort($fruits);
    foreach ($fruits as $fruit) {
        echo $fruit . '<br>';
    }

    echo '<hr>';

    // mengurutkan array secara descending (Z - A)
    arsort($fruits);
    foreach ($fruits as $fruit) {
        echo $fruit . '<br>';
    }

?>