package com.revature.project3.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

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
public class GetBoardList {
	@Autowired
	DataSource dataSource;

	@Autowired
	BoardRepository boardRepository;

	@PostMapping(path = "/getBoards", consumes = "application/json", produces = "application/json")
	public ResponseEntity<List<Board>> getBoardList(String boardIds, HttpServletRequest request) {
		List<String> boardIdStringList = new ArrayList<String>(Arrays.asList(boardIds.split(",")));
		ArrayList<Integer> boardIdList = new ArrayList<Integer>();
		for(String boardId : boardIdStringList){
			boardIdList.add(Integer.parseInt(boardId.trim()));
		}
		List<Board> boardList = boardRepository.findByboardIdIn(boardIdList);
		return new ResponseEntity<List<Board>>(boardList, HttpStatus.OK);
	}

}
