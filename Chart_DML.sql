--Chart DML
Insert into CHART (CHART_ID,BOARD_ID,CHART_TITLE,START_DATE) values (10,2,'Jabr Scrum',to_date('30-OCT-17','DD-MON-RR'));
Insert into CHART (CHART_ID,BOARD_ID,CHART_TITLE,START_DATE) values (43,82,'new board',to_date('07-NOV-17','DD-MON-RR'));


--Story DDL
CREATE TABLE "STORY" 
   (	"STORY_ID" NUMBER(*,0), 
	"BOARD_ID" NUMBER(*,0), 
	"LT_ID" NUMBER(*,0) DEFAULT 1, 
	"STORY_NAME" VARCHAR2(4000 BYTE), 
	"STORY_POINTS" NUMBER(*,0) DEFAULT 0, 
	"STORY_DESC" VARCHAR2(4000 BYTE), 
	"LAST_MOVE_DATE" DATE
   );

--Story DML
Insert into STORY (STORY_ID,BOARD_ID,LT_ID,STORY_NAME,STORY_POINTS,STORY_DESC,LAST_MOVE_DATE) values (121,2,1,'sunday task',3,'nothing',to_date('08-NOV-17','DD-MON-RR'));
Insert into STORY (STORY_ID,BOARD_ID,LT_ID,STORY_NAME,STORY_POINTS,STORY_DESC,LAST_MOVE_DATE) values (83,2,6,'As a Scrum Master I can create one or more boards',10,'Create a new board',to_date('01-NOV-17','DD-MON-RR'));
Insert into STORY (STORY_ID,BOARD_ID,LT_ID,STORY_NAME,STORY_POINTS,STORY_DESC,LAST_MOVE_DATE) values (84,2,4,'As a Scrum Master I can create a new Story',5,'Create new story',to_date('07-NOV-17','DD-MON-RR'));
Insert into STORY (STORY_ID,BOARD_ID,LT_ID,STORY_NAME,STORY_POINTS,STORY_DESC,LAST_MOVE_DATE) values (87,2,6,'As a User I can login according to my role',2,'Login',to_date('02-NOV-17','DD-MON-RR'));
Insert into STORY (STORY_ID,BOARD_ID,LT_ID,STORY_NAME,STORY_POINTS,STORY_DESC,LAST_MOVE_DATE) values (89,2,6,'As a user I can logout',2,'Logout',to_date('03-NOV-17','DD-MON-RR'));
Insert into STORY (STORY_ID,BOARD_ID,LT_ID,STORY_NAME,STORY_POINTS,STORY_DESC,LAST_MOVE_DATE) values (92,2,6,'As a User I can view stories in their lanes for the selected board',4,'View Board',to_date('06-NOV-17','DD-MON-RR'));
Insert into STORY (STORY_ID,BOARD_ID,LT_ID,STORY_NAME,STORY_POINTS,STORY_DESC,LAST_MOVE_DATE) values (85,2,6,'As a User I can view the Burndown Chart',5,'View Burndown Chart',to_date('07-NOV-17','DD-MON-RR'));
Insert into STORY (STORY_ID,BOARD_ID,LT_ID,STORY_NAME,STORY_POINTS,STORY_DESC,LAST_MOVE_DATE) values (86,2,2,'As a User I can view the Logs',3,'View logs',to_date('07-NOV-17','DD-MON-RR'));
Insert into STORY (STORY_ID,BOARD_ID,LT_ID,STORY_NAME,STORY_POINTS,STORY_DESC,LAST_MOVE_DATE) values (88,2,3,'As a Scrum Master I can add Users to a board',3,'Add Users',to_date('07-NOV-17','DD-MON-RR'));
Insert into STORY (STORY_ID,BOARD_ID,LT_ID,STORY_NAME,STORY_POINTS,STORY_DESC,LAST_MOVE_DATE) values (90,2,5,'As a Scrum Master I can move Stories to different Swim Lanes',3,'Move stories',to_date('07-NOV-17','DD-MON-RR'));
Insert into STORY (STORY_ID,BOARD_ID,LT_ID,STORY_NAME,STORY_POINTS,STORY_DESC,LAST_MOVE_DATE) values (91,2,3,'As a Developer I can create a new Task within a Story',6,'Create New Task',to_date('07-NOV-17','DD-MON-RR'));
Insert into STORY (STORY_ID,BOARD_ID,LT_ID,STORY_NAME,STORY_POINTS,STORY_DESC,LAST_MOVE_DATE) values (93,2,1,'Drag and Drop Stories',10,'Drag and Drop',to_date('07-NOV-17','DD-MON-RR'));
Commit;

--Board DDL
CREATE TABLE "BOARD" 
   (	"BOARD_ID" NUMBER(*,0), 
	"BOARD_NAME" VARCHAR2(4000 BYTE)
   );

--Board DML
Insert into BOARD (BOARD_ID,BOARD_NAME) values (82,'new board');
Insert into BOARD (BOARD_ID,BOARD_NAME) values (2,'Jabr Scrum');
Commit;



