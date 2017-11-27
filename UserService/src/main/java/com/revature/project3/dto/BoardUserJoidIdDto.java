package com.revature.project3.dto;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class BoardUserJoidIdDto implements Serializable {
	private static final long serialVersionUID = 4233284184413705831L;

	@Column(name = "BOARD_ID")
	private int boardId;

	@Column(name = "SU_ID")
	private int scrumUserId;

	public BoardUserJoidIdDto() {
		super();
	}

	public BoardUserJoidIdDto(int boardId, int scrumUserId) {
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
