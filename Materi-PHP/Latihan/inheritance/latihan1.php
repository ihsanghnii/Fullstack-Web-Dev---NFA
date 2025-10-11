<?php 

    class Fruit {
        public $name; //bisa diakses di dalam class atau luar
        protected $color; //gabisa diakses di luar class, hanya bisa di dalam class dan kelas turunannya
        private $weight; //gabisa diakses di luar class
    }

    $mango = new Fruit();
    // -> buat akses propery yang ada di class
    echo $mango->name = 'mangga';
    echo $mango->color = 'orange'; //pas dijalanin error
    // echo $mango->weight = 1; //pas dijalanin error

?>