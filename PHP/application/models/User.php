<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class User extends CI_Model {

    function __construct()
    {
        // Call the Model constructor
        parent::__construct();
    }

    //Extracts the walks where the user is a participant
     function getUsers ($mobileNumber)
    {
        
        $getUsersQuery = $this->db->query("SELECT * FROM user where mobileNumber != '".$mobileNumber."'");
        

        return $getUsersQuery->result();
    
    }
  }

