<?php 

    $fruits = [
        ['name' => 'pepaya', 'color' => 'orange', 'price' => 5000],
        ['name' => 'apel', 'color' => 'red', 'price' => 3000],
        ['name' => 'mangga', 'color' => 'orange', 'price' => 6000],
    ];

    echo $fruits[0]['name'] . ': warna: ' . $fruits[0]['color'] . ', Harga: ' . $fruits[0]['price'] . '<br>';
    echo $fruits[1]['name'] . ': warna: ' . $fruits[1]['color'] . ', Harga: ' . $fruits[1]['price'] . '<br>';
    echo $fruits[2]['name'] . ': warna: ' . $fruits[2]['color'] . ', Harga: ' . $fruits[2]['price'] . '<br>';

    echo '<br></br>';

    foreach ($fruits as $fruit) {
        echo $fruit['name'] . 'Warna: ' . $fruit['color'] . 'Harga: ' . $fruit['price'] . '<br>';
    }
?>