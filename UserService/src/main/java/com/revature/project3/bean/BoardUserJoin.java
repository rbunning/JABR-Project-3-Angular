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

@Entity
@Table(name = "BOARD_USER_JOIN")
public class BoardUserJoin implements Serializable {

	private static final long serialVersionUID = 1290117661830525220L;

	@Id
	@Column(name = "BUJ_ID")
	@SequenceGenerator(allocationSize = 1, sequenceName = "BUJ_ID_SEQ", name = "BUJ_SEQ")
	@GeneratedValue(generator = "BUJ_SEQ", strategy = GenerationType.SEQUENCE)
	private int bujId;

	@Column(name = "BOARD_ID")
	private int boardId;

	@ManyToOne
	@JoinColumn(name = "SU_ID")
	private ScrumUser scrumUser;

	public BoardUserJoin() {
		super();
	}

	public BoardUserJoin(int boardId, ScrumUser scrumUser) {
		super();
		this.boardId = boardId;
		this.scrumUser = scrumUser;
	}

	public BoardUserJoin(int bujId, int boardId, ScrumUser scrumUser) {
		super();
		this.bujId = bujId;
		this.boardId = boardId;
		this.scrumUser = scrumUser;
	}

	public int getBujId() {
		return bujId;
	}

	public void setBujId(int bujId) {
		this.bujId = bujId;
	}

	public int getBoardId() {
		return boardId;
	}

	public void setBoardId(int boardId) {
		this.boardId = boardId;
	}

	public ScrumUser getScrumUser() {
		return scrumUser;
	}

	public void setScrumUser(ScrumUser scrumUser) {
		this.scrumUser = scrumUser;
	}

	@Override
	public String toString() {
		return "BoardUserJoin [bujId=" + bujId + ", boardId=" + boardId + ", scrumUser=" + scrumUser + "]";
	}

}
