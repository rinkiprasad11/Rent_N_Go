package com.app.dtos;

import java.time.LocalDateTime;

public class PaymentDto {
	private int userid;
	private int shopid;
	private LocalDateTime payDate;
	private String payMethod;
	private double amount;
	
	
	//------------------------------constructor-------------------------//

	public PaymentDto(int userid, int shopid, LocalDateTime payDate, String payMethod, double amount) {
		super();
		this.userid = userid;
		this.shopid = shopid;
		this.payDate = payDate;
		this.payMethod = payMethod;
		this.amount = amount;
	}
	
	//------------------------------Getter And Setter-------------------------//

	public int getUserid() {
		return userid;
	}

	public void setUserid(int userid) {
		this.userid = userid;
	}

	public int getShopid() {
		return shopid;
	}

	public void setShopid(int shopid) {
		this.shopid = shopid;
	}

	public LocalDateTime getPayDate() {
		return payDate;
	}

	public void setPayDate(LocalDateTime payDate) {
		this.payDate = payDate;
	}

	public String getPayMethod() {
		return payMethod;
	}

	public void setPayMethod(String payMethod) {
		this.payMethod = payMethod;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

}
