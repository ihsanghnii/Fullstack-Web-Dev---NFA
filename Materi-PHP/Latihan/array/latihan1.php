<?php 

    $fruits = ['Pepaya', 'apel', 'mangga'];

    echo '---cetak value dari array';
    foreach ($fruits as $fruit) {
        echo '<br>Nama buah: ' . $fruit;
    }

    echo '<br></br>';
    echo '---cetak key dari array';
    foreach ($fruits as $id => $fruit) {
        echo '<br>Key array buah: ' . $id;
    }

    echo '<br></br>';
    echo '---cetak key dan value dari array';
    foreach ($fruits as $id => $fruit) {
        echo '<br>Buah dengan id: ' . $id . 'adalah buath ' . $fruit;
    }

    // // buat ubah data
    // $fruits[0] = 'jeruk';
    // // buat hapus data
    // unset($fruits[2]);

    // // buat nambah data
    // $fruits[] = 'naga';
    
    // echo $fruits[3];

?>