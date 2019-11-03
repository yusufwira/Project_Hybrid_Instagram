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

 $sql = "SELECT COUNT(*) as suka FROM posting p INNER JOIN jempol_like j on p.idposting=j.idposting WHERE p.idposting =".$idposting;
$result = $conn->query($sql);

if ($result->num_rows > 0) {
	$row = $result->fetch_assoc();
    echo json_encode($row['suka']); 
} else {
   echo json_encode("0"); 
}
$conn->close();



 ?>