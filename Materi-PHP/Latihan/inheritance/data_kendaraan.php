<?php 

    require_once 'class_kendaraan.php';

    $motor = new Motor('motor', 'bensin', 2);
    $submarine = new Submarine("kapal laut", "nuclear", 700);

    echo "info motor: <br>";
    $motor->getInfo();
    echo '<br>';

    echo "info kapal laut: <br>";
    $submarine->getInfo();

?>