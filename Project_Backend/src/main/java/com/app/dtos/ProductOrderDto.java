package com.app.dtos;

import java.util.List;

public class ProductOrderDto {
 private int userid;
 private int shopid;
 private double totalRent;
 private List<ProductCart> productorder;
 
//------------------------------constructor-------------------------//
 
 public ProductOrderDto() {
	
}
public ProductOrderDto( int userid, int shopid, double totalRent) {
	super();
	this.userid = userid;
	this.shopid = shopid;
	this.totalRent = totalRent;
}

//-------------------------------Getter And Setter-------------------------//


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

public double getTotalRent() {
	return totalRent;
}

public void setTotalRent(double totalRent) {
	this.totalRent = totalRent;
}

public List<ProductCart> getProductorder() {
	return productorder;
}

public void setProductorder(List<ProductCart> productorder) {
	this.productorder = productorder;
}

//------------------------------ToString Method-------------------------//

@Override
public String toString() {
	return "ProductOrderDto [ userid=" + userid + ", shopid=" + shopid + ", totalRent=" + totalRent
			+ ", productorder=" + productorder + "]";
}
 
}
