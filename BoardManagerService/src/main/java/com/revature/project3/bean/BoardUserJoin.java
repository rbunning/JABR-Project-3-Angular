package com.revature.project3.bean;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "BOARD_USER_JOIN")
public class BoardUserJoin implements Serializable {

	private static final long serialVersionUID = 1290117661830525220L;

	@EmbeddedId
	private BoardUserJoidId boardUserJoinId;

	public BoardUserJoin() {
		super();
	}

	public BoardUserJoin(BoardUserJoidId boardUserJoinId) {
		super();
		this.boardUserJoinId = boardUserJoinId;
	}

	public BoardUserJoidId getBoardUserJoinId() {
		return boardUserJoinId;
	}

	public void setBoardUserJoinId(BoardUserJoidId boardUserJoinId) {
		this.boardUserJoinId = boardUserJoinId;
	}

	@Override
	public String toString() {
		return "BoardUserJoin [boardUserJoinId=" + boardUserJoinId + "]";
	}

}

@Embeddable
class BoardUserJoidId implements Serializable {

	private static final long serialVersionUID = 4233284184413705831L;

	@Column(name = "BOARD_ID")
	private int boardId;

	@Column(name = "SU_ID")
	private int scrumUserId;

	public BoardUserJoidId() {
		super();
	}

	public BoardUserJoidId(int boardId, int scrumUserId) {
		super();
		this.boardId = boardId;
		this.scrumUserId = scrumUserId;
	}

	public int getBoardId() {
		return boardId;
	}

	public void setBoardId(int boardId) {
		this.boardId = boardId;
	}

	public int getScrumUserId() {
		return scrumUserId;
	}

	public void setScrumUserId(int scrumUserId) {
		this.scrumUserId = scrumUserId;
	}

	@Override
	public String toString() {
		return "BoardUserJoidId [boardId=" + boardId + ", scrumUserId=" + scrumUserId + "]";
	}
}
