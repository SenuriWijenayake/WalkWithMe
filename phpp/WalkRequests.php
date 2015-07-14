<?php
	
	mysql_connect('localhost','root','');
		mysql_select_db('walk with me');
		$today = date("Y-m-d");		
		
		$res = mysql_query('SELECT * FROM walkrequests WHERE DateOfWalk >= "'. $today. '" ' . 'ORDER BY DateOfWalk ASC');
		
		$result = array();
		
		while($rows = mysql_fetch_array($res))
		
			array_push($result, array('Inviter' => $rows[2] ,'DateOfWalk' => $rows[3] ,'TimeOfWalk' => $rows[4], 'Status' => $rows[5]));
			
		echo json_encode(array("result" => $result));
		
		
?>