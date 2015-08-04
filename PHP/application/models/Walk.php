<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Walk extends CI_Model {

    function __construct()
    {
        // Call the Model constructor
        parent::__construct();
    }

    //Extracts the walks where the user is a participant
     function getInvitations ($mobileNumber)
    {
        
        $invitationQuery = $this->db->query("SELECT userwalks.id as `walkId`,walkparticipants.participantId as 'participantId', walkparticipants.participantStatus as 'participantStatus', userwalks.inviterId as 'inviterId' , userwalks.inviterName as `inviter`, DATE_FORMAT(userwalks.dateOfWalk, '%a %d %b %Y') as `date` , DATE_FORMAT(userwalks.dateOfWalk, '%r') as `time`
                                             FROM userwalks
                                             INNER JOIN walkparticipants on userwalks.id = walkparticipants.walkId
                                             WHERE walkparticipants.participantStatus <> 'Denied' AND userwalks.dateOfWalk >= now() AND walkparticipants.participantNum = ' ". $mobileNumber . " '
                                             ORDER BY userwalks.dateOfWalk");

        

        return $invitationQuery->result();
    
    }

    //Function to extract participants of a given walk
    function getParticipants ($walkIdentity)
    {
        $participantsQuery = $this->db->query("SELECT user.mobileNumber as 'participantNumber', user.username as 'participantName'
                                               FROM user
                                               INNER JOIN walkparticipants on user.id = walkparticipants.participantId
                                               WHERE (walkparticipants.participantStatus <> 'Denied') AND (walkparticipants.walkId = '" .$walkIdentity. "')
                                               LIMIT 0,7"); 
        
        
        return $participantsQuery->result();
        
    }

    // Function to extract the next walk details
    // TODO : Replace hardcoded mobile number
    function getNextWalk ($mobileNumber)
    {
        $nextWalkQuery = $this->db->query("SELECT walkId, inviter, date ,time
                                           FROM(
                                          (SELECT userwalks.id as 'walkId', userwalks.inviterName as 'inviter', DATE_FORMAT(userwalks.dateOfWalk, '%a %d %b %Y') as 'date' , DATE_FORMAT(userwalks.dateOfWalk, '%r') as 'time'
                                           FROM userwalks
                                           WHERE userwalks.dateOfWalk >=  now() AND userwalks.inviterId = $mobileNumber) 
                                          
                                          UNION ALL

                                          (SELECT userwalks.id as 'walkId', userwalks.inviterName as 'inviter', DATE_FORMAT(userwalks.dateOfWalk, '%a %d %b %Y') as 'date' , DATE_FORMAT(userwalks.dateOfWalk, '%r') as 'time'
                                           FROM userwalks
                                           INNER JOIN walkparticipants on userwalks.id = walkparticipants.walkId
                                           WHERE  userwalks.dateOfWalk >= now() AND walkparticipants.participantNum =  $mobileNumber)
                                           )t
                                          ORDER BY date
                                          LIMIT 0,1");
      return $nextWalkQuery->result();
    }
    
    // Function to extract walking history
    // TODO : Replace hardcoded mobile number
    function getHistoryOfWalks ($mobileNumber){
        $historyQuery = $this->db->query("SELECT  month, SUM(Count) as 'countWalks'
                                          FROM(
                                          (SELECT DATE_FORMAT(userwalks.dateOfWalk, '%M') as `month`, COUNT(*) as `Count`
                                          FROM userwalks
                                          WHERE userwalks.inviterId = $mobileNumber AND userwalks.dateOfWalk < now() AND (MONTH(now()) - MONTH(userwalks.dateOfWalk) IN (0,1,2)) GROUP BY DATE_FORMAT(userwalks.dateOfWalk, '%M'))
                                          
                                          UNION ALL

                                          (SELECT DATE_FORMAT(userwalks.dateOfWalk, '%M') as `month`, COUNT(*) as `Count`
                                          FROM userwalks
                                          INNER JOIN walkparticipants
                                          WHERE userwalks.id = walkparticipants.walkId AND walkparticipants.participantNum = $mobileNumber AND 
                                                userwalks.dateOfWalk < now() AND (MONTH(now()) - MONTH(userwalks.dateOfWalk) IN (0,1,2))
                                          GROUP BY DATE_FORMAT(userwalks.dateOfWalk, '%M'))
                                          ) t
                                          GROUP BY month");
        return $historyQuery->result();
    }

    function getWalksOfMonth ($mobileNumber, $month){
        $historyQuery = $this->db->query("SELECT * 
                                          FROM (
                                          (SELECT id as 'walkId', DATE_FORMAT(userwalks.dateOfWalk, '%d, %a') as `walkDate`, DATE_FORMAT (userwalks.dateOfWalk, '%h.%i %p') as 'walkTime', 'Created' AS Type
                                          FROM userwalks
                                          WHERE userwalks.inviterId = $mobileNumber AND (MONTH(now()) - MONTH(userwalks.dateOfWalk) IN ($month)) AND userwalks.dateOfWalk < now())

                                          UNION ALL

                                          (SELECT walkId , DATE_FORMAT(userwalks.dateOfWalk, '%d, %a') as `walkDate`, DATE_FORMAT (userwalks.dateOfWalk, '%h.%i %p') as 'walkTime', 'Joined' AS Type
                                          FROM userwalks
                                          INNER JOIN walkparticipants
                                          WHERE userwalks.id = walkparticipants.walkId AND walkparticipants.participantNum = $mobileNumber AND walkparticipants.participantStatus = 'Joined' AND userwalks.dateOfWalk < now() AND 
                                          (MONTH(now()) -  MONTH(userwalks.dateOfWalk) IN ($month)))) as t
                                          ORDER BY walkDate");
        return $historyQuery->result();
    }


}
