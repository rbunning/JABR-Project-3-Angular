package com.revature.project3.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.project3.bean.ScrumUser;
import com.revature.project3.dao.ScrumUserRepository;

@RestController
public class LoginCtrl {
	@Autowired
	DataSource dataSource;

	@Autowired
	ScrumUserRepository scrumUserRepository;

	@PostMapping(path = "/login", consumes = "application/json", produces = "application/json")
	public ResponseEntity<ScrumUser> loginUser(ScrumUser userLogin, HttpServletRequest request) {
		ScrumUser validUser = new ScrumUser();
		validUser.setScrumUserId(0);
		List<ScrumUser> userList = (List<ScrumUser>) scrumUserRepository
				.findByscrumUserUsername(userLogin.getScrumUserUsername());
		if (userList.size() == 1) {
			validUser = userList.get(0);
			if (!validUser.getScrumUserPassword().equals(userLogin.getScrumUserPassword())) {
				validUser.setScrumUserId(0);
			}
		}
		return new ResponseEntity<ScrumUser>(validUser, HttpStatus.OK);
	}
}
