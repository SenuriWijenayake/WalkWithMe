<?php
	
	$data = json_decode(file_get_contents("php://input"),TRUE);
	$con = mysqli_connect('localhost','root','','walk with me');

	$number = mysqli_real_escape_string($con, $data['UserId']);
	$username = mysqli_real_escape_string($con, $data['Username']);

	$sql = mysqli_query($con, 'INSERT INTO User (`UserId`, `Username`) VALUES ("'.$number.'", "'.$username.'")');
	if($sql)
		echo json_encode("Success");
	mysqli_close($con);
?>