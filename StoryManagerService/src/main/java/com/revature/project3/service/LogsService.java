package com.revature.project3.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.project3.beans.Logs;
import com.revature.project3.dao.LogsRepository;

@Service(value = "AppLogsService")
public class LogsService {
	
	@Autowired
	LogsRepository logsRepo;
	
	/* READ */
	// Gets the current day and sends that as a parameter to the DB.
	public List<Logs> getLogsByDate() {
		return logsRepo.findBylogsDatedLike(LocalDate.now().toString());
	}
	
	// Get all the logs from the DB.
	public List<Logs> getAllLogs() {
		return (List<Logs>) logsRepo.findAll();
	}

}
