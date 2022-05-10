package com.app.dtos;

public class AddProductDTO {
	
	private String name;
	private double rent;
	private String description;
	private boolean inactiveStatus;
	private String category;
	
	//------------------------------constructor-------------------------//
	
	public AddProductDTO() {
		System.out.println(" in ctor of "+getClass().getName());
	}
	
	
	//------------------------------Getter and Setter-------------------------//

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public double getRent() {
		return rent;
	}

	public void setRent(double rent) {
		this.rent = rent;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public boolean isInactiveStatus() {
		return inactiveStatus;
	}

	public void setInactiveStatus(boolean inactiveStatus) {
		this.inactiveStatus = inactiveStatus;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	
	
	

}
