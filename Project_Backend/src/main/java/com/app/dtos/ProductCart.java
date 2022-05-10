 package com.app.dtos;

public class ProductCart {
private Integer id;
private String name;
private Double rent;
private int quantity;

//------------------------------constructor-------------------------//

public ProductCart() {
	// TODO Auto-generated constructor stub
}

public ProductCart(int id, String name, Double rent, int quantity) {
	super();
	this.id = id;
	this.name = name;
	this.rent = rent;
	this.quantity = quantity;
}

//------------------------------Getter And Setter-------------------------//

public Integer getId() {
	return id;
}

public void setId(Integer id) {
	this.id = id;
}

public String getName() {
	return name;
}

public void setName(String name) {
	this.name = name;
}

public Double getRent() {
	return rent;
}

public void setRent(Double rent) {
	this.rent = rent;
}

public int getQuantity() {
	return quantity;
}

public void setQuantity(int quantity) {
	this.quantity = quantity;
}

//------------------------------ToString Method-------------------------//

@Override
public String toString() {
	return "ProductList [id=" + id + ", name=" + name + ", rent=" + rent + ", quantity=" + quantity + "]";
}

}
