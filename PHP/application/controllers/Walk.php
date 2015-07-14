<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Walk extends CI_Controller {

	public function index()
	{
	
	}

	public function all_walks()
	{
		$var = $this->My_walks->get_all_data();
		echo json_encode($var);
	}

	public function save_walk()
	{

		$data = json_decode(file_get_contents("php://input"),TRUE);

		$this->My_walks->insert_entry($data);
		
	}
}
