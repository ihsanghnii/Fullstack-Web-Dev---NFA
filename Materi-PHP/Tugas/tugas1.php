<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Input Nilai</title>
    <style>
        body { 
            font-family: sans-serif;
            line-height: 1.6;
            padding: 20px; 
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        form { 
            margin-bottom: 20px;
            border: 1px solid #ccc;
            padding: 15px;
            border-radius: 5px; 
            display: flex;
            flex-direction: column;
            justify-content: center;
            min-width: 500px;
            border-radius: 8px;
        }

        input, textarea { 
            padding: 8px;
            margin-bottom: 10px; 
        }

        input[type="submit"] { 
            width: auto;
            cursor: pointer; 
            background-color: green;
            color: white;
        }

        input {
            border-radius: 4px;
        }

        .hasil { 
            border: 1px solid #007bff;
            padding: 15px;
            border-radius: 5px;
            background-color: #f0f8ff;
            min-width: 500px;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
    </style>
</head>
<body>
    <h2>Form Input Nilai</h2>
    <form method="post">
        <label>Nama Lengkap</label>
        <input type="text" name="nama">

        <label>Alamat Rumah</label>
        <textarea name="alamat"></textarea>
        
        <label>Nilai Ujian</label>
        <input type="number" name="nilai" min="0" max="100">

        <input type="submit" name="proses" value="submit">
    </form>

    <?php 
    
        if (isset($_POST['proses'])) {
            $namaLengkap = $_POST['nama'];
            $almt = $_POST['alamat'];
            $nilaiUjian = $_POST['nilai'];
            $submit = $_POST['proses'];

            if ($nilaiUjian >= 70 && $nilaiUjian <= 100) $ket = "Lulus";
            else if ($nilaiUjian < 70 && $nilaiUjian >= 0) $ket = "Tidak Lulus";
            else $ket = "Nilai tidak valid (harus antara 0 - 100)";

            echo "
                <div class='hasil'>
                    <h3>Hasil Input</h3>
                    <table border='1' cellpadding='6' cellspacing='3'>
                        <thead>
                            <tr>
                                <th>Nama Lengkap</th>
                                <th>Alamat Rumah</th>
                                <th>Nilai Ujian</th>
                                <th>Keterangan</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>$namaLengkap</td>
                                <td>$almt</td>
                                <td>$nilaiUjian</td>
                                <td>$ket</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ";
        }
    ?>
</body>
</html>