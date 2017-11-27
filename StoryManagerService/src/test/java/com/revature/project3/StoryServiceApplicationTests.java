package com.revature.project3;

import static org.junit.Assert.assertNotNull;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.revature.project3.beans.Story;
import com.revature.project3.service.LogsService;
import com.revature.project3.service.StoryService;

@RunWith(SpringRunner.class)
@SpringBootTest
public class StoryServiceApplicationTests {

	@Autowired
	StoryService storyService;
	
	@Autowired
	LogsService logsService;
	
	Story testStory = new Story(1, 1, 1, null, 0, null, null);
	
	@Test
	public void testStoryById() {
		assertNotNull(storyService.getStoryById(testStory));
	}
	
	@Test
	public void testListOfStoriesByBoardAndLaneType() {
		assertNotNull(storyService.getListOfStoriesByBoardAndLaneType(testStory));
	}
	
	@Test
	public void testListOfStoriesByBoard() {
		assertNotNull(storyService.getListOfStoriesByBoard(testStory));
	}
	
	@Test
	public void testLogsByDate() {
		assertNotNull(logsService.getLogsByDate());
	}
	
	@Test
	public void testAllLogs() {
		assertNotNull(logsService.getAllLogs());
	}
}
