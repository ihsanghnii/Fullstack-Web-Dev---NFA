<?php 

    // satu baris
    $fruit = ['name' => 'apel', 'color' => 'red', 'price' => 5000];
    
    // multi baris
    $car = [
        'brand' => 'ford',
        'model' => 'mustang',
        'year' => 1964,
    ];

    foreach ($fruit as $a => $b) {
        echo "$a: $b <br>";
    }

    echo '<br></br>';

    foreach ($car as $x => $y) {
        echo "$x: $y <br>";
    }
?>