<?php 
    // parent class
    class Hewan {
        protected $nama;

        public function __construct($nama)
        {
            $this->nama = $nama; //nama itu diambil dari yg protected, kalo $nama diambil dri param
        }

        public function getNama() {
            return $this->nama;
        }
    }

    // child
    class Kucing extends Hewan {
        public function suara() {
            return 'Meow';
        }
    }

    $kucing = new Kucing('tom');
    echo '<br>' . $kucing->getNama(); //output: tom
    echo '<br>' . $kucing->suara(); //output: meow

?>