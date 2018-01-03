-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Gegenereerd op: 03 jan 2018 om 14:22
-- Serverversie: 10.1.28-MariaDB
-- PHP-versie: 7.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `findit`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `companies`
--

CREATE TABLE IF NOT EXISTS `companies` (
  `companyID` int(11) NOT NULL AUTO_INCREMENT,
  `companyname` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`companyID`),
  UNIQUE KEY `companyID` (`companyID`),
  UNIQUE KEY `companyname` (`companyname`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `companies`
--

INSERT INTO `companies` (`companyID`, `companyname`, `password`) VALUES
(1, 'testcomp1', 'test'),
(2, 'testcomp2', 'test');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `contacts`
--

CREATE TABLE IF NOT EXISTS `contacts` (
  `contactID` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `forCompany` int(11) NOT NULL,
  PRIMARY KEY (`contactID`),
  UNIQUE KEY `email` (`email`),
  KEY `forCompany` (`forCompany`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `contacts`
--

INSERT INTO `contacts` (`contactID`, `name`, `email`, `forCompany`) VALUES
(1, 'testie mctestface', 'test@test.test', 1),
(2, 'test2', 'test2@test.test', 2);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `jobs`
--

CREATE TABLE IF NOT EXISTS `jobs` (
  `jobID` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `companyID` int(11) NOT NULL,
  `contactID` int(11) NOT NULL,
  PRIMARY KEY (`jobID`),
  UNIQUE KEY `jobID` (`jobID`),
  KEY `contactID` (`contactID`),
  KEY `jobs_ibfk_1` (`companyID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `jobs`
--

INSERT INTO `jobs` (`jobID`, `title`, `description`, `companyID`, `contactID`) VALUES
(1, 'ayy lmao', 'testing testing 12', 1, 1),
(3, 'qsdfqsdfqsdf', 'testing testing 12', 2, 2),
(5, 'iets deftig', 'nog iets deftig', 1, 1);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `migrations`
--

CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `userID` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `mail` varchar(255) NOT NULL,
  `admin` tinyint(1) NOT NULL DEFAULT '0',
  `remember_token` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`userID`),
  UNIQUE KEY `userID` (`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `users`
--

INSERT INTO `users` (`userID`, `username`, `password`, `mail`, `admin`, `remember_token`) VALUES
(1, 'LarryL', 'kutpassword', 'testmail', 1, NULL);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `users_disliked_jobs`
--

CREATE TABLE IF NOT EXISTS `users_disliked_jobs` (
  `userID` int(11) NOT NULL,
  `jobID` int(11) NOT NULL,
  KEY `users_disliked_jobs_ibfk_1` (`userID`),
  KEY `users_disliked_jobs_ibfk_2` (`jobID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `users_liked_jobs`
--

CREATE TABLE IF NOT EXISTS `users_liked_jobs` (
  `userID` int(11) NOT NULL,
  `jobID` int(11) NOT NULL,
  KEY `userID` (`userID`),
  KEY `jobID` (`jobID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `user_acted_on_jobs`
--

CREATE TABLE IF NOT EXISTS `user_acted_on_jobs` (
  `userID` int(11) NOT NULL,
  `jobID` int(11) NOT NULL,
  KEY `userID` (`userID`),
  KEY `jobID` (`jobID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Beperkingen voor geëxporteerde tabellen
--

--
-- Beperkingen voor tabel `contacts`
--
ALTER TABLE `contacts`
  ADD CONSTRAINT `contacts_ibfk_1` FOREIGN KEY (`forCompany`) REFERENCES `companies` (`companyID`);

--
-- Beperkingen voor tabel `jobs`
--
ALTER TABLE `jobs`
  ADD CONSTRAINT `contactID` FOREIGN KEY (`contactID`) REFERENCES `contacts` (`contactID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `jobs_ibfk_1` FOREIGN KEY (`companyID`) REFERENCES `companies` (`companyID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Beperkingen voor tabel `users_disliked_jobs`
--
ALTER TABLE `users_disliked_jobs`
  ADD CONSTRAINT `users_disliked_jobs_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`userID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `users_disliked_jobs_ibfk_2` FOREIGN KEY (`jobID`) REFERENCES `jobs` (`jobID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Beperkingen voor tabel `users_liked_jobs`
--
ALTER TABLE `users_liked_jobs`
  ADD CONSTRAINT `users_liked_jobs_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`userID`),
  ADD CONSTRAINT `users_liked_jobs_ibfk_2` FOREIGN KEY (`jobID`) REFERENCES `jobs` (`jobID`);

--
-- Beperkingen voor tabel `user_acted_on_jobs`
--
ALTER TABLE `user_acted_on_jobs`
  ADD CONSTRAINT `user_acted_on_jobs_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`userID`),
  ADD CONSTRAINT `user_acted_on_jobs_ibfk_2` FOREIGN KEY (`jobID`) REFERENCES `jobs` (`jobID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
