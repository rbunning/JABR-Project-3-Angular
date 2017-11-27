package com.revature.project3.controller;

import javax.servlet.http.HttpServletRequest;
import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.project3.bean.Board;
import com.revature.project3.dao.BoardRepository;

@RestController
public class CreateBoardCtrl {
	@Autowired
	DataSource dataSource;

	@Autowired
	BoardRepository boardRepository;

	@PostMapping(path = "/newBoard", consumes = "application/json", produces = "application/json")
	public ResponseEntity<Board> addBoard(Board newBoard, HttpServletRequest request) {
		boardRepository.save(newBoard);
		return new ResponseEntity<Board>(newBoard, HttpStatus.OK);
	}
}
