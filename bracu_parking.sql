-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 18, 2024 at 07:07 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bracu parking`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `UserID` varchar(10) NOT NULL,
  `User_email` varchar(60) NOT NULL,
  `password` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`UserID`, `User_email`, `password`) VALUES
('001', 'admin1@example.com', 'pass123'),
('002', 'admin2@example.com', 'admin456'),
('24341137', 'mashrafi.rahman@g.bracu.ac.bd', '013579');

-- --------------------------------------------------------

--
-- Table structure for table `bill_calculation`
--

CREATE TABLE `bill_calculation` (
  `UserID` varchar(10) NOT NULL,
  `Bill_id` varchar(10) NOT NULL,
  `Car_Number` varchar(10) NOT NULL,
  `Car_Type` varchar(30) NOT NULL,
  `Total_bill` int(10) NOT NULL,
  `Total_time` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bill_calculation`
--

INSERT INTO `bill_calculation` (`UserID`, `Bill_id`, `Car_Number`, `Car_Type`, `Total_bill`, `Total_time`) VALUES
('22101108', 'Bill-1', 'DHK56-4646', 'Four ', 450, 9),
('22101109', 'Bill-2', 'DHK56-4645', 'Two', 270, 9);

-- --------------------------------------------------------

--
-- Table structure for table `booking/reservation`
--

CREATE TABLE `booking/reservation` (
  `Location_ID` varchar(10) NOT NULL,
  `User_id` varchar(60) NOT NULL,
  `Car_Number` varchar(10) NOT NULL,
  `Car_Type` varchar(30) NOT NULL,
  `Date` date NOT NULL,
  `Start_time` double NOT NULL,
  `End_time` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `booking/reservation`
--

INSERT INTO `booking/reservation` (`Location_ID`, `User_id`, `Car_Number`, `Car_Type`, `Date`, `Start_time`, `End_time`) VALUES
('B2-P5-C', '22101108', 'DHK56-4646', 'Four ', '2024-10-02', 8, 17),
('B2-P5-C', '22101109', 'DHK56-4645', 'Two', '2024-10-11', 8, 17);

-- --------------------------------------------------------

--
-- Table structure for table `common_user`
--

CREATE TABLE `common_user` (
  `UserID` varchar(10) NOT NULL,
  `Name` varchar(60) DEFAULT NULL,
  `User_email` varchar(60) NOT NULL,
  `Phone` varchar(20) DEFAULT NULL,
  `password` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `common_user`
--

INSERT INTO `common_user` (`UserID`, `Name`, `User_email`, `Phone`, `password`) VALUES
('20201076', 'Khalid Mahmud', 'khalid.mahmud@g.bracu.ac.bd', '016********', '0123456789'),
('20201078', 'Mohiuddin Ahmed', 'mohiuddin.ahmed@g.bracu.ac.bd', '017********', '0123456790'),
('21101069', 'Kazi Zaman', 'kazi.zaman@g.bracu.ac.bd', '015********', '0123456791'),
('21101703', 'Aysha Sidddiqua', 'aysha.siddiqua@g.bracu.ac.bd', '016********', '0123456793'),
('22101108', 'Khalid Bin Bhaktiar Khilji', 'khalid.bin@g.bracu.ac.bd', '015********', '9874563210'),
('22101109', 'Badshah Shahjahan', 'badshah.shahjahan@g.bracu.ac.bd', '016********', '0123456793');

-- --------------------------------------------------------

--
-- Table structure for table `parking_space`
--

CREATE TABLE `parking_space` (
  `Location_ID` varchar(10) NOT NULL,
  `Date` date NOT NULL,
  `Car_Type` varchar(10) NOT NULL,
  `Start_time` double NOT NULL,
  `End_time` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `parking_space`
--

INSERT INTO `parking_space` (`Location_ID`, `Date`, `Car_Type`, `Start_time`, `End_time`) VALUES
('B1-P5-A', '0000-00-00', 'Four ', 10, 11),
('B1-P5-A', '0000-00-00', 'Four ', 10, 11),
('B1-P5-B', '2024-10-01', 'Four ', 10, 11),
('B1-P5-B', '2024-09-11', 'Two', 10, 11),
('B1-P5-C', '2024-10-01', 'Four ', 10, 11),
('B1-P5-C', '2024-09-11', 'Two', 10, 11),
('B1-P5-C', '2024-10-01', 'Four ', 8, 17),
('B1-P5-C', '2024-09-11', 'Two', 8, 17);

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `Bill_id` varchar(10) NOT NULL,
  `left_car` varchar(60) NOT NULL,
  `paid` varchar(10) NOT NULL,
  `Receipt` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `payment`
--

INSERT INTO `payment` (`Bill_id`, `left_car`, `paid`, `Receipt`) VALUES
('Bill-1', 'DHK56-4646', 'No', 'The receipt for BILL-1\r\nTotal: 450\r\n'),
('Bill-2', 'DHK56-4645', 'No', 'The receipt for BILL-1\r\nTotal: 270');

-- --------------------------------------------------------

--
-- Table structure for table `review`
--

CREATE TABLE `review` (
  `RRno` varchar(10) NOT NULL,
  `Rating(out_of_5)` int(11) NOT NULL,
  `Type` varchar(30) NOT NULL,
  `Feedback` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `review`
--

INSERT INTO `review` (`RRno`, `Rating(out_of_5)`, `Type`, `Feedback`) VALUES
('RR001', 3, 'Feedback', 'Great Service!'),
('RR002', 4, 'Feedback', 'Good Experience.'),
('RR001', 3, 'Feedback', 'Great Service!'),
('RR002', 4, 'Feedback', 'Good Experience.'),
('RR005', 5, 'Feedback', 'I loved it!!'),
('', 0, '', ''),
('RR005', 5, 'Feedback', 'I loved it!!'),
('', 0, '', '');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `UserID` varchar(10) NOT NULL,
  `User_email` varchar(60) NOT NULL,
  `password` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`UserID`, `User_email`, `password`) VALUES
('001', 'admin1@example.com', 'pass123'),
('002', 'admin2@example.com', 'admin456'),
('20201076', 'khalid.mahmud@g.bracu.ac.bd', '0123456789'),
('20201078', 'mohiuddin.ahmed@g.bracu.ac.bd', '01234567890'),
('21101069', 'kazi.zaman@g.bracu.ac.bd', '01234567891'),
('21101703', 'aysha.siddiqua@g.bracu.ac.bd', '01234567893'),
('22101108', 'khalid.bin@g.bracu.ac.bd', '9876543210'),
('22101109', 'badshah.shahjahan@g.bracu.ac.bd', '0123456793'),
('24341137', 'mashrafi.rahman@g.bracu.ac.bd', '013579');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`UserID`);

--
-- Indexes for table `bill_calculation`
--
ALTER TABLE `bill_calculation`
  ADD PRIMARY KEY (`UserID`,`Bill_id`);

--
-- Indexes for table `booking/reservation`
--
ALTER TABLE `booking/reservation`
  ADD PRIMARY KEY (`User_id`);

--
-- Indexes for table `common_user`
--
ALTER TABLE `common_user`
  ADD PRIMARY KEY (`UserID`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`Bill_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`UserID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
