CREATE USER p3board IDENTIFIED BY p4ssw0rd;
GRANT CONNECT, RESOURCE TO p3board;

CREATE USER p3story IDENTIFIED BY p4ssw0rd;
GRANT CONNECT, RESOURCE TO p3story;

CREATE USER p3task IDENTIFIED BY p4ssw0rd;
GRANT CONNECT, RESOURCE TO p3task;

CREATE USER p3user IDENTIFIED BY p4ssw0rd;
GRANT CONNECT, RESOURCE TO p3user;

CREATE USER p3chart IDENTIFIED BY p4ssw0rd;
GRANT CONNECT, RESOURCE TO p3chart;


-- For board manager service
CREATE TABLE board(
 board_id INT,
 board_name VARCHAR2(4000) UNIQUE,
 PRIMARY KEY(board_id)
);
/
CREATE SEQUENCE board_seq START WITH 1 INCREMENT BY 1;

-- For story manager service
CREATE TABLE story(
 story_id INT,
 board_id INT NOT NULL,
 lt_id INT DEFAULT 1 NOT NULL,
 story_name VARCHAR2(4000) NOT NULL,
 story_points INT DEFAULT 0 NOT NULL,
 story_desc VARCHAR2(4000),
 last_move_date DATE,
 PRIMARY KEY(story_id)
);
/
CREATE SEQUENCE story_seq START WITH 1 INCREMENT BY 1;

-- For task manager service
CREATE TABLE task(
 task_id INT,
 story_id INT NOT NULL,
 task_desc VARCHAR2(4000) NOT NULL,
 PRIMARY KEY(task_id)
);
/
CREATE SEQUENCE task_seq START WITH 1 INCREMENT BY 1;

-- For user service
CREATE TABLE role_type(
 rt_id INT,
 rt_name VARCHAR2(4000) UNIQUE,
 PRIMARY KEY(rt_id)
);
/

CREATE TABLE scrum_user(
 su_id INT,
 rt_id INT DEFAULT 1 NOT NULL,
 su_fn VARCHAR2(4000),
 su_ln VARCHAR2(4000),
 su_username VARCHAR2(4000) UNIQUE NOT NULL,
 su_password VARCHAR2(4000) NOT NULL,
 PRIMARY KEY(su_id),
 FOREIGN KEY(rt_id) REFERENCES role_type(rt_id)
);
/

CREATE TABLE board_user_join(
 buj_id INT,
 board_id INT,
 su_id INT,
 PRIMARY KEY(buj_id),
 FOREIGN KEY(su_id) REFERENCES scrum_user(su_id)
);
/
CREATE SEQUENCE scrum_user_seq START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE buj_id_seq START WITH 1 INCREMENT BY 1;

-- For chart service
CREATE TABLE chart(
 chart_id INT,
 board_id INT NOT NULL,
 chart_title VARCHAR2(4000),
 start_date DATE DEFAULT SYSDATE NOT NULL,
 PRIMARY KEY(chart_id)
);
/
CREATE SEQUENCE chart_seq START WITH 1 INCREMENT BY 1;
