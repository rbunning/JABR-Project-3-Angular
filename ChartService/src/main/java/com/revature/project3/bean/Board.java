package com.revature.project3.bean;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "BOARD")
public class Board implements Serializable {

	private static final long serialVersionUID = -3610929458932389168L;

	@Id
	@Column(name = "BOARD_ID")
	@SequenceGenerator(name = "boardSeq", sequenceName = "board_seq", allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "boardSeq")
	private int boardId;

	@Column(name = "BOARD_NAME")
	private String boardName;

	@Column(name = "CHART_ID")
	private int chartId;

	//Don't think I need BoardUserJoin, but will leave commented out for now
//	@ManyToMany
//	@JoinTable(name = "BOARD_USER_JOIN", joinColumns = @JoinColumn(name = "board_id", referencedColumnName = "board_id"), inverseJoinColumns = @JoinColumn(name = "su_id", referencedColumnName = "su_id"))
//	private Set<BoardUserJoin> boardUserJoins;

	public Board() {
		super();
	}

	public Board(int boardId) {
		super();
		this.boardId = boardId;
	}

	public Board(String boardName) {
		super();
		this.boardName = boardName;
	}

	public int getBoardId() {
		return boardId;
	}

	public void setBoardId(int boardId) {
		this.boardId = boardId;
	}

	public String getBoardName() {
		return boardName;
	}

	public void setBoardName(String boardName) {
		this.boardName = boardName;
	}

	public int getChartId() {
		return chartId;
	}

	public void setChartId(int chartId) {
		this.chartId = chartId;
	}

	@Override
	public String toString() {
		return "Board [boardId=" + boardId + ", boardName=" + boardName + ", chartId=" + chartId + "]";
	}

//	public Set<BoardUserJoin> getBoardUserJoins() {
//		return boardUserJoins;
//	}
//
//	public void setBoardUserJoins(Set<BoardUserJoin> boardUserJoins) {
//		this.boardUserJoins = boardUserJoins;
//	}

//	@Override
//	public String toString() {
//		return "Board [boardId=" + boardId + ", boardName=" + boardName + ", chartId=" + chartId + ", boardUserJoins="
//				+ boardUserJoins + "]";
//	}

	
}
