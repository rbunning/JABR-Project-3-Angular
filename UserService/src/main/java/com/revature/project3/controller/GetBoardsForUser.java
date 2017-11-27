package com.revature.project3.controller;

import java.util.Set;

import javax.servlet.http.HttpServletRequest;
import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.revature.project3.bean.BoardUserJoin;
import com.revature.project3.bean.ScrumUser;
import com.revature.project3.dao.ScrumUserRepository;

@RestController
public class GetBoardsForUser {

	@Autowired
	DataSource dataSource;

	@Autowired
	ScrumUserRepository scrumUserRepository;

	@GetMapping(path = "/getBoardsForUser/{userId}", produces = "application/json")
	public ResponseEntity<String> getBoardIds(@PathVariable String userId, HttpServletRequest request) {
		int userNum = Integer.parseInt(userId);
		ScrumUser scrumUser = scrumUserRepository.findOne(userNum);
		Set<BoardUserJoin> boardSet = scrumUser.getBoardUserJoins();
		String boardList = "";
		for (BoardUserJoin buj : boardSet) {
			if (boardList.length() > 0) {
				boardList += ",";
			}
			boardList += buj.getBoardId();
		}
		return new ResponseEntity<String>(boardList, HttpStatus.OK);
	}
}
