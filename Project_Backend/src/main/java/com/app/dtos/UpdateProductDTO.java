package com.app.dtos;

public class UpdateProductDTO {
	
	private String name;
	private double rent;
	private String description;
	private String productStatus;
	
	//------------------------------constructor-------------------------//
	
	public UpdateProductDTO() {
		System.out.println(" in ctor of "+getClass().getName());
	}
	
	//------------------------------Getter And Setter-------------------------//

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public double getRent() {
		return rent;
	}

	public void setRent(double rent) {
		this.rent = rent;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getProductStatus() {
		return productStatus;
	}

	public void setProductStatus(String productStatus) {
		this.productStatus = productStatus;
	}
}
