<?php
include '../db/dbsettings.php';
$connection = createConnection("websitequeries");
$rp = json_decode(file_get_contents('php://input'), true);
$_POST = $rp;

if ($_SERVER['SERVER_NAME'] == "localhost"){
$name = "vignesh";
$subject = "Testing";
$query = "Test query";
$emailaddress = "test@gmail.com";
}
 if (isset($_POST["name"])) {
    $name = $_POST["name"];
    $subject = $_POST["subject"];
    $query = $_POST["query"];
    $emailaddress = $_POST["emailaddress"];
}
if($connection){
    $date = date("d/m/Y");
    $query1 = "INSERT INTO `websiteuserqueries` (`date`, `name`, `subject`, `query`, `emailaddress`, `statusofquery`, `reply`, `fromemailsendemail`) VALUES ('$date', '$name', '$subject', '$query', '$emailaddress', 'NOT_RESOLVED', '', '')";
    $execution1 = mysqli_query($connection,$query1);
    if($execution1){
        echo "success";
    }

}
else {
    
    echo "error in connection";
}

?>