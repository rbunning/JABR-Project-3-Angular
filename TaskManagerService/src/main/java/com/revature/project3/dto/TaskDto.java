package com.revature.project3.dto;

public class TaskDto {

	private int storyId;
	private String taskDescription;
	
	public TaskDto() {}

	public TaskDto(int storyId, String taskDescription) {
		super();
		this.storyId = storyId;
		this.taskDescription = taskDescription;
	}

	public int getStoryId() {
		return storyId;
	}

	public void setStoryId(int storyId) {
		this.storyId = storyId;
	}

	public String getTaskDescription() {
		return taskDescription;
	}

	public void setTaskDescription(String taskDescription) {
		this.taskDescription = taskDescription;
	}

	@Override
	public String toString() {
		return "TaskDto [storyId=" + storyId + ", taskDescription=" + taskDescription + "]";
	}
}
