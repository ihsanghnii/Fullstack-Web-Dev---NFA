<?php 

    $nama = "ihsan";
    $nilai = 87;

    // ifelse multi kondisi
    // nilai > 85 = A
    // nilai > 75 = B

    // aslinya
    // if ($nilai >= 85 && $nilai <= 100) {
    //     $grade = "A";
    // } else if ($nilai >= 75 && $nilai < 85){
    //     $grade = "B";
    // } else if ($nilai >= 60 && $nilai < 75){
    //     $grade = "C";
    // } else if ($nilai >= 30 && $nilai < 60){
    //     $grade = "D";
    // } else if ($nilai >= 0 && $nilai < 30){
    //     $grade = "E";
    // } else {
    //     $grade = "";
    // }

    // yang singkat
    if ($nilai >= 85 && $nilai <= 100) $grade = "A";
    else if ($nilai >= 75 && $nilai < 85) $grade = "B";
    else if ($nilai >= 60 && $nilai < 75) $grade = "C";
    else if ($nilai >= 30 && $nilai < 60) $grade = "D";
    else if ($nilai >= 0 && $nilai < 30) $grade = "E";
    else $grade = "tidak valid";

    // A - memuaskan
    // B - Bagus
    // C - Cukup
    switch ($grade) {
        case 'A':
            $predikat = 'memuaskan';
            break;
        case 'B':
            $predikat = 'bagus';
            break;
        case 'C':
            $predikat = 'cukup';
            break;
        case 'D':
            $predikat = 'Kurang';
            break;
        case 'E':
            $predikat = 'Buruk';
            break;
        default:
            $predikat = 'tidak valid';
    }

    echo "nama siswa: $nama";
    echo "<br/> nilai: $nilai";
    echo "<br/> grade: $grade";
    echo "<br/> predikat: $predikat";

?>