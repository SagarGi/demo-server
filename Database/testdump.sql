CREATE TABLE users(
       userid INT PRIMARY KEY AUTO_INCREMENT,
       fullname VARCHAR(60),
       email VARCHAR(60)
);
INSERT INTO users(
       fullname,
       email)
VALUES(
       "sagar gurung",
        "sagar@gmail.com"
);
ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'root';
flush privileges;
