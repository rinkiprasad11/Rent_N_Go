package com.app.dtos;

import java.time.LocalDateTime;

public class ErrorResponse {
	
	private String message;
	private LocalDateTime timeStamp;
	private String errDetails;
	
	//------------------------------constructor-------------------------//
	
	public ErrorResponse() {
		// TODO Auto-generated constructor stub
	}
	public ErrorResponse(String message,String errDetails) {
		super();
		this.message = message;
		this.errDetails=errDetails;
		this.timeStamp=LocalDateTime.now();
	}
	
	//------------------------------Getter and Setter-------------------------//
	
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public LocalDateTime getTimeStamp() {
		return timeStamp;
	}
	public void setTimeStamp(LocalDateTime timeStamp) {
		this.timeStamp = timeStamp;
	}
	public String getErrDetails() {
		return errDetails;
	}
	public void setErrDetails(String errDetails) {
		this.errDetails = errDetails;
	}
	
	
	//------------------------------ToString Method-------------------------//
	
	@Override
	public String toString() {
		return  message + " timeStamp=" + timeStamp ;
	}
	
	
	

}
