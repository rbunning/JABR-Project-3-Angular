package com.revature.project3.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.project3.bean.ScrumUser;
import com.revature.project3.dao.ScrumUserRepository;

@RestController
public class GetAllUsersCtrl {

	@Autowired
	DataSource dataSource;

	@Autowired
	ScrumUserRepository scrumUserRepository;

	@GetMapping(path = "/getAllUsers", produces = "application/json")
	public ResponseEntity<List<ScrumUser>> getUsers(HttpServletRequest request) {
		List<ScrumUser> userList = (List<ScrumUser>) scrumUserRepository.findAll();
		return new ResponseEntity<List<ScrumUser>>(userList, HttpStatus.OK);
	}
}
