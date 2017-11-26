package com.revature.project3.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.revature.project3.bean.Task;
import com.revature.project3.dao.TaskRepository;

@EnableEurekaClient
@RestController
public class GetAllTasksCtrl {

	@Autowired
	DataSource dataSource;
	
	@Autowired
	TaskRepository taskRepo;
	
	@GetMapping(path = "/getAllTasks/{storyId}", produces = "application/json")	
	public ResponseEntity<List<Task>> getTasksByStoryId(@PathVariable String storyId, HttpServletRequest request) {
		int storyNum = Integer.parseInt(storyId);
		List<Task> taskList = (List<Task>) taskRepo.findBystoryId(storyNum);
		return new ResponseEntity<List<Task>>(taskList, HttpStatus.OK);
	}
}
