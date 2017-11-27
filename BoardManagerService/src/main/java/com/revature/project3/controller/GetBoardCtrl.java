package com.revature.project3.controller;

import javax.servlet.http.HttpServletRequest;
import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.revature.project3.bean.Board;
import com.revature.project3.dao.BoardRepository;

@RestController
public class GetBoardCtrl {
	@Autowired
	DataSource dataSource;

	@Autowired
	BoardRepository boardRepository;

	@GetMapping(path = "/getBoard/{boardId}", produces = "application/json")
	public ResponseEntity<Board> getBoard(@PathVariable String boardId, HttpServletRequest request) {
		int boardNum = Integer.parseInt(boardId);
		Board board = boardRepository.findOne(boardNum);
		return new ResponseEntity<Board>(board, HttpStatus.OK);
	}

}
