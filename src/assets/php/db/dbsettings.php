<?php
function  createConnection($DBNAME){

  if($_SERVER['SERVER_NAME'] == "localhost" ){
        $hostname = "127.0.0.1";
        $username = "root";
        $password = "";
        $databasename = $DBNAME;
        $connection = mysqli_connect($hostname,$username,$password,$databasename);
     if($connection){
        return $connection;
     }
     else {
         return "error  connection failed";
     }
    }
    else {
      if($DBNAME == "websitequeries"){
        $hostname = "localhost";
        $username = "u132376213_websitequeries";
        $password = "vtechnosoft@123A";
        $databasename = "u132376213_websitequeries";
        $connection = mysqli_connect($hostname,$username,$password,$databasename);
        return $connection;
      }

    }

  }
    

?>