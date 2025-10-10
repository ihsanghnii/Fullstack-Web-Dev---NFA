<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>method post</title>
</head>
<body>
    <form action="" method="POST">
        <label>username</label><br>
        <input name="uname" type="text"><br><br>

        <label>password</label><br>
        <input type="password" name="pwd"><br><br>

        <input type="submit" name="proses" value="Login">
    </form>

    <?php 
    
        if (isset($_POST['proses'])) {
            $username = $_POST['uname'];
            $password = $_POST['pwd'];
            $login = $_POST['proses'];

            echo "username kamu adalah $username <br>password kamu adalah $password";
        }
    
    ?>
</body>
</html>