-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jul 05, 2015 at 07:34 AM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `walk with me`
--

-- --------------------------------------------------------

--
-- Table structure for table `walkinghistory`
--

CREATE TABLE IF NOT EXISTS `walkinghistory` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `UserId` int(11) NOT NULL,
  `DateOfWalk` varchar(20) NOT NULL,
  `TimeOfWalk` varchar(10) NOT NULL,
  `Participants` text,
  `Status` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `walkinghistory`
--

INSERT INTO `walkinghistory` (`Id`, `UserId`, `DateOfWalk`, `TimeOfWalk`, `Participants`, `Status`) VALUES
(1, 711737449, '2015-07-04', '5.30 p.m.', 'Senuri, Mandy', 'Went'),
(2, 711737449, '2015-02-02', '4 p.m.', 'Sachini, Mandy, Amanda', 'Went');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
