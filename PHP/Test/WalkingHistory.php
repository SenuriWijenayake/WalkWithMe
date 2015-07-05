<?php
	
	mysql_connect('localhost','root','');
		mysql_select_db('walk with me');
		$thisUser = $_SESSION['user'];
		$user = (int)$thisUser;
		
		$res = mysql_query('SELECT * FROM walkinghistory WHERE UserId = 0711737449 ORDER BY DateOfWalk DESC');
		
		$result = array();
		
		while($rows = mysql_fetch_array($res))
		
			array_push($result, array('DateOfWalk' => $rows[2] ,'TimOfWalk' => $rows[3] ,'Pariticipants' => $rows[4], 'Status' => $rows[5]));
			
		echo json_encode(array("result" => $result));
		
		
?>