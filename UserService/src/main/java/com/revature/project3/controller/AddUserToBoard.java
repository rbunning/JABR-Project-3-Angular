package com.revature.project3.controller;

import java.util.Set;

import javax.servlet.http.HttpServletRequest;
import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.project3.bean.BoardUserJoin;
import com.revature.project3.bean.ScrumUser;
import com.revature.project3.dao.ScrumUserRepository;
import com.revature.project3.dto.BoardUserDto;

@RestController
public class AddUserToBoard {
	@Autowired
	DataSource dataSource;

	@Autowired
	ScrumUserRepository scrumUserRepository;

	@PostMapping(path = "/addUserToBoard", consumes = "application/json", produces = "application/json")
	public void addUser(BoardUserDto boardUserDto, HttpServletRequest request) {
		ScrumUser scrumUser = scrumUserRepository.findOne(boardUserDto.getScrumUserId());
		Set<BoardUserJoin> boardUsers = scrumUser.getBoardUserJoins();
		BoardUserJoin newBoardUser = new BoardUserJoin(boardUserDto.getBoardId(), scrumUser);
		boardUsers.add(newBoardUser);
		scrumUser.setBoardUserJoins(boardUsers);
		scrumUserRepository.save(scrumUser);
	}

}
