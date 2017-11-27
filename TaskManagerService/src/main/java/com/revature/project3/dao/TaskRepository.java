package com.revature.project3.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.revature.project3.bean.Task;

public interface TaskRepository extends CrudRepository<Task, Integer> {
	List <Task> findBystoryId (int storyId);
}
