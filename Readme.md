# EC2+LAMP+node.js

## Prerequisites

### Linux OS
```
[ec2-user@ip-172-31-30-248 ~]$ cat /etc/os-release 
NAME="Amazon Linux"
VERSION="2"
ID="amzn"
ID_LIKE="centos rhel fedora"
VERSION_ID="2"
PRETTY_NAME="Amazon Linux 2"
ANSI_COLOR="0;33"
CPE_NAME="cpe:2.3:o:amazon:amazon_linux:2"
HOME_URL="https://amazonlinux.com/"
```

### Apache
```
[ec2-user@ip-172-31-30-248 ~]$ httpd -v
Server version: Apache/2.4.39 ()
Server built:   Apr  4 2019 18:09:28
```
### MySQL
```
[ec2-user@ip-172-31-30-248 ~]$ mysqld --version
mysqld  Ver 5.7.26 for Linux on x86_64 (MySQL Community Server (GPL))
```
### PHP
```
[ec2-user@ip-172-31-30-248 ~]$ php -v
PHP 7.2.16 (cli) (built: Apr  3 2019 18:39:35) ( NTS )
Copyright (c) 1997-2018 The PHP Group
Zend Engine v3.2.0, Copyright (c) 1998-2018 Zend Technologies
```

## Target Database Structure
```
mysql> desc class;
+----------+-------------+------+-----+---------+----------------+
| Field    | Type        | Null | Key | Default | Extra          |
+----------+-------------+------+-----+---------+----------------+
| id       | int(11)     | NO   | PRI | NULL    | auto_increment |
| st_name  | varchar(50) | NO   |     | NULL    |                |
| grade    | int(11)     | NO   |     | NULL    |                |
| class    | int(11)     | NO   |     | NULL    |                |
| gender   | varchar(10) | NO   |     | NULL    |                |
| subjects | varchar(50) | NO   |     | NULL    |                |
| score    | int(11)     | NO   |     | NULL    |                |
+----------+-------------+------+-----+---------+----------------+
7 rows in set (0.00 sec)
```

