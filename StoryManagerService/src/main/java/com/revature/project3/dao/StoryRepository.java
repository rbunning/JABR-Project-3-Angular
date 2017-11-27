package com.revature.project3.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.revature.project3.beans.Story;

public interface StoryRepository extends CrudRepository<Story, Integer>{
	
	List<Story> findByBoard(int board);
	
	List<Story> findByBoardAndLaneType(int board, int laneType);

}
