<?php
	
		$con = mysqli_connect('localhost','root','','walk with me');
		
		$today = date("Y-m-d");		
		
		$res = mysqli_query($con, 'SELECT * FROM walkrequests WHERE DateOfWalk >= "'. $today. '" ' . 'ORDER BY DateOfWalk ASC LIMIT 0,1');
		
		$result = array();
		
		while($rows = mysqli_fetch_array($res, MYSQLI_NUM))
		
			array_push($result, array('Inviter' => $rows[2] ,'DateOfWalk' => $rows[3] ,'TimeOfWalk' => $rows[4], 'Status' => $rows[5]));
			
		echo json_encode(array("result" => $result));
		mysqli_close($con);
		
?>