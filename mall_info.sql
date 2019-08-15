/*
Navicat MySQL Data Transfer

Source Server         : jingxi_mall
Source Server Version : 50620
Source Host           : localhost:3306
Source Database       : mall_info

Target Server Type    : MYSQL
Target Server Version : 50620
File Encoding         : 65001

Date: 2019-08-09 11:59:11
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `receiver`
-- ----------------------------
DROP TABLE IF EXISTS `receiver`;
CREATE TABLE `receiver` (
  `receiver_id` int(11) NOT NULL AUTO_INCREMENT,
  `receiver_name` varchar(50) DEFAULT NULL,
  `receiver_phone` varchar(50) DEFAULT NULL,
  `receiver_address_info` varchar(100) DEFAULT NULL,
  `user_id` int(20) NOT NULL,
  PRIMARY KEY (`receiver_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of receiver
-- ----------------------------
INSERT INTO `receiver` VALUES ('1', '3', '3', '3', '1');
INSERT INTO `receiver` VALUES ('2', 'bbb', 'bbb', 'bbb', '1');

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(32) DEFAULT NULL,
  `user_email` varchar(50) DEFAULT NULL,
  `user_phone` varchar(50) DEFAULT NULL,
  `user_sex` varchar(2) DEFAULT NULL,
  `user_real_name` varchar(50) DEFAULT NULL,
  `user_mall_name` varchar(50) DEFAULT NULL,
  `user_address` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'yang', '123', '13838877841', '男', '杨泽琦', 'yang', '行署国际广场F座');
INSERT INTO `user` VALUES ('2', 'bbb', 'bbb', 'bbb', 'b', 'bbb', 'bbb', 'bbb');

-- ----------------------------
-- Table structure for `user_info`
-- ----------------------------
DROP TABLE IF EXISTS `user_info`;
CREATE TABLE `user_info` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) DEFAULT NULL,
  `user_password` varchar(255) DEFAULT NULL,
   PRIMARY KEY (`user_id`)
   CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_info
-- ----------------------------
INSERT INTO `user_info` VALUES ('1', 'yang', '123');
