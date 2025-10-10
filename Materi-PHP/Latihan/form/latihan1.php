<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Method GET</title>
</head>
<body>
    <form method="get">
        <label>nama lengkap</label><br>
        <input type="text" name="fullname"><br>

        <label for="alamat">alamat rumah</label><br>
        <textarea name="alamat"></textarea><br>

        <input type="submit" name="proses" value="kirim">
    </form>

    <?php 
        // $_GET itu build in fungsi dari php
        $fname = $_GET['fullname']
    ?>
</body>
</html>