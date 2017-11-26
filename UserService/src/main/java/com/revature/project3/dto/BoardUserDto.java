package com.revature.project3.dto;

public class BoardUserDto {

	private int boardId;
	private int scrumUserId;

	public BoardUserDto() {
		super();
	}

	public BoardUserDto(int boardId, int scrumUserId) {
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
		return "BoardUserDto [boardId=" + boardId + ", scrumUserId=" + scrumUserId + "]";
	}

}
