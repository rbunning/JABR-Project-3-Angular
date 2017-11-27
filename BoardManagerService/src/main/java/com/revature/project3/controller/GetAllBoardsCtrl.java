package com.revature.project3.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.project3.bean.Board;
import com.revature.project3.dao.BoardRepository;

@RestController
public class GetAllBoardsCtrl {
	@Autowired
	DataSource dataSource;

	@Autowired
	BoardRepository boardRepository;

	@GetMapping(path = "/getAllBoards", produces = "application/json")
	public ResponseEntity<List<Board>> getBoards(HttpServletRequest request) {
		List<Board> boardList = (List<Board>) boardRepository.findAll();
		return new ResponseEntity<List<Board>>(boardList, HttpStatus.OK);
	}

}
