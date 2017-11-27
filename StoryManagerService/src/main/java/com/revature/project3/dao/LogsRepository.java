package com.revature.project3.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.revature.project3.beans.Logs;
import com.revature.project3.beans.Story;

public interface LogsRepository  extends CrudRepository<Logs, Integer>{

	List<Logs> findBylogsDatedLike(String date);
	
}
