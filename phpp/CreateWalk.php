<?php
	
	$data = json_decode(file_get_contents("php://input"),TRUE);
	
	$con = mysqli_connect('localhost','root','','walk with me');

	$Date = mysqli_real_escape_string($con, $data['DayOfWalk']);
	$Month = mysqli_real_escape_string($con, $data['MonthOfWalk']);
	$Year = mysqli_real_escape_string($con, $data['YearOfWalk']);
	$Time = mysqli_real_escape_string($con, $data['TimeOfWalk']);
	
	$Friends = "Senuri, Shashini & Amanda.";
	$InviterId = "0711737449";
	$InviterName = "Veronica";
	$Status = "You are going";
	
	
	$sql = mysqli_query($con, 'INSERT INTO mywalks(`InviterId`, `InviterName`, `DayOfWalk`, `MonthOfWalk`, `YearOfWalk`, `TimeOfWalk`, `Participants`, `Status`)
	 VALUES ("'.$InviterId.'", "'.$InviterName.'", "'.$Date.'", "'.$Month.'", "'.$Year.'", "'.$Time.'", "'.$Friends.'", "'.$Status.'") ');
	echo json_encode("Success");
	mysqli_close($con);

		
?>

		