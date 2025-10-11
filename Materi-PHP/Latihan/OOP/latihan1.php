<?php 

    class Fruit {
        // property -  mirip dengan variabel
        public $name;
        public $color;

        // method
        function getName() {
            return $this->name; //cara akses property dalam class
        }
        
        function getColor() {
            return $this->color;
        }
    }

    // membuat objek
    $apel = new Fruit();
    $apel->name = 'Apple';
    $apel->color = 'Red';

    $banana = new Fruit();
    $banana->name = 'Banana';
    $banana->color = 'yellow';

    // untuk menampilkan
    echo $apel->getName();
    echo $apel->getColor();
    echo '<br><br>';
    echo $banana->getName();
    echo $banana->getColor();

?>