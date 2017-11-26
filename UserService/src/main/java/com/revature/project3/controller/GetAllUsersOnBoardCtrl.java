package com.revature.project3.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.revature.project3.bean.ScrumUser;
import com.revature.project3.dao.ScrumUserRepository;

@RestController
public class GetAllUsersOnBoardCtrl {

	@Autowired
	DataSource dataSource;

	@Autowired
	ScrumUserRepository scrumUserRepository;

	@GetMapping(path = "/getAllUsersForBoard/{boardId}", produces = "application/json")
	public ResponseEntity<List<ScrumUser>> getAllUsersOnBoard(@PathVariable String boardId, HttpServletRequest request) {
		int boardNum = Integer.parseInt(boardId);
		List<ScrumUser> scrumUserList = scrumUserRepository.findByboardUserJoins_boardId(boardNum);
		return new ResponseEntity<List<ScrumUser>>(scrumUserList, HttpStatus.OK);
	}
}
