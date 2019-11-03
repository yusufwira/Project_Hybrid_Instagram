<?php 

header("Access-Control-Allow-Origin: *");
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "instantgram";

$idposting = $_GET['idpost'];
$user = $_GET['user'];
$isi = $_GET['isi'];

$tes = 0;

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
$sql1 = "INSERT INTO balasan_komen (idposting, username, isi_komen)
		VALUES ($idposting, '$user','$isi')";

		if ($conn->query($sql1) === TRUE) {
		    //echo "New record created successfully";
		    $data['user']=$user;
		    $data['isi']=$isi;
		    echo json_encode($data);
		}
		else {
    		echo "Error  record: " . $conn->error;
		}
$conn->close();