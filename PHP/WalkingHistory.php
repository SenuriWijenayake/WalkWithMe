<?php

//error_reporting(0);
		
		$con = mysqli_connect('localhost','root','','walk with me');
		//mysql_select_db('walk with me');
		//$thisUser = $_SESSION['user'];
		//$user = (int)$thisUser;
		
		$res = mysqli_query($con, 'SELECT * FROM walkinghistory WHERE UserId = 0711737449 and Status = "Went" ORDER BY Id DESC');
		
		$result = array();
		
		while($rows = mysqli_fetch_array($res,MYSQLI_ASSOC))
		
			array_push($result, array('DayOfWalk' => $rows['DayOfWalk'] ,'MonthOfWalk' => $rows['MonthOfWalk'] ,
									  'YearOfWalk' => $rows['YearOfWalk'],'TimeOfWalk' => $rows['TimeOfWalk'] ,
									  'Participants' => $rows['Participants'], 'Status' => $rows['Status']));
		
		echo json_encode(array("result" => $result));


		mysqli_close($con);
		
		
		
?>