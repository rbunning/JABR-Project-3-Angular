package com.revature.project3.bean;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

//import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="TASK")

public class Task implements Serializable {

	private static final long serialVersionUID = 4991925864180552219L;

	@Id
	@Column(name="TASK_ID")
	@SequenceGenerator(name="taskSeq",sequenceName="task_seq", allocationSize=1)
    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator="taskSeq")
	private int taskId;

//	@JsonIgnore
//	@ManyToOne
	@JoinColumn(name="STORY_ID")
	private int storyId;

	@Column(name="TASK_DESC")
	private String description;

	public Task() {
		super();
	}
	
	public Task(int storyId, String description) {
		super();
		this.storyId = storyId;
		this.description = description;
	}

	public Task(int taskId, int storyId, String description) {
		super();
		this.taskId = taskId;
		this.storyId = storyId;
		this.description = description;
	}

	public int getTaskId() {
		return taskId;
	}

	public void setTaskId(int taskId) {
		this.taskId = taskId;
	}

	public int getStoryId() {
		return storyId;
	}

	public void setStoryId(int storyId) {
		this.storyId = storyId;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "Task [taskId=" + taskId + ", storyId=" + storyId + ", description=" + description + "]";
	}

	

	

}
