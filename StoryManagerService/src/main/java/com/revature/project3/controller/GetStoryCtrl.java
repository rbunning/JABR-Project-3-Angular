package com.revature.project3.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.project3.beans.Story;
import com.revature.project3.service.StoryService;

@RestController
public class GetStoryCtrl {
	
	@Autowired
	StoryService service;
	
	// Gets all the stories within a board in certain lane using key value pairs.
	@PostMapping("/allStories")
	public List<Story> getAllStories(Story story) {
		return service.getListOfStoriesByBoardAndLaneType(story);
	}
	
	// Gets all the stories within a board in certain lane with lane as part of path.
	@PostMapping("/allStories/{lane}")
	public List<Story> getAllStories2(Story story, @PathVariable String lane) {
		story.setLaneType(Integer.parseInt(lane));
		return service.getListOfStoriesByBoardAndLaneType(story);
	}
	
	// Gets a single story by Id.
	@GetMapping("/story/{id}")
	public Story getStory(@PathVariable String id) {
		return service.getStoryById(new Story(Integer.parseInt(id)));
	}
}
