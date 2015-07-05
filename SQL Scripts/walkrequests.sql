-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jul 05, 2015 at 07:36 AM
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
-- Table structure for table `walkrequests`
--

CREATE TABLE IF NOT EXISTS `walkrequests` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `InviterId` int(11) NOT NULL,
  `IviterName` varchar(50) DEFAULT NULL,
  `DateOfWalk` varchar(20) DEFAULT NULL,
  `TimeOfWalk` varchar(10) DEFAULT NULL,
  `Status` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `walkrequests`
--

INSERT INTO `walkrequests` (`Id`, `InviterId`, `IviterName`, `DateOfWalk`, `TimeOfWalk`, `Status`) VALUES
(1, 718024586, 'Mandy Moore', '2015-07-09', '5.30 p.m', 'Not Decided'),
(2, 717374563, 'Amanda', '2015-07-12', '4.00 p.m', 'Not Decided'),
(3, 987654321, 'AmmA', '2015-06-01', '3.45 p.m', 'Not Defined'),
(4, 1234567890, 'MM', '2015-07-08', '3.45 p.m', 'Not Defined');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
