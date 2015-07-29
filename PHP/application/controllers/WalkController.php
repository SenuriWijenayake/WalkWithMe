<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class WalkController extends CI_Controller {

	public function index()
	{
	
	}

	public function loadMenu()
	{
		$data = json_decode(file_get_contents("php://input"),TRUE);
		$mobileNumber = 713456781;//(int) $data['UserId'];
		$username = "Mandy Moore";//$data['Username'];
		$resultSet = [];
		$resultWalkInvitations = [];
		
		
		//Extracting the walking invitations
		$result = $this->Walk->getInvitations($mobileNumber);
		if (count($result) > 0)
        {
            foreach ($result as $row)
            {
                
               $walkId = $row->walkId;
               $row->participants = $this->Walk->getParticipants($walkId);
               array_push($resultWalkInvitations, $row);
               
            }
        }
    
		//Extracting next walk details
		$nextWalk = $this->Walk->getNextWalk($mobileNumber);
    if(count($nextWalk) > 0)
      {
            foreach ($nextWalk as $row)
            {
                
               $walkId = $row->walkId;
               $row->participants = $this->Walk->getParticipants($walkId);
               
            }
        }

		
    //Extracting the walking history
    $walkHistory = $this->Walk->getHistoryOfWalks($mobileNumber);
        
    //merging the result array
    $resultSet = array_merge(array("statusCode" => (int)0000),array("nextWalk" => $nextWalk), array("invitations" => $resultWalkInvitations), array("walkHistory" => $walkHistory));
    print_r(json_encode($resultSet));

	}
	
}
