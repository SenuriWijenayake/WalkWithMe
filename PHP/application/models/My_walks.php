<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class My_walks extends CI_Model {

    function __construct()
    {
        // Call the Model constructor
        parent::__construct();
    }

    function get_all_data()
    {
        $query = $this->db->get('mywalks');
        return $query->result();
    }

    function insert_entry($data = array())
    {
        $this->db->insert('mywalks', $data);
    }
}
