<?php 

header("Access-Control-Allow-Origin: *");
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "instantgram";

$idposting = $_GET['idpost'];
$user = $_GET['user'];

$tes = 0;

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 


$sql = "SELECT * FROM jempol_like ";
$result = $conn->query($sql);

while($row = $result->fetch_assoc()){
	if($row['username'] == $user && $row['idposting'] == $idposting){
		//echo $row['username'] ."==". $user. "&&". $row['idposting'] . "==". $idposting."<br>";
		$tes = 1;
	}	
	
}

//echo $tes;
if($tes == 1){
	//echo $tes;
		$sql2 = "DELETE FROM jempol_like WHERE idposting=$idposting && username='$user'";
		if ($conn->query($sql2) === TRUE) {
    		echo json_encode("-1");
		}
		else {
    		echo "Error deleting record: " . $conn->error;
		}	
}
elseif($tes == 0){
	//echo $tes;
	$sql1 = "INSERT INTO jempol_like (idposting, username)
		VALUES ($idposting, '$user')";

		if ($conn->query($sql1) === TRUE) {
		    //echo "New record created successfully";
		    echo json_encode("1");
		}
		else {
    		echo "Error deleting record: " . $conn->error;
		}
}



$conn->close();



 ?>