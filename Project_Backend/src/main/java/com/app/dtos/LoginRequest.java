package com.app.dtos;

public class LoginRequest {
	
	private String email;
	private String password;
	
	
	//------------------------------constructor-------------------------//
	
	public LoginRequest() {
		System.out.println(" in ctor of "+getClass().getName());
	}

	public LoginRequest(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}
	
	//------------------------------Getter and Setter-------------------------//

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
}
