package com.revature.project3.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.project3.bean.Task;
import com.revature.project3.dao.TaskRepository;
import com.revature.project3.dto.TaskDto;

@RestController
public class CreateTaskCtrl {
	@Autowired
	DataSource dataSource;

	@Autowired
	TaskRepository taskRepo;

	@PostMapping(path = "/newTask", consumes = "application/json", produces = "application/json")
	public ResponseEntity<Task> addTask(TaskDto newTask, HttpServletRequest request) {
		System.out.println("Testing new Task");
		System.out.println("New task is: " + newTask);
		// HttpSession session = request.getSession();
		Task t = new Task(newTask.getStoryId(), newTask.getTaskDescription());
		System.out.println("Task t = " + t);
		taskRepo.save(t);
		return new ResponseEntity<Task>(t, HttpStatus.OK);
	}

}
