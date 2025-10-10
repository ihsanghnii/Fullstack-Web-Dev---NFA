<?php

// array numerik
$buah = ["apel", "pisang", "jeruk"];

foreach ($buah as $item) {
    echo "$item <br>";
}

echo "<br><br>";

// array asosiatif
$hargaBuah = array(
    "apel" => 10000,
    "pisang" => 5000,
    "jeruk" => 7000
);

foreach ($hargaBuah as $namaBuah => $hargaBuah) {
    echo "harga $namaBuah adalah $hargaBuah<br>";
};