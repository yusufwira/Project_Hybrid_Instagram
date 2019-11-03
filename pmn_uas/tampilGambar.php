<?php 
header("Access-Control-Allow-Origin: *");

		$user = $_GET['user'];
	
		$c = new mysqli("localhost", "root","","instantgram");
		if($c->connect_error) {
			echo "Unable to connect, please try again";
			//die();
		}

		$sql = "SELECT g.idgambar,g.extention,p.idposting,p.username FROM gambar g INNER JOIN posting p on g.idposting=p.idposting WHERE p.username = '".$user."' GROUP by p.idposting";
		$result = $c->query($sql);
		
		if ($result->num_rows > 0) {		
			$postings = array();
			$i = 0;
			while ($obj = $result->fetch_assoc()) {
				$postings[$i]['idgambar'] = addslashes(htmlentities($obj['idgambar']));
				$postings[$i]['extention'] = addslashes(htmlentities($obj['extention']));
				$postings[$i]['idposting'] = addslashes(htmlentities($obj['idposting']));
				$postings[$i]['username'] = addslashes(htmlentities($obj['username']));

				$i++;
		    }	

		    echo json_encode($postings);
		} else {
			echo "Unable to process you request, please try again";
			die();
		}
		$c->close();



 ?>