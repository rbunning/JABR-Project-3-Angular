package com.revature.project3.service;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.project3.beans.Story;
import com.revature.project3.dao.StoryRepository;

@Service(value = "AppStoryService")
public class StoryService {

	@Autowired
	StoryRepository StoryRepo;

	/* CREATE */
	// Adds a new Story to the database.
	public Story addStory(Story story) {
		story.setLaneType(1); // Sets the default lane to Backlog.
		story.setLastMoveDate(Date.valueOf(LocalDate.now())); // Set date to the date created.
		return StoryRepo.save(story);
	}

	/* READ */
	// Gets all the stories for a board.
	public List<Story> getListOfStoriesByBoard(Story story) {
		return StoryRepo.findByBoard(story.getBoard());
	}

	// Gets all the stories in a certain lane for a board.
	public List<Story> getListOfStoriesByBoardAndLaneType(Story story) {
		return StoryRepo.findByBoardAndLaneType(story.getBoard(), story.getLaneType());
	}

	// Gets A story by its id.
	public Story getStoryById(Story story) {
		return StoryRepo.findOne(story.getStoryId());
	}

	/* Update */
	// Gets the record that need to be updated. Changes the lane type and then saves the change.
	public Story updateStoryByLaneType(Story story) {
		Story dbStory = StoryRepo.findOne(story.getStoryId()); // Gets the current record.
		dbStory.setLaneType(story.getLaneType()); // Set the lane to the new lane.
		return StoryRepo.save(dbStory);
	}
}
