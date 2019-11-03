

<?php
header('Access-Control-Allow-Origin: *'); 	
header('Access-Control-Allow-Headers: *');
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "instantgram";

$idposting = $_GET['idpost'];
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT * FROM balasan_komen WHERE idposting = $idposting";
$result = $conn->query($sql);

while($row = $result->fetch_assoc()){	
	$data[]= $row;
	
}

echo json_encode($data);

	
?>