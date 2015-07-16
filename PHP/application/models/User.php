<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class User extends CI_Model {

    function __construct()
    {
        // Call the Model constructor
        parent::__construct();
    }

    function register_new_user($data = array())
    {
        $this->db->insert('user', $data);
    }
}
