<?php 

    class Lingkaran {
        private $jarijari;
        const PHI = 3.14; //pake const karena nilai phi itu tetap, ga boleh berubah

        // constructor
        function __construct($r)
        {
            $this->jarijari = $r;
        }

        // cara untuk akses const
        function getLuas() {
            return self::PHI * $this->jarijari * $this->jarijari;
        }

        function getKeliling() {
            return 2 * self::PHI * $this->jarijari;
        }
    }

    // untuk akses konstanta phi di luar class
    echo 'nilai phi = ' . Lingkaran::PHI;
    $lingkaran1 = new Lingkaran(10);
    $lingkaran2 = new Lingkaran(4);

    echo '<br>Luas lingkaran 1 adalah ' . $lingkaran1->getLuas();
    echo '<br>Luas lingkaran 2 adalah ' . $lingkaran2->getLuas();

    echo '<br><br>';

    echo '<br>keliling lingkaran 1 adalah ' . $lingkaran1->getKeliling();
    echo '<br>keliling lingkaran 2 adalah ' . $lingkaran2->getKeliling();
?>