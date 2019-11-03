<?php
header('Access-Control-Allow-Origin: *'); 	
header('Access-Control-Allow-Headers: *');
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "instantgram";

$nama = $_GET['username'];
$pass= $_GET['pass'];
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT * FROM user WHERE username = '$nama'";
$result = $conn->query($sql);

while($row = $result->fetch_assoc()){	
	
	if($nama == $row['username'] && $pass == $row['password']){
		$data[]= $row;
		echo json_encode($data); 
	}
	// else{
	// 	$data[]= "Gagal";
	// 	echo json_encode($data);
	// }
}

	
?>