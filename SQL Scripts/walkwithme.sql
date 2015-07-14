-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jul 14, 2015 at 03:40 PM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `walkwithme`
--

-- --------------------------------------------------------

--
-- Table structure for table `mywalks`
--

CREATE TABLE IF NOT EXISTS `mywalks` (
  `id` binary(16) NOT NULL,
  `inviterId` int(10) NOT NULL,
  `inviterName` varchar(50) NOT NULL,
  `dayOfWalk` varchar(10) NOT NULL,
  `monthOfWalk` varchar(20) NOT NULL,
  `yearOfWalk` varchar(5) NOT NULL,
  `timeOfWalk` varchar(10) NOT NULL,
  `milestone` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_ref_mobile` (`inviterId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `mywalks`
--

INSERT INTO `mywalks` (`id`, `inviterId`, `inviterName`, `dayOfWalk`, `monthOfWalk`, `yearOfWalk`, `timeOfWalk`, `milestone`) VALUES
('12acfd50-2a2d-11', 713456781, 'Mandy Moore', '13', 'July', '2015', '18:45', ''),
('aa006b70-2a2c-11', 713456781, 'Mandy Moore', '16', 'July', '2015', '14:30', 'Beginner'),
('eb2d4b90-2a2c-11', 713456781, 'Mandy Moore', '12', 'July', '2015', '14:40', '');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` binary(16) NOT NULL,
  `mobileNumber` int(10) NOT NULL,
  `username` varchar(50) DEFAULT NULL,
  `createdOn` timestamp NULL DEFAULT NULL,
  `verificationCode` varchar(5) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mobileNumber` (`mobileNumber`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `mobileNumber`, `username`, `createdOn`, `verificationCode`) VALUES
('12345678-9ABC-DE', 713456781, 'Mandy Moore', '2015-07-14 02:02:13', '12345'),
('6045a4e0-2a2d-11', 774523896, 'Amanda Millers', '2015-07-09 03:41:50', '55723'),
('78563412-BC9A-FG', 714567894, 'Senuri Wijenayake', '2015-07-08 03:12:24', '33556');

-- --------------------------------------------------------

--
-- Table structure for table `walkparticipants`
--

CREATE TABLE IF NOT EXISTS `walkparticipants` (
  `Id` binary(16) NOT NULL,
  `walkId` binary(16) DEFAULT NULL,
  `participantId` binary(16) DEFAULT NULL,
  `participantNum` int(10) NOT NULL,
  `participantStatus` text NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `walkId` (`walkId`),
  KEY `participantId` (`participantId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `walkparticipants`
--

INSERT INTO `walkparticipants` (`Id`, `walkId`, `participantId`, `participantNum`, `participantStatus`) VALUES
('2e1b63b0-2a2d-11', '12acfd50-2a2d-11', '78563412-BC9A-FG', 714567894, 'Joined'),
('a195eb80-2a2d-11', '12acfd50-2a2d-11', '6045a4e0-2a2d-11', 774523896, 'Joined');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `mywalks`
--
ALTER TABLE `mywalks`
  ADD CONSTRAINT `id_ref_mobile` FOREIGN KEY (`inviterId`) REFERENCES `user` (`mobileNumber`);

--
-- Constraints for table `walkparticipants`
--
ALTER TABLE `walkparticipants`
  ADD CONSTRAINT `walkparticipants_ibfk_2` FOREIGN KEY (`participantId`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `walkparticipants_ibfk_1` FOREIGN KEY (`walkId`) REFERENCES `mywalks` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
