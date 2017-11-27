package com.revature.project3.beans;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

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
	private int board;

	@Column(name = "LANE_TYPE")
	private int laneType;

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

	public Story(int storyId) {
		super();
		this.storyId = storyId;
	}

	public Story(int storyId, int board, int laneType, String storyName, int storyPoints, String storyDesc,
			Date lastMoveDate) {
		super();
		this.storyId = storyId;
		this.board = board;
		this.laneType = laneType;
		this.storyName = storyName;
		this.storyPoints = storyPoints;
		this.storyDesc = storyDesc;
		this.lastMoveDate = lastMoveDate;
	}

	public Story(int board, int laneType, String storyName, int storyPoints, String storyDesc, Date lastMoveDate) {
		super();
		this.board = board;
		this.laneType = laneType;
		this.storyName = storyName;
		this.storyPoints = storyPoints;
		this.storyDesc = storyDesc;
		this.lastMoveDate = lastMoveDate;
	}

	public int getStoryId() {
		return storyId;
	}

	public void setStoryId(int storyId) {
		this.storyId = storyId;
	}

	public int getBoard() {
		return board;
	}

	public void setBoard(int board) {
		this.board = board;
	}

	public int getLaneType() {
		return laneType;
	}

	public void setLaneType(int laneType) {
		this.laneType = laneType;
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
		return "Story [storyId=" + storyId + ", board=" + board + ", laneType=" + laneType + ", storyName=" + storyName
				+ ", storyPoints=" + storyPoints + ", storyDesc=" + storyDesc + ", lastMoveDate=" + lastMoveDate + "]";
	}

}