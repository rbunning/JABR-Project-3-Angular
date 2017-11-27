package com.revature.project3.bean;

//  **Not sure if I will need this bean

import java.io.Serializable;
import java.sql.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "STORY")
public class Story implements Serializable {

	private static final long serialVersionUID = 3437652641718304355L;

	@Id
	@Column(name = "STORY_ID")
	@SequenceGenerator(name = "storySeq", sequenceName = "story_seq", allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "storySeq")
	private int storyId;

	@Column(name = "BOARD_ID")
	private int boardId;

	@Column(name = "LT_ID")
	private int laneTypeId;

	@Column(name = "STORY_NAME")
	private String storyName;

	@Column(name = "STORY_POINTS")
	private int storyPoints;

	@Column(name = "STORY_DESC")
	private String storyDesc;

	@Column(name = "LAST_MOVE_DATE")
	private Date lastMoveDate;

	public Story() {
		super();
	}

	public Story(int boardId, int laneTypeId, String storyName, int storyPoints, String storyDesc,
			Date lastMoveDate) {
		super();
		this.boardId = boardId;
		this.laneTypeId = laneTypeId;
		this.storyName = storyName;
		this.storyPoints = storyPoints;
		this.storyDesc = storyDesc;
		this.lastMoveDate = lastMoveDate;
	}

	public Story(int storyId, int boardId, int laneTypeId, String storyName, int storyPoints, String storyDesc,
			Date lastMoveDate) {
		super();
		this.storyId = storyId;
		this.boardId = boardId;
		this.laneTypeId = laneTypeId;
		this.storyName = storyName;
		this.storyPoints = storyPoints;
		this.storyDesc = storyDesc;
		this.lastMoveDate = lastMoveDate;
	}

	public int getStory() {
		return storyId;
	}

	//Won't need tasks for Chart
//	public Set<Task> getTask() {
//		return task;
//	}
//
//	public void setTask(Set<Task> task) {
//		this.task = task;
//	}

	public void setStory(int storyId) {
		this.storyId = storyId;
	}

	public int getBoardId() {
		return boardId;
	}

	public void setBoard(int boardId) {
		this.boardId = boardId;
	}

	public int getLaneTypeId() {
		return laneTypeId;
	}

	public void setLaneTypeId(int laneTypeId) {
		this.laneTypeId = laneTypeId;
	}

	public String getStoryName() {
		return storyName;
	}

	public void setStoryName(String storyName) {
		this.storyName = storyName;
	}

	public int getStoryPoints() {
		return storyPoints;
	}

	public void setStoryPoints(int storyPoints) {
		this.storyPoints = storyPoints;
	}

	public String getStoryDesc() {
		return storyDesc;
	}

	public void setStoryDesc(String storyDesc) {
		this.storyDesc = storyDesc;
	}

	public Date getLastMoveDate() {
		return lastMoveDate;
	}

	public void setLastMoveDate(Date lastMoveDate) {
		this.lastMoveDate = lastMoveDate;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "Story [storyId=" + storyId + ", boardId=" + boardId + ", laneId=" + laneTypeId + ", storyName=" + storyName
				+ ", storyPoints=" + storyPoints + ", storyDesc=" + storyDesc + ", lastMoveDate=" + lastMoveDate + "]";
	}
}