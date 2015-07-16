<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class HomeController extends CI_Controller {

	
	public function index()
	{
		
	}

	public function registerUser()
	{
		$data = json_decode(file_get_contents("php://input"),TRUE);
		
		$id = com_create_guid();
		$mobileNumber = (int) $data['UserId'];
		$username = $data['Username'];
		$createdOn = date("Y-m-d H:i:s");
		$verificationCode = "12345";

		$newUser = array('id' => $id,'mobileNumber' => $mobileNumber,'username' => $username,'createdOn' => $createdOn,'verificationCode' => $verificationCode);
		
		$this->User->register_new_user($newUser);
	}
	
}
