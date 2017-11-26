package com.revature.project3.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.sql.DataSource;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.revature.project3.bean.Task;
import com.revature.project3.dao.TaskRepository;

@EnableEurekaClient
@RestController
public class GetTaskCtrl {
	@Autowired
	DataSource dataSource;
	
	@Autowired
	TaskRepository taskRepo;
	
	@PostMapping("/getTask")
	public Task getTask(@RequestBody Task t) {
		return taskRepo.findOne(t.getTaskId());
	}
	
	@GetMapping(path = "/getTask/{taskId}")
	public Task getTask(@PathVariable String taskId) {
		int taskNum = Integer.parseInt(taskId);
		return taskRepo.findOne(taskNum);
	}
	
}
