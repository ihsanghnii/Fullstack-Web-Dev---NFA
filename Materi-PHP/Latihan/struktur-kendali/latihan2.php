<?php 

    $nama = 'ihsan';
    $nilai = 100;

    // jika $nilai >= 60 = lulus
    // jika $nilai < 60 = tidak lulus
    // ini ternary, setelah tanda tanya itu kondisi
    $keterangan = ($nilai >= 60) ? 'lulus' : 'tidak lulus';

    echo "nama siswa: $nama";
    echo "<br/>nilai: $nilai";
    echo "<br/> keterangan: $keterangan"

?>