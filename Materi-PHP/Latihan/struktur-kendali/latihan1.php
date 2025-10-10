<?php 

    // variable
    $nama = 'ihsan';
    $totalBelanja = 9000;
    $keterangan = '';

    // if else
    if ($totalBelanja > 100000) {
        $keterangan = "selamat $nama mendapatkan hadiah";
        // ini kalo pake concat
        // $keterangan = 'selamat ' . $nama . 'mendapatkan hadiah';
    } else {
        $keterangan = "terima kasih $nama, sudah berbelanja di toko kami";
    }

    echo "nama pelanggan: $nama";
    echo "<br/> total belanja: Rp. $totalBelanja";
    echo "<br/> keterangan: $keterangan";
?>