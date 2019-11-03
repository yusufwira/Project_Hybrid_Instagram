<?php  
		header("Access-Control-Allow-Origin: *");

		$idposting = $_GET['idpost'];
	
		$c = new mysqli("localhost", "root","","instantgram");
		if($c->connect_error) {
			echo "Unable to connect, please try again";
			//die();
		}
		
		$sql = "SELECT * FROM posting p INNER JOIN gambar g on p.idposting=g.idposting WHERE p.idposting = $idposting";
		$result = $c->query($sql);
		if ($result->num_rows > 0) {		
			$postings = array();
			$i = 0;
			while ($obj = $result->fetch_assoc()) {
				$postings['gambars'][$i]['idgambar'] = addslashes(htmlentities($obj['idgambar']));
				$postings['gambars'][$i]['extention'] = addslashes(htmlentities($obj['extention']));
				$postings[$i]['tanggal'] = addslashes(htmlentities($obj['tanggal']));
				$postings[$i]['username'] = addslashes(htmlentities($obj['username']));
				$postings[$i]['komen'] = addslashes(htmlentities($obj['komen']));				
				$i++;
		    }	

		    echo json_encode($postings);
		} else {
			echo "Unable to process you request, please try again";
			die();
		}
		$c->close();
		
		
 ?>