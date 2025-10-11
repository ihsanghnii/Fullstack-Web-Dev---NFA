<?php 

    // user-defined function | void (tidak mengembalikan nilai)
    // tanpa parameter
    function salam() {
        echo '<br>selamat pagi teman-teman';
    }

    // menggunakan parameter
    function sapa($kawan) {
        echo '<br>selamat pagi ' . $kawan;
    }

    function kabar($kawan) {
        echo '<br>hai apa kabar ' . $kawan;
    }

    // ini ada nilai default
    // function kabar($kawan='budi') {
    //     echo '<br>hai apa kabar ' . $kawan;
    // }

    salam();

    $nama = 'deden';
    sapa($nama);

    kabar($nama);

?>